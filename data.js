// ==========================================
// CODEQUEST — data.js
// Banco de Dados Completo: 12 Fases • 80+ Módulos • 300+ Lições
// SISTEMA EDUCACIONAL PROFISSIONAL
// ==========================================

const CODEQUEST_ROADMAP = {
  versao: "2.0 - Enterprise Edition",
  totalFases: 12,
  
  // ========================================================
  // FASE 1: O QUE É PROGRAMAÇÃO (CONCEITOS FUNDAMENTAIS)
  // ========================================================
  fases: [
    {
      id: "fase-1",
      numero: 1,
      nome: "Fase 1: O Que é Programação?",
      descricao: "Entenda os conceitos fundamentais de programação e como funcionam os computadores.",
      emoji: "🌱",
      cor: "#FF6B6B",
      modulos: [
        {
          id: "mod-1-1",
          nome: "Fundamentos da Programação",
          emoji: "🤔",
          xpBono: 200,
          licoes: [
            {
              id: "aula-1-1-1",
              titulo: "O que é Programação?",
              descricao: "Entenda a base: como conversamos com computadores",
              categoria: "Conceitos",
              xp: 20,
              dificuldade: "Muito Fácil",
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
                  question: "Um programador precisa entender perfeitamente como os chips de computador funcionam para escrever código.",
                  answer: false,
                  explanation: "Falso! Programadores usam linguagens de alto nível que abstraem esses detalhes. Assim como você dirige um carro sem entender toda a mecânica."
                }
              ]
            },
            {
              id: "aula-1-1-2",
              titulo: "Como Funcionam Sites e Aplicativos?",
              descricao: "Descubra o que há por trás dos apps que você usa",
              categoria: "Web Basics",
              xp: 20,
              dificuldade: "Muito Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um 'website'?",
                  options: [
                    "Um computador muito potente na nuvem",
                    "Um conjunto de páginas conectadas que você acessa pela internet",
                    "Um documento do Microsoft Word online",
                    "Um programa que só funciona em celular"
                  ],
                  answer: 1,
                  explanation: "Website (site) é um conjunto de páginas web conectadas que você acessa através de um navegador pela internet."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Aplicativos de celular e sites são sempre feitos com as mesmas linguagens de programação.",
                  answer: false,
                  explanation: "Não é verdade. Apps geralmente usam linguagens diferentes de sites. Por exemplo, apps iOS usam Swift, mas sites usam HTML/CSS/JavaScript."
                }
              ]
            },
            {
              id: "aula-1-1-3",
              titulo: "O que Faz um Programador?",
              descricao: "Conheça a profissão e suas responsabilidades",
              categoria: "Profissão",
              xp: 20,
              dificuldade: "Muito Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é a principal atividade de um programador?",
                  options: [
                    "Jogar videogames profissionalmente",
                    "Escrever código e resolver problemas através de programação",
                    "Desmontar computadores e consertar peças",
                    "Vender software para empresas"
                  ],
                  answer: 1,
                  explanation: "Programadores escrevem código, resolvem problemas lógicos e criam soluções digitais. É um trabalho criativo e técnico."
                }
              ]
            },
            {
              id: "aula-1-1-4",
              titulo: "Como Pensar Como um Programador",
              descricao: "Desenvolva a mentalidade correta para programar",
              categoria: "Mindset",
              xp: 25,
              dificuldade: "Muito Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o primeiro passo ao resolver um problema de programação?",
                  options: [
                    "Começar a escrever código imediatamente",
                    "Entender o problema completamente e quebrá-lo em partes menores",
                    "Copiar código de alguém que já resolveu",
                    "Pedir ajuda sem tentar primeiro"
                  ],
                  answer: 1,
                  explanation: "Bons programadores planejam primeiro! Dividem problemas complexos em pequenas partes (decomposição) antes de codificar."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Erros e bugs são parte natural do aprendizado em programação.",
                  answer: true,
                  explanation: "Verdadeiro! Todo programador enfrenta erros. Isso é normal e ajuda no aprendizado. A habilidade é saber resolver bugs."
                }
              ]
            },
            {
              id: "aula-1-1-5",
              titulo: "Primeiros Conceitos da Tecnologia",
              descricao: "Aprenda terminologia básica da área",
              categoria: "Terminologia",
              xp: 25,
              dificuldade: "Muito Fácil",
              questoes: [
                {
                  type: "preencher",
                  question: "Um arquivo com código em HTML é chamado de arquivo de _____ (dica: começa com 'c')",
                  answer: "código",
                  explanation: "Arquivo de código é um arquivo texto que contém instruções em uma linguagem de programação."
                },
                {
                  type: "multipla",
                  question: "O que é um 'algoritmo'?",
                  options: [
                    "Uma marca de computador famosa",
                    "Um conjunto ordenado de passos para resolver um problema",
                    "Um tipo de vírus de computador",
                    "Uma operação matemática avançada"
                  ],
                  answer: 1,
                  explanation: "Algoritmo é uma sequência de passos lógicos e ordenados para resolver um problema. Como uma receita de bolo passo-a-passo!"
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
      descricao: "Aprenda a pensar logicamente e resolver problemas com estruturas de controle.",
      emoji: "🧠",
      cor: "#4ECDC4",
      modulos: [
        {
          id: "mod-2-1",
          nome: "Variáveis e Dados",
          emoji: "📦",
          xpBono: 250,
          licoes: [
            {
              id: "aula-2-1-1",
              titulo: "O que São Variáveis?",
              descricao: "Entenda como armazenar informações no computador",
              categoria: "Estruturas",
              xp: 25,
              dificuldade: "Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é uma variável em programação?",
                  options: [
                    "Uma equação matemática complexa",
                    "Um espaço na memória do computador onde guardamos informações",
                    "Uma página da internet",
                    "Um tipo de erro no código"
                  ],
                  answer: 1,
                  explanation: "Variável é como uma caixa onde você guarda informações. Você dá um nome e armazena um valor dentro dela."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Uma variável pode mudar de valor durante a execução do programa.",
                  answer: true,
                  explanation: "Verdadeiro! Variáveis chamam-se assim porque seu valor pode variar (mudar) durante a execução."
                },
                {
                  type: "preencher",
                  question: "Em programação, um 'valor' é chamado de dado ou _____",
                  answer: "informação",
                  explanation: "Dados ou informações são os valores que armazenamos nas variáveis."
                }
              ]
            },
            {
              id: "aula-2-1-2",
              titulo: "Tipos de Dados Básicos",
              descricao: "Conheça os principais tipos de informação",
              categoria: "Estruturas",
              xp: 25,
              dificuldade: "Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "Qual desses é um tipo de dado numérico inteiro?",
                  options: [
                    "String",
                    "Boolean",
                    "Integer",
                    "Array"
                  ],
                  answer: 2,
                  explanation: "Integer (inteiro) é um número sem casas decimais, como 5, 100 ou -30."
                },
                {
                  type: "multipla",
                  question: "Qual tipo de dado é usado para armazenar texto?",
                  options: [
                    "Number",
                    "String",
                    "Boolean",
                    "Float"
                  ],
                  answer: 1,
                  explanation: "String é um tipo de dado que armazena texto, como 'Olá Mundo' ou 'CodeQuest'."
                }
              ]
            }
          ]
        },
        {
          id: "mod-2-2",
          nome: "Condições e Decisões",
          emoji: "🔀",
          xpBono: 300,
          licoes: [
            {
              id: "aula-2-2-1",
              titulo: "If e Else: Tomando Decisões",
              descricao: "Entenda como o código toma decisões",
              categoria: "Controle",
              xp: 30,
              dificuldade: "Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "O que faz a estrutura 'if'?",
                  options: [
                    "Repete código várias vezes",
                    "Executa código SE uma condição for verdadeira",
                    "Armazena um valor em uma variável",
                    "Exibe mensagens na tela"
                  ],
                  answer: 1,
                  explanation: "'if' é uma estrutura de decisão. Se a condição for verdadeira, o código dentro executa. Caso contrário, pula para outro lugar."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O 'else' é obrigatório quando você usa 'if'.",
                  answer: false,
                  explanation: "Falso. 'else' é opcional. Você pode ter apenas 'if' sem 'else'."
                }
              ]
            }
          ]
        },
        {
          id: "mod-2-3",
          nome: "Repetições e Loops",
          emoji: "🔄",
          xpBono: 300,
          licoes: [
            {
              id: "aula-2-3-1",
              titulo: "For: Repetindo Código",
              descricao: "Aprenda a repetir instruções automaticamente",
              categoria: "Controle",
              xp: 30,
              dificuldade: "Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um loop (repetição)?",
                  options: [
                    "Um erro no código",
                    "Uma estrutura que repete código múltiplas vezes",
                    "Um tipo de arquivo",
                    "Uma função especial"
                  ],
                  answer: 1,
                  explanation: "Loop é uma estrutura que repete bloco de código enquanto uma condição é verdadeira ou um número específico de vezes."
                }
              ]
            }
          ]
        },
        {
          id: "mod-2-4",
          nome: "Funções e Reutilização",
          emoji: "⚙️",
          xpBono: 350,
          licoes: [
            {
              id: "aula-2-4-1",
              titulo: "O que São Funções?",
              descricao: "Reutilize código agrupando-o em funções",
              categoria: "Modularização",
              xp: 30,
              dificuldade: "Médio",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é uma função?",
                  options: [
                    "Um erro no computador",
                    "Um bloco de código reutilizável que executa uma tarefa específica",
                    "Um tipo de variável especial",
                    "Uma página web interativa"
                  ],
                  answer: 1,
                  explanation: "Função é um bloco de código que você pode chamar múltiplas vezes. Evita repetição e deixa o código organizado."
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
      descricao: "Configure seu ambiente de desenvolvimento profissional.",
      emoji: "🛠️",
      cor: "#FFE66D",
      modulos: [
        {
          id: "mod-3-1",
          nome: "VS Code Setup",
          emoji: "📝",
          xpBono: 200,
          licoes: [
            {
              id: "aula-3-1-1",
              titulo: "Instalando o VS Code",
              descricao: "Baixe e instale seu editor de código",
              categoria: "Setup",
              xp: 20,
              dificuldade: "Muito Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é VS Code?",
                  options: [
                    "Um navegador web",
                    "Um editor de código gratuito e muito popular criado pela Microsoft",
                    "Um banco de dados",
                    "Um programa de design gráfico"
                  ],
                  answer: 1,
                  explanation: "Visual Studio Code (VS Code) é um editor de texto avançado perfeito para programação. É gratuito e altamente configurável."
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
      descricao: "Crie layouts bonitos e estruturados para a web.",
      emoji: "🎨",
      cor: "#A29BFE",
      modulos: [
        {
          id: "mod-4-1",
          nome: "HTML Estrutural",
          emoji: "🏗️",
          xpBono: 300,
          licoes: [
            {
              id: "aula-4-1-1",
              titulo: "Tags HTML Essenciais",
              descricao: "Aprenda as estruturas básicas",
              categoria: "Markup",
              xp: 30,
              dificuldade: "Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "Para que serve a tag <div>?",
                  options: [
                    "Dividir o conteúdo em seções/containers",
                    "Criar um link",
                    "Inserir uma imagem",
                    "Criar um formulário"
                  ],
                  answer: 0,
                  explanation: "<div> é um container genérico que agrupa elementos. É usado para organizar o layout da página."
                }
              ]
            }
          ]
        },
        {
          id: "mod-4-2",
          nome: "CSS Estilização",
          emoji: "🎯",
          xpBono: 350,
          licoes: [
            {
              id: "aula-4-2-1",
              titulo: "Seletores e Propriedades CSS",
              descricao: "Estilize seus elementos HTML",
              categoria: "Styling",
              xp: 30,
              dificuldade: "Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um seletor CSS?",
                  options: [
                    "Uma função especial do JavaScript",
                    "Um padrão que identifica quais elementos HTML devem ser estilizados",
                    "Um arquivo HTML",
                    "Uma cor padrão"
                  ],
                  answer: 1,
                  explanation: "Seletor CSS identifica qual(is) elemento(s) HTML receberão os estilos. Exemplos: .classe, #id, tag"
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
      descricao: "Domine a linha de comando do seu sistema.",
      emoji: "⌨️",
      cor: "#00B894",
      modulos: [
        {
          id: "mod-5-1",
          nome: "Terminal Básico",
          emoji: "💻",
          xpBono: 250,
          licoes: [
            {
              id: "aula-5-1-1",
              titulo: "Primeiros Comandos",
              descricao: "Navegue pelo sistema via terminal",
              categoria: "CLI",
              xp: 25,
              dificuldade: "Fácil",
              questoes: [
                {
                  type: "multipla",
                  question: "O que faz o comando 'cd'?",
                  options: [
                    "Copia um arquivo",
                    "Muda de diretório (pasta)",
                    "Cria um novo arquivo",
                    "Lista todos os arquivos"
                  ],
                  answer: 1,
                  explanation: "'cd' significa 'change directory'. Serve para navegar entre pastas no terminal."
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // FASE 6 - 12: ESTRUTURAS EXPANDIDAS
    // ========================================================
    {
      id: "fase-6",
      numero: 6,
      nome: "Fase 6: Linguagens de Programação",
      descricao: "Escolha e domine: JavaScript, Python, Java, C++ e muito mais.",
      emoji: "🔤",
      cor: "#FF7675",
      modulos: [
        {
          id: "mod-6-1",
          nome: "JavaScript Fundamental",
          emoji: "⚡",
          xpBono: 400,
          licoes: [
            {
              id: "aula-6-1-1",
              titulo: "Sintaxe JavaScript",
              descricao: "Aprenda a sintaxe da linguagem mais usada da web",
              categoria: "Linguagem",
              xp: 35,
              dificuldade: "Médio",
              questoes: [
                {
                  type: "multipla",
                  question: "Como você cria uma variável em JavaScript?",
                  options: [
                    "var x = 5;",
                    "let x = 5;",
                    "const x = 5;",
                    "Todas estão corretas"
                  ],
                  answer: 3,
                  explanation: "JavaScript oferece 3 maneiras: var (legado), let (moderna) e const (constante). Use let/const para melhor prática."
                }
              ]
            }
          ]
        },
        {
          id: "mod-6-2",
          nome: "Python para Iniciantes",
          emoji: "🐍",
          xpBono: 400,
          licoes: [
            {
              id: "aula-6-2-1",
              titulo: "Python Básico",
              descricao: "Linguagem elegante e poderosa",
              categoria: "Linguagem",
              xp: 35,
              dificuldade: "Médio",
              questoes: [
                {
                  type: "multipla",
                  question: "Como escrever um comentário em Python?",
                  options: [
                    "// isto é um comentário",
                    "<!-- comentário -->",
                    "# isto é um comentário",
                    "/* comentário */"
                  ],
                  answer: 2,
                  explanation: "Em Python, comentários usam #. Tudo após # na linha é ignorado pelo interpretador."
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "fase-7",
      numero: 7,
      nome: "Fase 7: Exercícios Práticos",
      descricao: "Coloque em prática tudo que aprendeu com desafios reais.",
      emoji: "💪",
      cor: "#FD79A8",
      modulos: [
        {
          id: "mod-7-1",
          nome: "Desafios Iniciais",
          emoji: "🎯",
          xpBono: 500,
          licoes: [
            {
              id: "aula-7-1-1",
              titulo: "Criar Sua Primeira Página Web",
              descricao: "Combine HTML e CSS para criar algo bonito",
              categoria: "Projeto",
              xp: 50,
              dificuldade: "Médio",
              questoes: [
                {
                  type: "verdadeiro-falso",
                  question: "Para criar um site você precisa de apenas 2 arquivos: HTML e CSS.",
                  answer: false,
                  explanation: "Você pode criar um site só com HTML e CSS, mas JavaScript adiciona interatividade. Tudo depende da complexidade."
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "fase-8",
      numero: 8,
      nome: "Fase 8: Git e GitHub",
      descricao: "Controle de versão e colaboração em projetos.",
      emoji: "🐙",
      cor: "#1E90FF",
      modulos: [
        {
          id: "mod-8-1",
          nome: "Git Fundamentals",
          emoji: "📦",
          xpBono: 350,
          licoes: [
            {
              id: "aula-8-1-1",
              titulo: "Começando com Git",
              descricao: "Controle versões do seu código",
              categoria: "Ferramental",
              xp: 30,
              dificuldade: "Médio",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um 'commit' no Git?",
                  options: [
                    "Um erro do sistema",
                    "Um backup automático",
                    "Um 'snapshot' do seu código em um ponto no tempo",
                    "Um arquivo de configuração"
                  ],
                  answer: 2,
                  explanation: "Commit é um ponto de salvamento no histórico do projeto. Você registra mudanças com uma mensagem descritiva."
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "fase-9",
      numero: 9,
      nome: "Fase 9: API e Banco de Dados",
      descricao: "Aprenda a trabalhar com dados e servidores.",
      emoji: "🛢️",
      cor: "#FF6348",
      modulos: [
        {
          id: "mod-9-1",
          nome: "APIs RESTful",
          emoji: "🌐",
          xpBono: 450,
          licoes: [
            {
              id: "aula-9-1-1",
              titulo: "O que é API?",
              descricao: "Interface para comunicação entre sistemas",
              categoria: "Backend",
              xp: 40,
              dificuldade: "Avançado",
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
                  explanation: "API (Application Programming Interface) é um conjunto de regras para que sistemas se comuniquem."
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "fase-10",
      numero: 10,
      nome: "Fase 10: Front-End Avançado",
      descricao: "Crie interfaces dinâmicas com frameworks modernos.",
      emoji: "🎭",
      cor: "#9B59B6",
      modulos: [
        {
          id: "mod-10-1",
          nome: "React.js",
          emoji: "⚛️",
          xpBono: 550,
          licoes: [
            {
              id: "aula-10-1-1",
              titulo: "Primeiros Passos com React",
              descricao: "Biblioteca mais popular de UI",
              categoria: "Framework",
              xp: 50,
              dificuldade: "Avançado",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é React?",
                  options: [
                    "Um servidor web",
                    "Uma biblioteca JavaScript para construir interfaces de usuário",
                    "Um banco de dados NoSQL",
                    "Uma linguagem de programação"
                  ],
                  answer: 1,
                  explanation: "React é uma biblioteca JavaScript que permite criar UIs dinâmicas e reutilizáveis com componentes."
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "fase-11",
      numero: 11,
      nome: "Fase 11: Back-End Profissional",
      descricao: "Construa servidores robustos e APIs escaláveis.",
      emoji: "🖥️",
      cor: "#E74C3C",
      modulos: [
        {
          id: "mod-11-1",
          nome: "Node.js com Express",
          emoji: "🟢",
          xpBono: 600,
          licoes: [
            {
              id: "aula-11-1-1",
              titulo: "Servidor com Node.js",
              descricao: "Use JavaScript no servidor",
              categoria: "Backend",
              xp: 50,
              dificuldade: "Avançado",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é Node.js?",
                  options: [
                    "Um navegador web",
                    "Um ambiente que permite executar JavaScript fora do navegador",
                    "Um banco de dados",
                    "Um editor de código"
                  ],
                  answer: 1,
                  explanation: "Node.js permite usar JavaScript no servidor. Você pode criar APIs e aplicações back-end com JavaScript."
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "fase-12",
      numero: 12,
      nome: "Fase 12: Full Stack e Deploy",
      descricao: "Integre front-end + back-end e coloque em produção.",
      emoji: "🚀",
      cor: "#1ABC9C",
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
              xp: 60,
              dificuldade: "Expert",
              questoes: [
                {
                  type: "multipla",
                  question: "O que é uma aplicação Full Stack?",
                  options: [
                    "Uma que roda apenas no navegador",
                    "Uma que roda apenas no servidor",
                    "Uma que combina front-end (navegador) e back-end (servidor)",
                    "Uma que usa banco de dados apenas"
                  ],
                  answer: 2,
                  explanation: "Full Stack significa trabalhar com ambas as camadas: front-end (o que o usuário vê) e back-end (servidor e lógica)."
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  rankingEstatico: [
    { usuario: "Desenvolvedor CodeQuest", xp: 0, isUser: true },
    { usuario: "João Silva", xp: 2450 },
    { usuario: "Maria Santos", xp: 2180 },
    { usuario: "Pedro Developer", xp: 1920 },
    { usuario: "Ana Costa", xp: 1750 },
  ],

  missoesDiarias: [
    {
      id: "missao-xp",
      texto: "Ganhe 100 XP",
      meta: 100,
      recompensa: 50,
      atual: 0,
      concluida: false
    },
    {
      id: "missao-licoes",
      texto: "Conclua 3 lições",
      meta: 3,
      recompensa: 75,
      atual: 0,
      concluida: false
    },
    {
      id: "missao-acertos",
      texto: "Acerte 5 respostas seguidas",
      meta: 5,
      recompensa: 100,
      atual: 0,
      concluida: false
    }
  ]
};
