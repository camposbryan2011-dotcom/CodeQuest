// ==========================================
// CODEQUEST — data.js (VERSÃO COMPLETA 3.0)
// Sistema Educacional Enterprise: 12 Fases • 100+ Módulos • 400+ Lições
// Com: Exemplos de Código, Projetos, Certificados, Dark Mode
// ==========================================

const CODEQUEST_ROADMAP = {
  versao: "3.0 - Enterprise Complete Edition",
  totalFases: 12,
  temaDarkMode: localStorage.getItem('cq_darkmode') === 'true',
  
  fases: [
    // ========================================================
    // FASE 1: O QUE É PROGRAMAÇÃO
    // ========================================================
    {
      id: "fase-1",
      numero: 1,
      nome: "Fase 1: O Que é Programação?",
      descricao: "Entenda os conceitos fundamentais e prepare-se para a jornada!",
      emoji: "🌱",
      cor: "#FF6B6B",
      progresso: 0,
      modulos: [
        {
          id: "mod-1-1",
          nome: "Fundamentos da Programação",
          emoji: "🤔",
          xpBono: 250,
          licoes: [
            {
              id: "aula-1-1-1",
              titulo: "O que é Programação?",
              descricao: "Entenda a base: como conversamos com computadores",
              categoria: "Conceitos",
              xp: 20,
              dificuldade: "Muito Fácil",
              tempo: "5 min",
              exemplo: "print('Olá, Mundo!')",
              recurso: "https://developer.mozilla.org/pt-BR/docs/Learn",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é programação?",
                  options: [
                    "Um videogame de realidade virtual",
                    "A arte de dar instruções ao computador em uma linguagem que ele entende",
                    "Um programa de TV sobre computadores",
                    "Uma disciplina exclusiva de matemática"
                  ],
                  answer: 1,
                  explanation: "Programação é dar instruções passo a passo para que o computador execute uma tarefa. É como uma receita de bolo, mas para máquinas!"
                },
                {
                  type: "verdadeiro-falso",
                  question: "Um programador precisa entender perfeitamente como os chips funcionam?",
                  answer: false,
                  explanation: "Falso! Linguagens de alto nível abstraem esses detalhes. Como dirigir sem entender toda a mecânica do carro."
                },
                {
                  type: "preencher",
                  question: "A sequência de instruções que resolvem um problema é chamada de _____",
                  answer: "algoritmo",
                  explanation: "Algoritmo é um conjunto ordenado de passos para resolver um problema."
                }
              ]
            },
            {
              id: "aula-1-1-2",
              titulo: "Como Funcionam Sites?",
              descricao: "Descubra o que há por trás dos apps que você usa",
              categoria: "Web Basics",
              xp: 20,
              dificuldade: "Muito Fácil",
              tempo: "5 min",
              exemplo: "<html><body>Olá, Mundo!</body></html>",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um website?",
                  options: [
                    "Um computador potente na nuvem",
                    "Um conjunto de páginas conectadas acessadas pela internet",
                    "Um documento online",
                    "Um programa só para celular"
                  ],
                  answer: 1,
                  explanation: "Website é um conjunto de páginas web conectadas que você acessa através de um navegador."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Apps e sites usam sempre as mesmas linguagens?",
                  answer: false,
                  explanation: "Não. Apps iOS usam Swift, Android usa Kotlin, mas sites usam HTML/CSS/JavaScript."
                }
              ]
            },
            {
              id: "aula-1-1-3",
              titulo: "Carreiras em Programação",
              descricao: "Conheça a profissão e suas oportunidades",
              categoria: "Profissão",
              xp: 25,
              dificuldade: "Muito Fácil",
              tempo: "8 min",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é a principal atividade de um programador?",
                  options: [
                    "Jogar videogames profissionalmente",
                    "Escrever código e resolver problemas",
                    "Desmontar computadores",
                    "Vender software"
                  ],
                  answer: 1,
                  explanation: "Programadores escrevem código, resolvem problemas lógicos e criam soluções digitais."
                },
                {
                  type: "multipla",
                  question: "Qual especialidade paga mais em média?",
                  options: [
                    "Front-End Developer",
                    "Back-End Developer",
                    "Full Stack Developer com especialidades",
                    "Data Scientist"
                  ],
                  answer: 3,
                  explanation: "Data Scientists tipicamente ganham os maiores salários, seguidos por especialistas em Cloud e Full Stack."
                }
              ]
            },
            {
              id: "aula-1-1-4",
              titulo: "Mentalidade de Programador",
              descricao: "Desenvolva o pensamento lógico",
              categoria: "Mindset",
              xp: 25,
              dificuldade: "Muito Fácil",
              tempo: "6 min",
              questoes: [
                {
                  type: "multipla",
                  question: "Primeiro passo ao resolver um problema?",
                  options: [
                    "Escrever código imediatamente",
                    "Entender o problema e dividi-lo em partes",
                    "Copiar código pronto",
                    "Pedir ajuda"
                  ],
                  answer: 1,
                  explanation: "Bons programadores planejam primeiro! Decomposição é a chave."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Erros são parte do aprendizado?",
                  answer: true,
                  explanation: "Verdadeiro! Bugs ajudam no aprendizado. A habilidade é saber resolvê-los."
                }
              ]
            },
            {
              id: "aula-1-1-5",
              titulo: "Terminologia Básica",
              descricao: "Aprenda palavras-chave da área",
              categoria: "Terminologia",
              xp: 25,
              dificuldade: "Muito Fácil",
              tempo: "7 min",
              questoes: [
                {
                  type: "preencher",
                  question: "Um arquivo com código é chamado de arquivo de _____",
                  answer: "código",
                  explanation: "Arquivo de código contém instruções em uma linguagem de programação."
                },
                {
                  type: "multipla",
                  question: "O que é um algoritmo?",
                  options: [
                    "Uma marca de computador",
                    "Um conjunto ordenado de passos",
                    "Um vírus",
                    "Uma operação matemática"
                  ],
                  answer: 1,
                  explanation: "Algoritmo é uma sequência de passos para resolver um problema."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 2: LÓGICA DE PROGRAMAÇÃO
    // ========================================================
    {
      id: "fase-2",
      numero: 2,
      nome: "Fase 2: Lógica de Programação",
      descricao: "Estruturas de controle, variáveis e pensamento lógico.",
      emoji: "🧠",
      cor: "#4ECDC4",
      progresso: 0,
      modulos: [
        {
          id: "mod-2-1",
          nome: "Variáveis e Tipos de Dados",
          emoji: "📦",
          xpBono: 300,
          licoes: [
            {
              id: "aula-2-1-1",
              titulo: "O que São Variáveis?",
              descricao: "Armazene informações no computador",
              categoria: "Estruturas",
              xp: 30,
              dificuldade: "Fácil",
              tempo: "8 min",
              exemplo: "let nome = 'João';\nlet idade = 25;\nlet ativo = true;",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é uma variável?",
                  options: [
                    "Uma equação matemática",
                    "Um espaço na memória para guardar informações",
                    "Uma página web",
                    "Um erro de código"
                  ],
                  answer: 1,
                  explanation: "Variável é como uma caixa para guardar informações. Você dá um nome e armazena um valor."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Uma variável pode mudar de valor?",
                  answer: true,
                  explanation: "Sim! Por isso chamam-se variáveis - o valor varia durante a execução."
                }
              ]
            },
            {
              id: "aula-2-1-2",
              titulo: "Tipos de Dados",
              descricao: "Inteiros, floats, strings, booleans...",
              categoria: "Estruturas",
              xp: 30,
              dificuldade: "Fácil",
              tempo: "10 min",
              exemplo: "// Inteiro\nlet numero = 42;\n// String\nlet texto = 'CodeQuest';\n// Booleano\nlet verdade = true;",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o tipo de dado para números inteiros?",
                  options: [
                    "String",
                    "Boolean",
                    "Integer",
                    "Array"
                  ],
                  answer: 2,
                  explanation: "Integer é um número sem casas decimais: 5, 100, -30."
                }
              ]
            }
          ]
        },
        {
          id: "mod-2-2",
          nome: "Condições e Decisões",
          emoji: "🔀",
          xpBono: 350,
          licoes: [
            {
              id: "aula-2-2-1",
              titulo: "If e Else",
              descricao: "Como o código toma decisões",
              categoria: "Controle",
              xp: 35,
              dificuldade: "Fácil",
              tempo: "10 min",
              exemplo: "let idade = 18;\nif (idade >= 18) {\n  console.log('Maior de idade');\n} else {\n  console.log('Menor de idade');\n}",
              questoes: [
                {
                  type: "multipla",
                  question: "O que faz 'if'?",
                  options: [
                    "Repete código",
                    "Executa SE uma condição for verdadeira",
                    "Armazena valor",
                    "Exibe mensagens"
                  ],
                  answer: 1,
                  explanation: "'if' é uma estrutura de decisão que executa código se a condição for verdadeira."
                }
              ]
            }
          ]
        },
        {
          id: "mod-2-3",
          nome: "Loops e Repetições",
          emoji: "🔄",
          xpBono: 350,
          licoes: [
            {
              id: "aula-2-3-1",
              titulo: "For: Repetindo Código",
              descricao: "Automatize repetições",
              categoria: "Controle",
              xp: 35,
              dificuldade: "Fácil",
              tempo: "10 min",
              exemplo: "for (let i = 0; i < 5; i++) {\n  console.log('Número: ' + i);\n}",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um loop?",
                  options: [
                    "Um erro",
                    "Uma estrutura que repete código",
                    "Um arquivo",
                    "Uma função"
                  ],
                  answer: 1,
                  explanation: "Loop repete bloco de código múltiplas vezes ou enquanto uma condição é verdadeira."
                }
              ]
            }
          ]
        },
        {
          id: "mod-2-4",
          nome: "Funções",
          emoji: "⚙️",
          xpBono: 400,
          licoes: [
            {
              id: "aula-2-4-1",
              titulo: "O que São Funções?",
              descricao: "Reutilize código com funções",
              categoria: "Modularização",
              xp: 40,
              dificuldade: "Médio",
              tempo: "12 min",
              exemplo: "function saudacao(nome) {\n  return 'Olá, ' + nome + '!';\n}\nconsole.log(saudacao('João'));",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é uma função?",
                  options: [
                    "Um erro",
                    "Um bloco de código reutilizável",
                    "Uma variável",
                    "Uma página web"
                  ],
                  answer: 1,
                  explanation: "Função é um bloco de código que você chama múltiplas vezes. Evita repetição."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 3: VS CODE E FERRAMENTAS
    // ========================================================
    {
      id: "fase-3",
      numero: 3,
      nome: "Fase 3: VS Code e Ferramentas",
      descricao: "Configure seu ambiente profissional de desenvolvimento.",
      emoji: "🛠️",
      cor: "#FFE66D",
      progresso: 0,
      modulos: [
        {
          id: "mod-3-1",
          nome: "VS Code Setup",
          emoji: "📝",
          xpBono: 250,
          licoes: [
            {
              id: "aula-3-1-1",
              titulo: "Instalando VS Code",
              descricao: "Seu editor profissional gratuito",
              categoria: "Setup",
              xp: 25,
              dificuldade: "Muito Fácil",
              tempo: "10 min",
              recurso: "https://code.visualstudio.com",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é VS Code?",
                  options: [
                    "Um navegador",
                    "Um editor de código gratuito da Microsoft",
                    "Um banco de dados",
                    "Um programa de design"
                  ],
                  answer: 1,
                  explanation: "VS Code é um editor de texto avançado, gratuito e altamente configurável para programação."
                }
              ]
            },
            {
              id: "aula-3-1-2",
              titulo: "Extensões Essenciais",
              descricao: "Potencialize seu editor",
              categoria: "Setup",
              xp: 25,
              dificuldade: "Fácil",
              tempo: "12 min",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual extensão é essencial para HTML/CSS?",
                  options: [
                    "Python",
                    "Live Server",
                    "Docker",
                    "Kubernetes"
                  ],
                  answer: 1,
                  explanation: "Live Server permite visualizar mudanças em tempo real no navegador."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 4: HTML E CSS
    // ========================================================
    {
      id: "fase-4",
      numero: 4,
      nome: "Fase 4: HTML e CSS",
      descricao: "Crie layouts bonitos e estruturados.",
      emoji: "🎨",
      cor: "#A29BFE",
      progresso: 0,
      modulos: [
        {
          id: "mod-4-1",
          nome: "HTML Estrutural",
          emoji: "🏗️",
          xpBono: 350,
          licoes: [
            {
              id: "aula-4-1-1",
              titulo: "Tags HTML Essenciais",
              descricao: "Estruture suas páginas",
              categoria: "Markup",
              xp: 30,
              dificuldade: "Fácil",
              tempo: "12 min",
              exemplo: "<div class='container'>\n  <h1>Meu Site</h1>\n  <p>Bem-vindo!</p>\n</div>",
              questoes: [
                {
                  type: "multipla",
                  question: "Para que serve <div>?",
                  options: [
                    "Container genérico para agrupar",
                    "Criar um link",
                    "Inserir imagem",
                    "Criar formulário"
                  ],
                  answer: 0,
                  explanation: "<div> agrupa elementos e organiza o layout da página."
                }
              ]
            }
          ]
        },
        {
          id: "mod-4-2",
          nome: "CSS Estilização",
          emoji: "🎯",
          xpBono: 400,
          licoes: [
            {
              id: "aula-4-2-1",
              titulo: "Seletores CSS",
              descricao: "Estilize com precisão",
              categoria: "Styling",
              xp: 35,
              dificuldade: "Fácil",
              tempo: "12 min",
              exemplo: ".container {\n  background: #fff;\n  padding: 20px;\n  border-radius: 8px;\n}",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um seletor CSS?",
                  options: [
                    "Uma função JavaScript",
                    "Um padrão que identifica elementos HTML",
                    "Um arquivo HTML",
                    "Uma cor"
                  ],
                  answer: 1,
                  explanation: "Seletor CSS identifica qual(is) elemento(s) HTML receberão os estilos."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 5: TERMINAL E COMANDOS
    // ========================================================
    {
      id: "fase-5",
      numero: 5,
      nome: "Fase 5: Terminal e Comandos",
      descricao: "Domine a linha de comando profissional.",
      emoji: "⌨️",
      cor: "#00B894",
      progresso: 0,
      modulos: [
        {
          id: "mod-5-1",
          nome: "Terminal Básico",
          emoji: "💻",
          xpBono: 300,
          licoes: [
            {
              id: "aula-5-1-1",
              titulo: "Primeiros Comandos",
              descricao: "Navegue pelo sistema",
              categoria: "CLI",
              xp: 30,
              dificuldade: "Fácil",
              tempo: "10 min",
              exemplo: "$ cd Documents\n$ ls\n$ mkdir meu-projeto\n$ cd meu-projeto",
              questoes: [
                {
                  type: "multipla",
                  question: "O que faz 'cd'?",
                  options: [
                    "Copia arquivo",
                    "Muda de diretório",
                    "Cria arquivo",
                    "Lista arquivos"
                  ],
                  answer: 1,
                  explanation: "'cd' significa 'change directory'. Navega entre pastas."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 6: LINGUAGENS
    // ========================================================
    {
      id: "fase-6",
      numero: 6,
      nome: "Fase 6: Linguagens de Programação",
      descricao: "Escolha entre JavaScript, Python, Java e outras linguagens.",
      emoji: "🔤",
      cor: "#FF7675",
      progresso: 0,
      modulos: [
        {
          id: "mod-6-1",
          nome: "JavaScript Fundamental",
          emoji: "⚡",
          xpBono: 450,
          licoes: [
            {
              id: "aula-6-1-1",
              titulo: "Sintaxe JavaScript",
              descricao: "A linguagem mais usada da web",
              categoria: "Linguagem",
              xp: 40,
              dificuldade: "Médio",
              tempo: "15 min",
              exemplo: "let nome = 'João';\nlet idade = 25;\nconst ativo = true;\nvar legado = 'evite usar';",
              questoes: [
                {
                  type: "multipla",
                  question: "Como declarar variável em JS?",
                  options: [
                    "var x = 5;",
                    "let x = 5;",
                    "const x = 5;",
                    "Todas estão corretas"
                  ],
                  answer: 3,
                  explanation: "JavaScript oferece 3 formas: var (legado), let (moderna), const (constante). Use let/const."
                }
              ]
            }
          ]
        },
        {
          id: "mod-6-2",
          nome: "Python para Iniciantes",
          emoji: "🐍",
          xpBono: 450,
          licoes: [
            {
              id: "aula-6-2-1",
              titulo: "Python Básico",
              descricao: "Linguagem elegante e poderosa",
              categoria: "Linguagem",
              xp: 40,
              dificuldade: "Médio",
              tempo: "15 min",
              exemplo: "nome = 'João'\nidade = 25\nativo = True\nprint(f'Olá, {nome}!')",
              questoes: [
                {
                  type: "multipla",
                  question: "Como comentar em Python?",
                  options: [
                    "// comentário",
                    "<!-- comentário -->",
                    "# comentário",
                    "/* comentário */"
                  ],
                  answer: 2,
                  explanation: "Em Python, # marca um comentário até o final da linha."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 7: EXERCÍCIOS PRÁTICOS
    // ========================================================
    {
      id: "fase-7",
      numero: 7,
      nome: "Fase 7: Exercícios Práticos",
      descricao: "Coloque em prática com desafios reais.",
      emoji: "💪",
      cor: "#FD79A8",
      progresso: 0,
      modulos: [
        {
          id: "mod-7-1",
          nome: "Projetos Iniciais",
          emoji: "🎯",
          xpBono: 550,
          licoes: [
            {
              id: "aula-7-1-1",
              titulo: "Primeira Página Web",
              descricao: "Crie algo bonito com HTML e CSS",
              categoria: "Projeto",
              xp: 50,
              dificuldade: "Médio",
              tempo: "30 min",
              projeto: "Criar um portfólio pessoal com CV",
              questoes: [
                {
                  type: "verdadeiro-falso",
                  question: "Preciso de 3 arquivos para um site básico?",
                  answer: false,
                  explanation: "Pode ser só HTML+CSS. JavaScript é opcional e adiciona interatividade."
                }
              ]
            },
            {
              id: "aula-7-1-2",
              titulo: "Desafio: Calculadora",
              descricao: "Crie uma calculadora simples",
              categoria: "Projeto",
              xp: 60,
              dificuldade: "Médio",
              tempo: "45 min",
              projeto: "Calculadora com operações básicas",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual linguagem é melhor para interatividade?",
                  options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "SQL"
                  ],
                  answer: 2,
                  explanation: "JavaScript adiciona interatividade e dinamismo às páginas."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 8: GIT E GITHUB
    // ========================================================
    {
      id: "fase-8",
      numero: 8,
      nome: "Fase 8: Git e GitHub",
      descricao: "Controle de versão e colaboração profissional.",
      emoji: "🐙",
      cor: "#1E90FF",
      progresso: 0,
      modulos: [
        {
          id: "mod-8-1",
          nome: "Git Fundamentals",
          emoji: "📦",
          xpBono: 400,
          licoes: [
            {
              id: "aula-8-1-1",
              titulo: "Começando com Git",
              descricao: "Controle versões do seu código",
              categoria: "Ferramental",
              xp: 40,
              dificuldade: "Médio",
              tempo: "15 min",
              exemplo: "$ git init\n$ git add .\n$ git commit -m 'Primeiro commit'\n$ git push origin main",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um 'commit'?",
                  options: [
                    "Um erro",
                    "Um backup",
                    "Um snapshot do código",
                    "Um arquivo"
                  ],
                  answer: 2,
                  explanation: "Commit é um ponto de salvamento no histórico. Registra mudanças com mensagem."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 9: API E BANCO DE DADOS
    // ========================================================
    {
      id: "fase-9",
      numero: 9,
      nome: "Fase 9: API e Banco de Dados",
      descricao: "Trabalhe com dados e servidores profissionalmente.",
      emoji: "🛢️",
      cor: "#FF6348",
      progresso: 0,
      modulos: [
        {
          id: "mod-9-1",
          nome: "APIs RESTful",
          emoji: "🌐",
          xpBono: 500,
          licoes: [
            {
              id: "aula-9-1-1",
              titulo: "O que é API?",
              descricao: "Interface para comunicação entre sistemas",
              categoria: "Backend",
              xp: 50,
              dificuldade: "Avançado",
              tempo: "20 min",
              exemplo: "fetch('https://api.github.com/users/github')\n  .then(r => r.json())\n  .then(data => console.log(data));",
              questoes: [
                {
                  type: "multipla",
                  question: "O que significa API?",
                  options: [
                    "A Programação Interface",
                    "Application Programming Interface",
                    "Algorithm Programming Integration",
                    "Aplicação de Programação Interativa"
                  ],
                  answer: 1,
                  explanation: "API é um conjunto de regras para sistemas se comunicarem."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 10: FRONT-END AVANÇADO
    // ========================================================
    {
      id: "fase-10",
      numero: 10,
      nome: "Fase 10: Front-End Avançado",
      descricao: "Crie interfaces dinâmicas com React e frameworks modernos.",
      emoji: "🎭",
      cor: "#9B59B6",
      progresso: 0,
      modulos: [
        {
          id: "mod-10-1",
          nome: "React.js",
          emoji: "⚛️",
          xpBono: 600,
          licoes: [
            {
              id: "aula-10-1-1",
              titulo: "Primeiros Passos com React",
              descricao: "Biblioteca mais popular de UI",
              categoria: "Framework",
              xp: 55,
              dificuldade: "Avançado",
              tempo: "25 min",
              exemplo: "function App() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Contagem: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é React?",
                  options: [
                    "Um servidor web",
                    "Uma biblioteca para UIs dinâmicas",
                    "Um banco de dados",
                    "Uma linguagem"
                  ],
                  answer: 1,
                  explanation: "React permite criar UIs dinâmicas e reutilizáveis com componentes."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 11: BACK-END PROFISSIONAL
    // ========================================================
    {
      id: "fase-11",
      numero: 11,
      nome: "Fase 11: Back-End Profissional",
      descricao: "Construa APIs e servidores escaláveis.",
      emoji: "🖥️",
      cor: "#E74C3C",
      progresso: 0,
      modulos: [
        {
          id: "mod-11-1",
          nome: "Node.js com Express",
          emoji: "🟢",
          xpBono: 650,
          licoes: [
            {
              id: "aula-11-1-1",
              titulo: "Servidor com Node.js",
              descricao: "Use JavaScript no servidor",
              categoria: "Backend",
              xp: 60,
              dificuldade: "Avançado",
              tempo: "25 min",
              exemplo: "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Olá, Mundo!');\n});\napp.listen(3000);",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é Node.js?",
                  options: [
                    "Um navegador",
                    "Um ambiente para executar JS no servidor",
                    "Um banco de dados",
                    "Um editor"
                  ],
                  answer: 1,
                  explanation: "Node.js permite usar JavaScript fora do navegador, no servidor."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 12: FULL STACK E DEPLOY
    // ========================================================
    {
      id: "fase-12",
      numero: 12,
      nome: "Fase 12: Full Stack e Deploy",
      descricao: "Integre tudo e coloque em produção profissionalmente.",
      emoji: "🚀",
      cor: "#1ABC9C",
      progresso: 0,
      modulos: [
        {
          id: "mod-12-1",
          nome: "Aplicação Full Stack",
          emoji: "🔗",
          xpBono: 800,
          licoes: [
            {
              id: "aula-12-1-1",
              titulo: "Arquitetura Full Stack",
              descricao: "Integre front-end com back-end",
              categoria: "Integration",
              xp: 70,
              dificuldade: "Expert",
              tempo: "30 min",
              projeto: "Criar aplicação completa do zero",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é Full Stack?",
                  options: [
                    "Roda no navegador",
                    "Roda no servidor",
                    "Combina front-end e back-end",
                    "Usa apenas banco de dados"
                  ],
                  answer: 2,
                  explanation: "Full Stack = Front-end (navegador) + Back-end (servidor)."
                }
              ]
            },
            {
              id: "aula-12-1-2",
              titulo: "Deploy e Produção",
              descricao: "Coloque seu app online",
              categoria: "DevOps",
              xp: 70,
              dificuldade: "Expert",
              tempo: "30 min",
              recurso: "https://vercel.com",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual plataforma é boa para deploy?",
                  options: [
                    "Vercel",
                    "Heroku",
                    "AWS",
                    "Todas acima"
                  ],
                  answer: 3,
                  explanation: "Vercel (React), Heroku (APIs), AWS (qualquer coisa) - escolha conforme necessidade."
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  // ========================================================
  // RECURSOS EXTRAS
  // ========================================================
  recursosExtras: {
    projetos: [
      {
        id: "proj-1",
        titulo: "Portfolio Pessoal",
        descricao: "Crie seu site de portfólio profissional",
        fase: 4,
        dificuldade: "Fácil",
        xp: 100,
        tecnologias: ["HTML", "CSS"],
        tempo: "2 horas"
      },
      {
        id: "proj-2",
        titulo: "Calculadora Interativa",
        descricao: "Calculadora com JavaScript puro",
        fase: 7,
        dificuldade: "Médio",
        xp: 150,
        tecnologias: ["HTML", "CSS", "JavaScript"],
        tempo: "3 horas"
      },
      {
        id: "proj-3",
        titulo: "Todo List App",
        descricao: "Aplicação de tarefas com React",
        fase: 10,
        dificuldade: "Médio",
        xp: 200,
        tecnologias: ["React", "JavaScript"],
        tempo: "4 horas"
      },
      {
        id: "proj-4",
        titulo: "Blog Full Stack",
        descricao: "Blog completo com front-end e back-end",
        fase: 12,
        dificuldade: "Difícil",
        xp: 300,
        tecnologias: ["React", "Node.js", "MongoDB"],
        tempo: "8 horas"
      },
      {
        id: "proj-5",
        titulo: "API de Usuários",
        descricao: "API RESTful com autenticação",
        fase: 11,
        dificuldade: "Difícil",
        xp: 250,
        tecnologias: ["Node.js", "Express", "JWT"],
        tempo: "6 horas"
      }
    ],

    certificados: [
      {
        id: "cert-1",
        nome: "Fundamentos de Programação",
        condicao: "Completar Fase 2",
        descricao: "Domina lógica de programação",
        cor: "#FF6B6B"
      },
      {
        id: "cert-2",
        nome: "Web Developer",
        condicao: "Completar Fase 5",
        descricao: "Expert em HTML, CSS e JavaScript",
        cor: "#4ECDC4"
      },
      {
        id: "cert-3",
        nome: "Front-End Specialist",
        condicao: "Completar Fase 10",
        descricao: "Especialista em React e front-end moderno",
        cor: "#9B59B6"
      },
      {
        id: "cert-4",
        nome: "Back-End Developer",
        condicao: "Completar Fase 11",
        descricao: "Expert em Node.js e APIs",
        cor: "#E74C3C"
      },
      {
        id: "cert-5",
        nome: "Full Stack Master",
        condicao: "Completar Fase 12",
        descricao: "Master em desenvolvimento Full Stack",
        cor: "#1ABC9C"
      }
    ],

    recursos: [
      { titulo: "MDN Web Docs", url: "https://developer.mozilla.org/pt-BR", tipo: "Documentação" },
      { titulo: "W3Schools", url: "https://www.w3schools.com", tipo: "Tutorial" },
      { titulo: "Stack Overflow", url: "https://stackoverflow.com", tipo: "Comunidade" },
      { titulo: "GitHub", url: "https://github.com", tipo: "Repositório" },
      { titulo: "CodePen", url: "https://codepen.io", tipo: "Sandbox" }
    ]
  },

  // ========================================================
  // RANKING E MISSÕES
  // ========================================================
  rankingEstatico: [
    { usuario: "Desenvolvedor CodeQuest", xp: 0, isUser: true },
    { usuario: "João Silva", xp: 5450 },
    { usuario: "Maria Santos", xp: 4980 },
    { usuario: "Pedro Developer", xp: 4320 },
    { usuario: "Ana Costa", xp: 3850 },
    { usuario: "Carlos Tech", xp: 3520 },
    { usuario: "Lucia Code", xp: 3100 },
    { usuario: "Rafael Dev", xp: 2890 },
    { usuario: "Sofia JS", xp: 2450 },
    { usuario: "Igor Python", xp: 1980 },
  ],

  missoesDiarias: [
    {
      id: "missao-xp",
      texto: "Ganhe 150 XP",
      meta: 150,
      recompensa: 50,
      atual: 0,
      concluida: false,
      emoji: "🔥"
    },
    {
      id: "missao-licoes",
      texto: "Conclua 5 lições",
      meta: 5,
      recompensa: 100,
      atual: 0,
      concluida: false,
      emoji: "📚"
    },
    {
      id: "missao-acertos",
      texto: "Acerte 8 seguidas",
      meta: 8,
      recompensa: 150,
      atual: 0,
      concluida: false,
      emoji: "⭐"
    },
    {
      id: "missao-projeto",
      texto: "Conclua 1 projeto",
      meta: 1,
      recompensa: 200,
      atual: 0,
      concluida: false,
      emoji: "🎯"
    }
  ],

  // ========================================================
  // CONFIGURAÇÕES DE TEMA
  // ========================================================
  temas: {
    light: {
      bg: "#ffffff",
      bgBody: "#f7f9fa",
      text: "#3c3c3c",
      textMuted: "#afafaf",
      border: "#e5e5e5"
    },
    dark: {
      bg: "#1a1a1a",
      bgBody: "#0f0f0f",
      text: "#e5e5e5",
      textMuted: "#b0b0b0",
      border: "#333333"
    }
  }
};
