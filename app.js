// ==========================================
// CODEQUEST — app.js v3.0
// Sistema Profissional com Dark Mode, Certificados, Temas
// ==========================================

// --- ESTADO UNIFICADO DA APLICAÇÃO ---
const appState = {
  activeTab: 'aprender',
  currentLesson: null,
  currentQuestionIdx: 0,
  selectedAnswer: null,
  lives: 3,
  isAnswerChecked: false,
  darkMode: localStorage.getItem('cq_darkmode') === 'true',
  
  user: {
    xp: parseInt(localStorage.getItem('cq_v3_xp')) || 0,
    streak: parseInt(localStorage.getItem('cq_v3_streak')) || 1,
    completedLessons: JSON.parse(localStorage.getItem('cq_v3_completed')) || [],
    completedProjects: JSON.parse(localStorage.getItem('cq_v3_projects')) || [],
    completedCertificates: JSON.parse(localStorage.getItem('cq_v3_certs')) || [],
    correctStreak: parseInt(localStorage.getItem('cq_v3_cstreak')) || 0,
    nivelAtual: 1,
    titulo: "Iniciante"
  }
};

// --- INICIALIZADOR ---
document.addEventListener('DOMContentLoaded', () => {
  // Aplicar tema
  if (appState.darkMode) {
    document.documentElement.style.setProperty('--bg-app', '#1a1a1a');
    document.documentElement.style.setProperty('--bg-body', '#0f0f0f');
    document.documentElement.style.setProperty('--text-main', '#e5e5e5');
  }

  appEngine.syncStats();
  appNavigation.renderRoadmap();
  appEngine.renderSidebarRanking();
  appEngine.renderDailyMissions();
  appEngine.atualizarNivel();
});

// --- NAVEGAÇÃO ---
const appNavigation = {
  changeTab(tabId) {
    appState.activeTab = tabId;
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    const targetBtn = document.querySelector(`button[onclick*="'${tabId}'"]`);
    if(targetBtn) targetBtn.classList.add('active');
    
    const targetPanel = document.getElementById(`tab-${tabId}`);
    if(targetPanel) targetPanel.classList.add('active');

    if(tabId === 'ranking') this.renderMobileRanking();
  },

  renderRoadmap() {
    const container = document.getElementById('roadmapContainer');
    if(!container) return;
    container.innerHTML = '';

    CODEQUEST_ROADMAP.fases.forEach(fase => {
      const faseBlock = document.createElement('div');
      faseBlock.className = 'phase-block';

      const faseHeader = document.createElement('div');
      faseHeader.className = 'phase-header-block';
      faseHeader.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 2rem;">${fase.emoji}</span>
          <div>
            <h2 class="phase-title">${fase.nome}</h2>
            <p class="phase-desc">${fase.descricao}</p>
          </div>
        </div>
        <div class="phase-progress" style="margin-top: 12px;">
          <div style="height: 8px; background: var(--border); border-radius: 4px; overflow: hidden;">
            <div style="height: 100%; background: var(--brand-primary); width: ${fase.progresso}%; transition: width 0.3s;"></div>
          </div>
        </div>
      `;
      faseBlock.appendChild(faseHeader);

      fase.modulos.forEach((modulo, indexMod) => {
        const modWrapper = document.createElement('div');
        modWrapper.className = 'module-wrapper';
        modWrapper.style.marginTop = '24px';

        const metaInfo = document.createElement('div');
        metaInfo.className = 'module-meta-info';
        metaInfo.innerHTML = `
          <div class="module-title-container">
            <span class="module-emoji-badge">${modulo.emoji}</span>
            <h3 class="module-title-text">${modulo.nome}</h3>
          </div>
          <span class="module-bonus-tag">+${modulo.xpBono} XP</span>
        `;
        modWrapper.appendChild(metaInfo);

        const flowContainer = document.createElement('div');
        flowContainer.className = 'nodes-spine-flow';

        modulo.licoes.forEach((licao, indexLic) => {
          const nodeButton = document.createElement('button');
          
          const isCompleted = appState.user.completedLessons.includes(licao.id);
          let isAvailable = false;
          if (indexMod === 0 && indexLic === 0) {
            isAvailable = true;
          } else {
            isAvailable = this.checkPreviousLessonAccess(fase, indexMod, indexLic);
          }

          nodeButton.className = `lesson-circle-node ${isCompleted ? 'completed' : isAvailable ? 'available' : 'locked'}`;

          const iconSpan = document.createElement('span');
          iconSpan.textContent = isCompleted ? '✓' : licao.questoes.length === 0 ? '🔒' : modulo.emoji;
          nodeButton.appendChild(iconSpan);

          const tooltip = document.createElement('div');
          tooltip.className = 'node-floating-tooltip';
          tooltip.innerHTML = `
            <span class="tooltip-title">${licao.titulo}</span>
            <span class="tooltip-sub">${licao.dificuldade} • ${licao.tempo}</span>
            <span class="tooltip-sub" style="margin-top: 4px;">${isCompleted ? '✓ Concluído' : isAvailable ? '+' + licao.xp + ' XP' : 'Bloqueado'}</span>
          `;
          nodeButton.appendChild(tooltip);

          if(isAvailable && licao.questoes.length > 0) {
            nodeButton.onclick = () => appEngine.openLesson(licao, modulo);
          }

          flowContainer.appendChild(nodeButton);
        });

        modWrapper.appendChild(flowContainer);
        faseBlock.appendChild(modWrapper);
      });

      container.appendChild(faseBlock);
    });
  },

  checkPreviousLessonAccess(fase, currentModIdx, currentLicIdx) {
    if (currentLicIdx > 0) {
      const prevLessonId = fase.modulos[currentModIdx].licoes[currentLicIdx - 1].id;
      return appState.user.completedLessons.includes(prevLessonId);
    } else if (currentModIdx > 0) {
      const prevModLessons = fase.modulos[currentModIdx - 1].licoes;
      if (prevModLessons.length === 0) return true;
      const lastLessonOfPrevModId = prevModLessons[prevModLessons.length - 1].id;
      return appState.user.completedLessons.includes(lastLessonOfPrevModId);
    }
    return false;
  },

  renderMobileRanking() {
    const mobileList = document.getElementById('mobileRankingList');
    if(mobileList) mobileList.innerHTML = appEngine.generateRankingHTML();
  }
};

// --- ENGINE ---
const appEngine = {
  syncStats() {
    document.getElementById('globalXP').textContent = appState.user.xp;
    document.getElementById('globalLevel').textContent = appState.user.nivelAtual;
  },

  atualizarNivel() {
    const xp = appState.user.xp;
    if (xp >= 5000) { appState.user.nivelAtual = 10; appState.user.titulo = "Master"; }
    else if (xp >= 4000) { appState.user.nivelAtual = 9; appState.user.titulo = "Expert"; }
    else if (xp >= 3000) { appState.user.nivelAtual = 8; appState.user.titulo = "Avançado"; }
    else if (xp >= 2000) { appState.user.nivelAtual = 7; appState.user.titulo = "Intermediário"; }
    else if (xp >= 1000) { appState.user.nivelAtual = 6; appState.user.titulo = "Competente"; }
    else if (xp >= 500) { appState.user.nivelAtual = 5; appState.user.titulo = "Proficiente"; }
    else if (xp >= 250) { appState.user.nivelAtual = 4; appState.user.titulo = "Aprendiz"; }
    else if (xp >= 100) { appState.user.nivelAtual = 3; appState.user.titulo = "Iniciante"; }
    else { appState.user.nivelAtual = 1; appState.user.titulo = "Novato"; }
  },

  saveProgression() {
    localStorage.setItem('cq_v3_xp', appState.user.xp);
    localStorage.setItem('cq_v3_streak', appState.user.streak);
    localStorage.setItem('cq_v3_completed', JSON.stringify(appState.user.completedLessons));
    localStorage.setItem('cq_v3_cstreak', appState.user.correctStreak);
    localStorage.setItem('cq_v3_projects', JSON.stringify(appState.user.completedProjects));
    localStorage.setItem('cq_v3_certs', JSON.stringify(appState.user.completedCertificates));
    this.atualizarNivel();
    this.syncStats();
    appNavigation.renderRoadmap();
    this.renderSidebarRanking();
    this.renderDailyMissions();
  },

  generateRankingHTML() {
    const rankingMock = [...CODEQUEST_ROADMAP.rankingEstatico];
    const userRow = rankingMock.find(r => r.isUser);
    if(userRow) userRow.xp = appState.user.xp;
    
    rankingMock.sort((a,b) => b.xp - a.xp);

    return rankingMock.map((player, idx) => `
      <div class="ranking-row ${player.isUser ? 'user-row' : ''}">
        <span class="rank-position">${idx + 1}º</span>
        <span class="rank-name">${player.usuario}</span>
        <span class="rank-xp">${player.xp} XP</span>
      </div>
    `).join('');
  },

  renderSidebarRanking() {
    const sidebarList = document.getElementById('sidebarRankingList');
    if(sidebarList) sidebarList.innerHTML = this.generateRankingHTML();
  },

  renderDailyMissions() {
    const container = document.getElementById('dailyMissionsContainer');
    if(!container) return;

    const m1 = CODEQUEST_ROADMAP.missoesDiarias[0];
    m1.atual = Math.min(appState.user.xp, m1.meta);
    m1.concluida = m1.atual >= m1.meta;

    const m2 = CODEQUEST_ROADMAP.missoesDiarias[1];
    m2.atual = Math.min(appState.user.completedLessons.length, m2.meta);
    m2.concluida = m2.atual >= m2.meta;

    container.innerHTML = CODEQUEST_ROADMAP.missoesDiarias.map(m => {
      const pct = Math.min((m.atual / m.meta) * 100, 100);
      return `
        <div class="mission-item ${m.concluida ? 'done' : ''}">
          <div class="mission-row-info">
            <span>${m.emoji} ${m.texto}</span>
            <span>${m.atual}/${m.meta}</span>
          </div>
          <div class="mission-progress-track">
            <div class="mission-progress-fill" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  },

  openLesson(licao, modulo) {
    appState.currentLesson = licao;
    appState.currentQuestionIdx = 0;
    appState.lives = 3;
    appState.isAnswerChecked = false;
    appState.selectedAnswer = null;

    document.getElementById('lessonModal').classList.add('active');
    this.renderQuestionNode();
  },

  exitLesson() {
    if(confirm('Deseja sair? Seu progresso será perdido.')){
      document.getElementById('lessonModal').classList.remove('active');
      appState.currentLesson = null;
    }
  },

  renderQuestionNode() {
    this.updateLessonHeaderUI();
    
    const questionBox = document.getElementById('questionBox');
    const actionBtn = document.getElementById('btnMainAction');
    const feedbackBox = document.getElementById('feedbackMessage');
    
    feedbackBox.className = "feedback-message-box";
    feedbackBox.innerHTML = "";
    actionBtn.textContent = "Verificar Resposta";
    actionBtn.setAttribute('disabled', 'true');
    
    appState.isAnswerChecked = false;
    appState.selectedAnswer = null;

    const questao = appState.currentLesson.questoes[appState.currentQuestionIdx];
    
    let htmlContent = `
      <p style="text-transform: uppercase; color: var(--text-muted); font-size: 0.8rem; font-weight: 700; margin-bottom: 8px;">
        ${questao.type === 'multipla' ? 'Múltipla Escolha' : questao.type === 'verdadeiro-falso' ? 'Verdadeiro ou Falso' : 'Complete a Lacuna'}
      </p>
      <h3 class="question-label-headline">${this.escape(questao.question)}</h3>
      ${appState.currentLesson.exemplo ? `<pre style="background: #f5f5f5; padding: 12px; border-radius: 8px; margin: 12px 0; font-size: 0.85rem; overflow-x: auto;"><code>${this.escape(appState.currentLesson.exemplo)}</code></pre>` : ''}
    `;

    if(questao.type === 'multipla') {
      htmlContent += `<div class="options-stack">`;
      questao.options.forEach((opt, idx) => {
        htmlContent += `
          <button class="option-selection-card" onclick="appEngine.selectOptionCard(${idx})" id="opt-${idx}">
            ${this.escape(opt)}
          </button>
        `;
      });
      htmlContent += `</div>`;
    } 
    else if(questao.type === 'verdadeiro-falso') {
      htmlContent += `
        <div class="options-stack">
          <button class="option-selection-card" onclick="appEngine.selectOptionCard(true)" id="opt-true">👍 Verdadeiro</button>
          <button class="option-selection-card" onclick="appEngine.selectOptionCard(false)" id="opt-false">👎 Falso</button>
        </div>
      `;
    }
    else if(questao.type === 'preencher') {
      htmlContent += `
        <input type="text" class="text-input-field" id="blankInput" placeholder="Digite sua resposta..." oninput="appEngine.checkInputFill()">
      `;
    }

    questionBox.innerHTML = htmlContent;
  },

  updateLessonHeaderUI() {
    const total = appState.currentLesson.questoes.length;
    const current = appState.currentQuestionIdx;
    const percentage = total > 0 ? (current / total) * 100 : 0;
    
    document.getElementById('lessonProgressBar').style.width = `${percentage}%`;
    
    const livesDiv = document.getElementById('lessonLives');
    livesDiv.innerHTML = '';
    for(let i=1; i<=3; i++){
      const heart = document.createElement('span');
      heart.textContent = '❤️';
      if(i > appState.lives) heart.className = 'dead';
      livesDiv.appendChild(heart);
    }
  },

  selectOptionCard(val) {
    if(appState.isAnswerChecked) return;
    appState.selectedAnswer = val;
    
    document.querySelectorAll('.option-selection-card').forEach(c => c.classList.remove('selected'));
    
    const target = document.getElementById(`opt-${val}`);
    if(target) target.classList.add('selected');
    
    document.getElementById('btnMainAction').removeAttribute('disabled');
  },

  checkInputFill() {
    const val = document.getElementById('blankInput').value.trim();
    const btn = document.getElementById('btnMainAction');
    if(val.length > 0) {
      btn.removeAttribute('disabled');
      appState.selectedAnswer = val;
    } else {
      btn.setAttribute('disabled', 'true');
    }
  },

  processFooterClick() {
    if(!appState.isAnswerChecked) {
      this.verifyAnswerEvent();
    } else {
      this.advanceStepEvent();
    }
  },

  verifyAnswerEvent() {
    appState.isAnswerChecked = true;
    const questao = appState.currentLesson.questoes[appState.currentQuestionIdx];
    let isCorrect = false;

    const actionBtn = document.getElementById('btnMainAction');
    const feedbackBox = document.getElementById('feedbackMessage');

    if(questao.type === 'multipla') {
      isCorrect = (appState.selectedAnswer === questao.answer);
      document.querySelectorAll('.option-selection-card').forEach((card, index) => {
        if(index === questao.answer) card.classList.add('correct-highlight');
        if(index === appState.selectedAnswer && !isCorrect) card.classList.add('wrong-highlight');
      });
    }
    else if(questao.type === 'verdadeiro-falso') {
      isCorrect = (appState.selectedAnswer === questao.answer);
      const cCard = document.getElementById(`opt-${questao.answer}`);
      if(cCard) cCard.classList.add('correct-highlight');
      if(!isCorrect) {
        const wCard = document.getElementById(`opt-${appState.selectedAnswer}`);
        if(wCard) wCard.classList.add('wrong-highlight');
      }
    }
    else if(questao.type === 'preencher') {
      const inputEl = document.getElementById('blankInput');
      isCorrect = (appState.selectedAnswer.toLowerCase() === questao.answer.toLowerCase());
      if(isCorrect) {
        inputEl.style.borderColor = "var(--color-success)";
        inputEl.style.backgroundColor = "#d7ffb8";
      } else {
        inputEl.style.borderColor = "var(--color-error)";
        inputEl.style.backgroundColor = "#ffdfe0";
      }
    }

    if(isCorrect) {
      appState.user.correctStreak = (appState.user.correctStreak || 0) + 1;
      feedbackBox.className = "feedback-message-box correct";
      feedbackBox.innerHTML = `<span class="feedback-title">✓ Muito bem!</span><span class="feedback-expl">${questao.explanation}</span>`;
    } else {
      appState.user.correctStreak = 0;
      appState.lives--;
      this.updateLessonHeaderUI();
      feedbackBox.className = "feedback-message-box wrong";
      feedbackBox.innerHTML = `<span class="feedback-title">✗ Resposta Incorreta</span><span class="feedback-expl">${questao.explanation}</span>`;
    }

    actionBtn.textContent = "Continuar";
  },

  advanceStepEvent() {
    if(appState.lives <= 0) {
      this.renderEndScreen(false);
      return;
    }

    appState.currentQuestionIdx++;
    const total = appState.currentLesson.questoes.length;

    if(appState.currentQuestionIdx >= total) {
      this.renderEndScreen(true);
    } else {
      this.renderQuestionNode();
    }
  },

  renderEndScreen(isWin) {
    this.updateLessonHeaderUI();
    const box = document.getElementById('questionBox');
    const actionBtn = document.getElementById('btnMainAction');
    document.getElementById('feedbackMessage').innerHTML = "";
    
    actionBtn.textContent = "Fechar e Voltar";
    actionBtn.removeAttribute('disabled');
    actionBtn.onclick = () => {
      document.getElementById('lessonModal').classList.remove('active');
      actionBtn.onclick = () => appEngine.processFooterClick();
    };

    if(isWin) {
      const xpGanho = appState.currentLesson.xp;
      if(!appState.user.completedLessons.includes(appState.currentLesson.id)) {
        appState.user.completedLessons.push(appState.currentLesson.id);
        appState.user.xp += xpGanho;
        this.saveProgression();
        this.triggerXpToastNotification(xpGanho);
      }

      box.innerHTML = `
        <div class="results-rendering-view">
          <span class="badge-icon">🏆</span>
          <h2>Lição Concluída!</h2>
          <p>Parabéns! Você demonstrou domínio nos tópicos!</p>
          <div class="results-stats-row">
            <div class="stat-box-result"><span class="res-val">+${xpGanho}</span><span class="res-lbl">XP</span></div>
            <div class="stat-box-result"><span class="res-val">${appState.lives}/3</span><span class="res-lbl">Vidas</span></div>
            <div class="stat-box-result"><span class="res-val">${appState.user.nivelAtual}</span><span class="res-lbl">Nível</span></div>
          </div>
        </div>
      `;
    } else {
      box.innerHTML = `
        <div class="results-rendering-view">
          <span class="badge-icon">💀</span>
          <h2>Vidas Esgotadas!</h2>
          <p>Não desista! Revise os conceitos e tente novamente.</p>
        </div>
      `;
    }
  },

  triggerXpToastNotification(qtd) {
    const toast = document.getElementById('xpToast');
    if(!toast) return;
    toast.textContent = `🎉 +${qtd} XP ADQUIRIDOS • Nível ${appState.user.nivelAtual} (${appState.user.titulo})`;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3500);
  },

  escape(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  toggleDarkMode() {
    appState.darkMode = !appState.darkMode;
    localStorage.setItem('cq_darkmode', appState.darkMode);
    if (appState.darkMode) {
      document.documentElement.style.setProperty('--bg-app', '#1a1a1a');
      document.documentElement.style.setProperty('--bg-body', '#0f0f0f');
      document.documentElement.style.setProperty('--text-main', '#e5e5e5');
    } else {
      document.documentElement.style.setProperty('--bg-app', '#ffffff');
      document.documentElement.style.setProperty('--bg-body', '#f7f9fa');
      document.documentElement.style.setProperty('--text-main', '#3c3c3c');
    }
  }
};
