// ==========================================
// CODEQUEST — data.js
// Banco de Dados Escalável do Roadmap EdTech
// VERSÃO EXPANDIDA: 6 Fases · 28 Módulos · 80+ Lições
// ==========================================

const CODEQUEST_ROADMAP = {
  fases: [

    // =========================================================
    // FASE 1 — FUNDAÇÃO
    // =========================================================
    {
      id: "fase-iniciante",
      nome: "Fase 1: Fundação",
      descricao: "Domine lógica, estrutura da web e comportamento dinâmico.",
      modulos: [

        {
          id: "mod-logica",
          nome: "Lógica de Programação & Algoritmos",
          emoji: "🧠",
          xpBono: 150,
          licoes: [
            {
              id: "log-1",
              titulo: "O que é um Algoritmo?",
              categoria: "Conceitos Básicos",
              xp: 20,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual das seguintes alternativas melhor define um algoritmo?",
                  options: [
                    "Um componente de hardware do computador.",
                    "Uma sequência finita de passos lógicos para resolver um problema.",
                    "Uma linguagem de marcação hipertexto.",
                    "Um banco de dados relacional."
                  ],
                  answer: 1,
                  explanation: "Algoritmos são passos lógicos finitos e ordenados para atingir um resultado estruturado."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Um algoritmo pode rodar infinitamente sem nunca apresentar uma condição de término e ainda ser considerado eficiente.",
                  answer: false,
                  explanation: "Falso. Um algoritmo correto precisa obrigatoriamente possuir finitude (uma condição de parada)."
                },
                {
                  type: "multipla",
                  question: "O que representa a notação Big O em algoritmos?",
                  options: [
                    "O tamanho máximo de um arquivo de código.",
                    "A complexidade de tempo ou espaço de um algoritmo em relação ao seu input.",
                    "O número de operações matemáticas de um processador.",
                    "Uma linguagem de programação funcional."
                  ],
                  answer: 1,
                  explanation: "Big O descreve como o desempenho de um algoritmo escala conforme o tamanho da entrada cresce."
                }
              ]
            },
            {
              id: "log-2",
              titulo: "Variáveis e Tipos de Dados",
              categoria: "Estruturas de Dados",
              xp: 20,
              questoes: [
                {
                  type: "preencher",
                  question: "Em programação, o operador que atribui um valor a uma variável é comumente o sinal de:",
                  answer: "=",
                  explanation: "O caractere '=' representa atribuição na grande maioria das linguagens de programação imperativas."
                },
                {
                  type: "multipla",
                  question: "Qual tipo de dado representa o valor verdadeiro ou falso?",
                  options: ["String", "Integer", "Boolean", "Float"],
                  answer: 2,
                  explanation: "O tipo Boolean armazena apenas dois valores: true (verdadeiro) ou false (falso)."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Em JavaScript, 'let' e 'const' têm o mesmo comportamento para declaração de variáveis.",
                  answer: false,
                  explanation: "Falso. 'let' permite reatribuição, enquanto 'const' cria uma referência constante que não pode ser reatribuída."
                }
              ]
            },
            {
              id: "log-3",
              titulo: "Estruturas de Controle",
              categoria: "Fluxo de Código",
              xp: 25,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual estrutura executa um bloco de código repetidamente enquanto uma condição for verdadeira?",
                  options: ["if/else", "switch/case", "while", "try/catch"],
                  answer: 2,
                  explanation: "O laço 'while' continua executando enquanto a condição especificada permanecer verdadeira."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Um laço 'for' sempre executa pelo menos uma vez, independentemente da condição.",
                  answer: false,
                  explanation: "Falso. Um 'for' verifica a condição antes de cada iteração. Se falsa desde o início, não executa nenhuma vez."
                },
                {
                  type: "preencher",
                  question: "Para interromper imediatamente a execução de um laço em JavaScript, usamos a palavra-chave:",
                  answer: "break",
                  explanation: "'break' encerra o laço mais interno em execução imediatamente."
                }
              ]
            },
            {
              id: "log-4",
              titulo: "Funções e Escopo",
              categoria: "Modularização",
              xp: 25,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é uma função pura em programação?",
                  options: [
                    "Uma função que não retorna nenhum valor.",
                    "Uma função que sempre retorna o mesmo resultado para os mesmos argumentos e não causa efeitos colaterais.",
                    "Uma função escrita sem uso de variáveis.",
                    "Uma função que só aceita números inteiros."
                  ],
                  answer: 1,
                  explanation: "Funções puras são previsíveis e sem efeitos colaterais, facilitando testes e raciocínio sobre o código."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Variáveis declaradas dentro de uma função com 'let' são acessíveis fora dela.",
                  answer: false,
                  explanation: "Falso. Variáveis declaradas com 'let' têm escopo de bloco e não são acessíveis fora da função onde foram definidas."
                }
              ]
            }
          ]
        },

        {
          id: "mod-html-css",
          nome: "HTML5 & CSS3 Moderno",
          emoji: "🎨",
          xpBono: 200,
          licoes: [
            {
              id: "web-1",
              titulo: "Semântica e Estrutura HTML",
              categoria: "Web Design",
              xp: 25,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual tag HTML deve ser utilizada para delimitar o conteúdo de navegação principal de um site?",
                  options: ["<section>", "<div>", "<nav>", "<aside>"],
                  answer: 2,
                  explanation: "A tag <nav> informa semanticamente aos motores de busca e leitores de tela que ali reside o menu de navegação."
                },
                {
                  type: "verdadeiro-falso",
                  question: "A tag <div> possui significado semântico para acessibilidade.",
                  answer: false,
                  explanation: "Falso. <div> é apenas um contêiner genérico sem valor semântico. Prefira tags como <main>, <article>, <section>."
                },
                {
                  type: "multipla",
                  question: "Qual atributo é obrigatório em uma tag <img> para acessibilidade?",
                  options: ["src", "alt", "width", "title"],
                  answer: 1,
                  explanation: "O atributo 'alt' é essencial: descreve a imagem para leitores de tela e é exibido quando a imagem não carrega."
                }
              ]
            },
            {
              id: "web-2",
              titulo: "CSS Flexbox & Grid",
              categoria: "Layouts Modernos",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual propriedade CSS ativa o modelo Flexbox em um contêiner?",
                  options: ["display: block", "display: flex", "display: grid", "position: relative"],
                  answer: 1,
                  explanation: "'display: flex' transforma o elemento em um flex container, permitindo alinhar os filhos com facilidade."
                },
                {
                  type: "preencher",
                  question: "Para centralizar itens horizontalmente em um flex container, usamos a propriedade:",
                  answer: "justify-content",
                  explanation: "'justify-content' controla o alinhamento dos itens ao longo do eixo principal (horizontal por padrão)."
                },
                {
                  type: "verdadeiro-falso",
                  question: "CSS Grid é superior ao Flexbox para layouts bidimensionais (linhas e colunas ao mesmo tempo).",
                  answer: true,
                  explanation: "Verdadeiro. Grid foi criado especificamente para layouts 2D. Flexbox é ideal para uma dimensão de cada vez."
                }
              ]
            },
            {
              id: "web-3",
              titulo: "Responsividade & Media Queries",
              categoria: "Mobile First",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o princípio do design Mobile First?",
                  options: [
                    "Criar o site primeiro para desktop e depois adaptar para mobile.",
                    "Criar primeiro para telas menores e escalar progressivamente para telas maiores.",
                    "Usar apenas unidades fixas em pixels.",
                    "Remover todas as imagens em dispositivos móveis."
                  ],
                  answer: 1,
                  explanation: "Mobile First prioriza a experiência em telas pequenas e expande o layout para telas maiores com media queries."
                },
                {
                  type: "verdadeiro-falso",
                  question: "A unidade 'rem' em CSS é relativa ao tamanho da fonte do elemento pai.",
                  answer: false,
                  explanation: "Falso. 'rem' é relativa ao tamanho da fonte do elemento raiz (<html>). 'em' é relativa ao elemento pai."
                }
              ]
            }
          ]
        },

        {
          id: "mod-js-basico",
          nome: "JavaScript Essencial",
          emoji: "⚡",
          xpBono: 250,
          licoes: [
            {
              id: "js-1",
              titulo: "Manipulação do DOM",
              categoria: "Lógica Web",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual método JavaScript seleciona um elemento pelo seu ID?",
                  options: [
                    "document.querySelector('#id')",
                    "document.getElementById('id')",
                    "document.getElement('id')",
                    "Ambas a e b estão corretas."
                  ],
                  answer: 3,
                  explanation: "Tanto querySelector('#id') quanto getElementById('id') retornam o elemento com aquele ID. Ambos são válidos."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O evento 'DOMContentLoaded' dispara antes que todos os recursos externos (imagens, CSS) sejam carregados.",
                  answer: true,
                  explanation: "Verdadeiro. 'DOMContentLoaded' ocorre quando o HTML é parseado. 'load' espera todos os recursos externos."
                },
                {
                  type: "preencher",
                  question: "Para adicionar um novo elemento filho ao final de um elemento pai no DOM, usamos o método:",
                  answer: "appendChild",
                  explanation: "'appendChild' insere um nó como o último filho de um elemento pai especificado."
                }
              ]
            },
            {
              id: "js-2",
              titulo: "Eventos e Callbacks",
              categoria: "Interatividade",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um callback em JavaScript?",
                  options: [
                    "Uma função que retorna outra função.",
                    "Uma função passada como argumento para outra função, a ser executada posteriormente.",
                    "Um método especial de classes em ES6.",
                    "Um tipo de variável assíncrona."
                  ],
                  answer: 1,
                  explanation: "Callbacks são funções passadas como argumentos. São a base da programação assíncrona em JavaScript."
                },
                {
                  type: "verdadeiro-falso",
                  question: "É possível remover um event listener anônimo com removeEventListener.",
                  answer: false,
                  explanation: "Falso. Para remover um listener, é necessário ter a referência da função nomeada. Funções anônimas não podem ser removidas."
                }
              ]
            },
            {
              id: "js-3",
              titulo: "Promises e Async/Await",
              categoria: "Assincronicidade",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o estado inicial de uma Promise em JavaScript?",
                  options: ["fulfilled", "rejected", "pending", "resolved"],
                  answer: 2,
                  explanation: "Uma Promise começa no estado 'pending' (pendente) e transita para 'fulfilled' (resolvida) ou 'rejected' (rejeitada)."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O 'await' só pode ser usado dentro de funções declaradas com 'async'.",
                  answer: true,
                  explanation: "Verdadeiro. A palavra-chave 'await' pausa a execução apenas dentro de funções marcadas como 'async'."
                },
                {
                  type: "preencher",
                  question: "Para capturar erros em um bloco async/await, utilizamos a estrutura:",
                  answer: "try/catch",
                  explanation: "O bloco try/catch envolve o código assíncrono e captura qualquer erro que ocorra durante a execução."
                }
              ]
            }
          ]
        },

        {
          id: "mod-git",
          nome: "Git & GitHub — Controle de Versão",
          emoji: "🐙",
          xpBono: 150,
          licoes: [
            {
              id: "git-1",
              titulo: "Commits e Repositórios",
              categoria: "Ferramental",
              xp: 20,
              questoes: [
                {
                  type: "multipla",
                  question: "O que faz o comando 'git init'?",
                  options: [
                    "Envia as alterações para o repositório remoto.",
                    "Inicializa um novo repositório Git na pasta atual.",
                    "Baixa um repositório remoto para o computador.",
                    "Cria um novo branch de trabalho."
                  ],
                  answer: 1,
                  explanation: "'git init' cria uma pasta .git no diretório atual, transformando-o em um repositório Git local."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Um commit no Git pode ser desfeito completamente sem deixar rastro no histórico.",
                  answer: false,
                  explanation: "Falso. O Git mantém histórico imutável por design. 'git revert' cria um commit que desfaz alterações, preservando o histórico."
                },
                {
                  type: "preencher",
                  question: "Para enviar commits locais para o repositório remoto, usamos o comando 'git':",
                  answer: "push",
                  explanation: "'git push' envia os commits do branch local para o branch correspondente no repositório remoto."
                }
              ]
            },
            {
              id: "git-2",
              titulo: "Branches e Merges",
              categoria: "Fluxo de Trabalho",
              xp: 25,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o principal objetivo de utilizar branches no Git?",
                  options: [
                    "Aumentar a velocidade de execução do código.",
                    "Isolar trabalho em progresso sem afetar o branch principal.",
                    "Substituir o uso de comentários no código.",
                    "Compactar arquivos do projeto."
                  ],
                  answer: 1,
                  explanation: "Branches permitem desenvolver funcionalidades, corrigir bugs ou experimentar sem interferir no código principal."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Um merge conflict ocorre quando dois branches alteram a mesma parte de um arquivo de formas diferentes.",
                  answer: true,
                  explanation: "Verdadeiro. O Git não consegue decidir automaticamente qual versão manter, e o desenvolvedor precisa resolver o conflito manualmente."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // FASE 2 — STACK CORE
    // =========================================================
    {
      id: "fase-intermediario",
      nome: "Fase 2: Intermediário (Stack Core)",
      descricao: "Aprenda a construir aplicações completas, APIs e persistência de dados.",
      modulos: [

        {
          id: "mod-react",
          nome: "React & Componentização",
          emoji: "⚛️",
          xpBono: 300,
          licoes: [
            {
              id: "re-1",
              titulo: "Componentes e Props",
              categoria: "Frontend",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "O que são props em React?",
                  options: [
                    "Variáveis internas que um componente gerencia.",
                    "Dados passados de um componente pai para um componente filho.",
                    "Métodos do ciclo de vida de um componente de classe.",
                    "Estilos CSS aplicados a componentes."
                  ],
                  answer: 1,
                  explanation: "Props (propriedades) são dados imutáveis passados do componente pai para o filho, configurando seu comportamento e aparência."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Em React, um componente filho pode modificar diretamente as props recebidas do pai.",
                  answer: false,
                  explanation: "Falso. Props são somente leitura. Para alterar dados, usa-se state com funções de atualização passadas como props (lifting state up)."
                }
              ]
            },
            {
              id: "re-2",
              titulo: "Hooks e Ciclo de Vida",
              categoria: "Estado e Efeitos",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual hook do React substitui o componentDidMount em componentes funcionais?",
                  options: ["useState", "useCallback", "useEffect", "useMemo"],
                  answer: 2,
                  explanation: "'useEffect' com array de dependências vazio [] executa uma vez após a montagem do componente, equivalente ao componentDidMount."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O useState pode armazenar qualquer tipo de dado: strings, números, objetos e arrays.",
                  answer: true,
                  explanation: "Verdadeiro. useState aceita qualquer valor JavaScript como estado inicial e retorna o valor atual e sua função de atualização."
                },
                {
                  type: "preencher",
                  question: "O hook que memoriza o resultado de uma função custosa para evitar recálculos desnecessários é o:",
                  answer: "useMemo",
                  explanation: "'useMemo' retorna um valor memorizado, recalculando apenas quando as dependências especificadas mudarem."
                }
              ]
            },
            {
              id: "re-3",
              titulo: "Context API e Gerenciamento de Estado",
              categoria: "Estado Global",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o principal problema que a Context API resolve?",
                  options: [
                    "Lentidão no carregamento de imagens.",
                    "Prop drilling: passar dados por muitas camadas de componentes desnecessariamente.",
                    "A incompatibilidade entre React e TypeScript.",
                    "Conflitos de nomes de variáveis CSS."
                  ],
                  answer: 1,
                  explanation: "Context API resolve o 'prop drilling', permitindo que dados sejam acessados por qualquer componente na árvore sem passar por intermediários."
                }
              ]
            }
          ]
        },

        {
          id: "mod-node",
          nome: "Node.js & APIs RESTful",
          emoji: "🟢",
          xpBono: 300,
          licoes: [
            {
              id: "node-1",
              titulo: "Middlewares e Express",
              categoria: "Backend",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um middleware no Express.js?",
                  options: [
                    "Um banco de dados embutido no Node.js.",
                    "Uma função que tem acesso ao objeto de requisição, resposta e à próxima função na pilha.",
                    "Um template engine para renderizar HTML no servidor.",
                    "Um gerenciador de pacotes alternativo ao npm."
                  ],
                  answer: 1,
                  explanation: "Middlewares são funções intermediárias que processam requisições antes de chegar às rotas finais. Ex: autenticação, logs, parsing."
                },
                {
                  type: "verdadeiro-falso",
                  question: "No Express.js, se um middleware não chamar next(), a requisição continua automaticamente para o próximo handler.",
                  answer: false,
                  explanation: "Falso. Se next() não for chamado, a cadeia é interrompida. A requisição fica pendente até timeout, a menos que res.send() seja chamado."
                }
              ]
            },
            {
              id: "node-2",
              titulo: "Métodos HTTP e Status Codes",
              categoria: "Protocolos Web",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual método HTTP deve ser usado para criar um novo recurso no servidor?",
                  options: ["GET", "PUT", "POST", "DELETE"],
                  answer: 2,
                  explanation: "POST é utilizado para criar novos recursos. GET busca, PUT atualiza/substitui, DELETE remove recursos."
                },
                {
                  type: "preencher",
                  question: "O status HTTP que indica que um recurso foi criado com sucesso é o código:",
                  answer: "201",
                  explanation: "HTTP 201 Created é retornado quando um POST cria um novo recurso com sucesso no servidor."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O status HTTP 404 indica que o servidor encontrou o recurso, mas não tem permissão para acessá-lo.",
                  answer: false,
                  explanation: "Falso. 404 Not Found significa que o recurso não foi encontrado. 403 Forbidden indica falta de permissão."
                }
              ]
            },
            {
              id: "node-3",
              titulo: "Autenticação com JWT",
              categoria: "Segurança de APIs",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "O JWT (JSON Web Token) é composto por quantas partes separadas por pontos?",
                  options: ["2 partes", "3 partes", "4 partes", "5 partes"],
                  answer: 1,
                  explanation: "JWT tem 3 partes: Header (algoritmo), Payload (dados/claims) e Signature (assinatura de verificação), separadas por pontos."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O payload de um JWT é criptografado e seus dados são ilegíveis sem a chave secreta.",
                  answer: false,
                  explanation: "Falso. O payload é apenas codificado em Base64, não criptografado. Nunca armazene dados sensíveis no payload sem criptografia adicional."
                }
              ]
            }
          ]
        },

        {
          id: "mod-banco-dados",
          nome: "Bancos de Dados & SQL",
          emoji: "🛢️",
          xpBono: 250,
          licoes: [
            {
              id: "db-1",
              titulo: "Queries, Joins e Tabelas",
              categoria: "Modelagem Relacional",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual tipo de JOIN retorna apenas as linhas que possuem correspondência em ambas as tabelas?",
                  options: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"],
                  answer: 3,
                  explanation: "INNER JOIN retorna somente os registros que possuem valores correspondentes nas duas tabelas envolvidas."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Uma chave primária (PRIMARY KEY) pode conter valores NULL.",
                  answer: false,
                  explanation: "Falso. A PRIMARY KEY exige valores únicos e não nulos. Ela identifica de forma exclusiva cada linha da tabela."
                },
                {
                  type: "preencher",
                  question: "Para filtrar grupos em SQL após um GROUP BY, usamos a cláusula:",
                  answer: "HAVING",
                  explanation: "'HAVING' filtra grupos retornados por GROUP BY. É como um WHERE, mas aplicado após o agrupamento."
                }
              ]
            },
            {
              id: "db-2",
              titulo: "Normalização e Índices",
              categoria: "Otimização",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é a 1ª Forma Normal (1FN) na normalização de banco de dados?",
                  options: [
                    "Eliminar dependências transitivas entre colunas.",
                    "Garantir que cada coluna contenha apenas valores atômicos (indivisíveis) e sem grupos repetidos.",
                    "Separar todas as tabelas em esquemas distintos.",
                    "Utilizar apenas tipos de dados numéricos."
                  ],
                  answer: 1,
                  explanation: "1FN exige atomicidade: cada célula deve conter um único valor e não pode haver grupos de colunas repetidas."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Índices em banco de dados sempre aceleram tanto as operações de leitura quanto de escrita.",
                  answer: false,
                  explanation: "Falso. Índices aceleram leituras (SELECT), mas tornam escritas (INSERT, UPDATE, DELETE) mais lentas, pois o índice precisa ser atualizado."
                }
              ]
            }
          ]
        },

        {
          id: "mod-python",
          nome: "Python para Desenvolvedores",
          emoji: "🐍",
          xpBono: 250,
          licoes: [
            {
              id: "py-1",
              titulo: "Sintaxe e Estruturas de Dados",
              categoria: "Python Básico",
              xp: 30,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual estrutura de dados Python é imutável e ordenada?",
                  options: ["list", "dict", "set", "tuple"],
                  answer: 3,
                  explanation: "Tuple (tupla) é uma sequência ordenada e imutável. Uma vez criada, seus elementos não podem ser alterados."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Em Python, indentação é apenas uma convenção estética, sem impacto na execução do código.",
                  answer: false,
                  explanation: "Falso. Python usa indentação como parte da sua sintaxe para definir blocos de código. Indentação incorreta causa erros."
                },
                {
                  type: "preencher",
                  question: "Em Python, para criar uma lista a partir de um iterável com uma expressão compacta, usamos a sintaxe chamada:",
                  answer: "list comprehension",
                  explanation: "List comprehension: [expressão for item in iterável] — cria listas de forma concisa e legível."
                }
              ]
            },
            {
              id: "py-2",
              titulo: "Orientação a Objetos em Python",
              categoria: "POO",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o método especial em Python chamado automaticamente ao criar uma nova instância de uma classe?",
                  options: ["__new__", "__create__", "__init__", "__start__"],
                  answer: 2,
                  explanation: "'__init__' é o construtor da classe em Python. É chamado automaticamente ao instanciar um objeto com Classe()."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Em Python, uma classe filha pode sobrescrever métodos da classe pai (herança + polimorfismo).",
                  answer: true,
                  explanation: "Verdadeiro. Isso é chamado de override. A classe filha redefine o método herdado com seu próprio comportamento."
                }
              ]
            },
            {
              id: "py-3",
              titulo: "Decorators e Generators",
              categoria: "Python Avançado",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "O que um decorator Python essencialmente faz?",
                  options: [
                    "Cria classes automaticamente.",
                    "Envolve uma função para modificar ou estender seu comportamento sem alterá-la diretamente.",
                    "Importa módulos externos automaticamente.",
                    "Converte funções em métodos de classe."
                  ],
                  answer: 1,
                  explanation: "Decorators são funções que recebem outra função como argumento e retornam uma nova função com comportamento adicional."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // FASE 3 — AVANÇADO ENTERPRISE & CLOUD
    // =========================================================
    {
      id: "fase-avancado",
      nome: "Fase 3: Avançado (Enterprise & Cloud)",
      descricao: "Arquitetura limpa, infraestrutura automatizada, segurança e inteligência artificial.",
      modulos: [
        {
          id: "mod-typescript",
          nome: "TypeScript Avançado",
          emoji: "🔷",
          xpBono: 400,
          licoes: [
            {
              id: "ts-1",
              titulo: "Tipos Básicos e Interfaces",
              categoria: "Tipagem Estática",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é a diferença entre 'interface' e 'type' em TypeScript?",
                  options: [
                    "Não há diferença, são completamente intercambiáveis.",
                    "Interface pode ser estendida e declarada múltiplas vezes (declaration merging). Type é mais flexível para unions e intersections.",
                    "Type só pode ser usado com classes, interface com funções.",
                    "Interface é para JavaScript, type é exclusivo do TypeScript."
                  ],
                  answer: 1,
                  explanation: "Interfaces suportam declaration merging e herança mais natural. Types são mais versáteis para tipos complexos, unions e mapped types."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O tipo 'any' em TypeScript desativa completamente a verificação de tipos para aquela variável.",
                  answer: true,
                  explanation: "Verdadeiro. 'any' é um escape hatch que desabilita checagem de tipos. Deve ser usado com parcimônia para não perder os benefícios do TypeScript."
                }
              ]
            },
            {
              id: "ts-2",
              titulo: "Generics e Interfaces Complexas",
              categoria: "Tipos Avançados",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "O que um Generic em TypeScript permite?",
                  options: [
                    "Criar classes que herdam de múltiplas classes ao mesmo tempo.",
                    "Escrever componentes/funções que funcionam com vários tipos, mantendo a segurança de tipos.",
                    "Importar pacotes de forma dinâmica.",
                    "Definir valores padrão para propriedades de objetos."
                  ],
                  answer: 1,
                  explanation: "Generics permitem criar código reutilizável que funciona com qualquer tipo, sem sacrificar a verificação estática de tipos."
                }
              ]
            }
          ]
        },

        {
          id: "mod-nextjs",
          nome: "Next.js & Server Side Rendering",
          emoji: "▲",
          xpBono: 400,
          licoes: [
            {
              id: "next-1",
              titulo: "SSR, SSG e ISR",
              categoria: "Estratégias de Renderização",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual estratégia do Next.js gera páginas em tempo de build e as serve como HTML estático?",
                  options: ["SSR (Server-Side Rendering)", "CSR (Client-Side Rendering)", "SSG (Static Site Generation)", "ISR (Incremental Static Regeneration)"],
                  answer: 2,
                  explanation: "SSG (Static Site Generation) pré-gera o HTML no build. Ideal para conteúdo que não muda com frequência, como blogs e documentações."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Com ISR no Next.js, é possível regenerar páginas estáticas em intervalos de tempo após o deploy.",
                  answer: true,
                  explanation: "Verdadeiro. ISR permite definir um 'revalidate' em segundos. O Next.js regenera a página em background quando há novas requisições."
                }
              ]
            },
            {
              id: "next-2",
              titulo: "App Router e Otimização",
              categoria: "Fullstack Moderno",
              xp: 45,
              questoes: [
                {
                  type: "multipla",
                  question: "No App Router do Next.js 13+, como se define um Server Component?",
                  options: [
                    "Adicionando 'use server' no topo do arquivo.",
                    "Todos os componentes são Server Components por padrão. 'use client' torna-os Client Components.",
                    "Criando o arquivo dentro da pasta /server.",
                    "Exportando com export server default."
                  ],
                  answer: 1,
                  explanation: "No App Router, por padrão todos os componentes são Server Components. 'use client' no topo transforma o componente em Client Component."
                }
              ]
            }
          ]
        },

        {
          id: "mod-docker",
          nome: "Containers & Docker",
          emoji: "🐳",
          xpBono: 350,
          licoes: [
            {
              id: "dock-1",
              titulo: "Imagens e Containers",
              categoria: "Fundamentos Docker",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual a diferença entre uma Image e um Container no Docker?",
                  options: [
                    "São a mesma coisa, apenas nomes diferentes.",
                    "Uma Image é um template imutável. Um Container é uma instância em execução da image.",
                    "Image é para Linux, Container é para Windows.",
                    "Image roda no cliente, Container roda no servidor."
                  ],
                  answer: 1,
                  explanation: "Docker Image é como uma receita/template. Container é a instância em execução dessa image, com sua própria camada de escrita."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Cada instrução no Dockerfile cria uma nova camada na imagem, que pode ser cacheada.",
                  answer: true,
                  explanation: "Verdadeiro. O sistema de camadas do Docker permite cache inteligente: apenas camadas alteradas e posteriores são reconstruídas."
                }
              ]
            },
            {
              id: "dock-2",
              titulo: "Orquestração com Docker Compose",
              categoria: "Multi-container",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "O que o arquivo 'docker-compose.yml' define?",
                  options: [
                    "As configurações de rede do sistema operacional.",
                    "Um conjunto de serviços, redes e volumes que formam uma aplicação multi-container.",
                    "As variáveis de ambiente globais do Docker.",
                    "As credenciais de acesso ao Docker Hub."
                  ],
                  answer: 1,
                  explanation: "docker-compose.yml define toda a infraestrutura da aplicação como código: serviços, dependências, volumes e configurações de rede."
                }
              ]
            }
          ]
        },

        {
          id: "mod-testes-arquitetura",
          nome: "Testes Automatizados & Arquitetura Clean",
          emoji: "🧪",
          xpBono: 500,
          licoes: [
            {
              id: "test-1",
              titulo: "Testes Unitários com Jest",
              categoria: "Qualidade de Software",
              xp: 45,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um Mock em testes unitários?",
                  options: [
                    "Um teste que falha propositalmente.",
                    "Um ambiente de produção simulado.",
                    "Um objeto ou função falsa que substitui dependências reais para isolar o código sendo testado.",
                    "Uma cobertura de código acima de 80%."
                  ],
                  answer: 2,
                  explanation: "Mocks simulam dependências externas (API, banco de dados) para que o teste foque apenas na lógica da unidade em teste."
                },
                {
                  type: "verdadeiro-falso",
                  question: "TDD (Test-Driven Development) consiste em escrever os testes depois de implementar a funcionalidade.",
                  answer: false,
                  explanation: "Falso. TDD segue o ciclo Red-Green-Refactor: escreva o teste primeiro (falha), depois escreva o código mínimo para passar, depois refatore."
                }
              ]
            },
            {
              id: "test-2",
              titulo: "Clean Architecture e SOLID",
              categoria: "Arquitetura de Software",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "O que representa o 'S' no princípio SOLID?",
                  options: [
                    "Scalability Principle — cada módulo deve ser escalável.",
                    "Single Responsibility Principle — cada classe deve ter apenas uma razão para mudar.",
                    "Static Typing Principle — prefira tipagem estática.",
                    "Separation Concern — separe as camadas da aplicação."
                  ],
                  answer: 1,
                  explanation: "SRP: uma classe deve ter uma única responsabilidade, ou seja, uma única razão para ser modificada. Isso facilita manutenção e testes."
                }
              ]
            }
          ]
        },

        {
          id: "mod-seguranca-deploy",
          nome: "Segurança, OWASP & Deploy CI/CD",
          emoji: "🛡️",
          xpBono: 450,
          licoes: [
            {
              id: "sec-1",
              titulo: "OWASP Top 10 e Vulnerabilidades",
              categoria: "Segurança Web",
              xp: 45,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é SQL Injection?",
                  options: [
                    "Um ataque que sobrecarrega o servidor com muitas requisições.",
                    "Inserção de código SQL malicioso em campos de entrada para manipular queries do banco de dados.",
                    "Um método de criptografar dados no banco de dados.",
                    "Uma técnica de otimização de queries SQL."
                  ],
                  answer: 1,
                  explanation: "SQL Injection explora entradas não sanitizadas para injetar código SQL. A prevenção é usar prepared statements ou ORMs."
                }
              ]
            },
            {
              id: "sec-2",
              titulo: "Criptografia, JWT e Pipelines CI/CD",
              categoria: "Produção Segura",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é a diferença entre hashing e criptografia?",
                  options: [
                    "Hashing é reversível, criptografia não é.",
                    "Hashing é uma função unidirecional irreversível. Criptografia é bidirecional (pode ser decriptada com a chave).",
                    "Hashing é mais lento que criptografia.",
                    "Criptografia é usada apenas em bancos de dados."
                  ],
                  answer: 1,
                  explanation: "Hashing (ex: bcrypt) é unidirecional — ideal para senhas. Criptografia (ex: AES) é bidirecional — ideal para dados que precisam ser recuperados."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Em um pipeline CI/CD, o CD (Continuous Deployment) implanta automaticamente cada commit aprovado em produção.",
                  answer: true,
                  explanation: "Verdadeiro. CD automatiza o deploy após os testes passarem. Continuous Delivery requer aprovação manual; Continuous Deployment é totalmente automático."
                }
              ]
            }
          ]
        },

        {
          id: "mod-ia-projetos",
          nome: "Integração de IA & Projetos Reais",
          emoji: "🤖",
          xpBono: 600,
          licoes: [
            {
              id: "ia-1",
              titulo: "Consumo de LLMs e Engenharia de Prompt",
              categoria: "IA Aplicada",
              xp: 55,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é 'temperatura' em modelos de linguagem (LLMs)?",
                  options: [
                    "A velocidade de processamento do modelo.",
                    "Um parâmetro que controla a aleatoriedade das respostas: quanto maior, mais criativo e imprevisível.",
                    "O número de tokens máximos por requisição.",
                    "A versão do modelo utilizado."
                  ],
                  answer: 1,
                  explanation: "Temperatura 0 gera respostas determinísticas e conservadoras. Temperatura alta (0.8-1.0) aumenta criatividade mas também imprecisão."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Prompt engineering pode significativamente melhorar a qualidade das respostas de um LLM sem alterar o modelo.",
                  answer: true,
                  explanation: "Verdadeiro. Técnicas como chain-of-thought, few-shot examples e system prompts bem estruturados melhoram drasticamente os resultados."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // FASE 4 — MOBILE & MULTIPLATAFORMA
    // =========================================================
    {
      id: "fase-mobile",
      nome: "Fase 4: Mobile & Multiplataforma",
      descricao: "Desenvolva apps nativos e híbridos para iOS e Android com tecnologias modernas.",
      modulos: [

        {
          id: "mod-react-native",
          nome: "React Native",
          emoji: "📱",
          xpBono: 400,
          licoes: [
            {
              id: "rn-1",
              titulo: "Componentes Nativos e StyleSheet",
              categoria: "Mobile Dev",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual componente React Native equivale a uma <div> no HTML?",
                  options: ["Container", "Box", "View", "Frame"],
                  answer: 2,
                  explanation: "'View' é o componente base de layout no React Native, equivalente à div do HTML. É o contêiner fundamental para construir UIs."
                },
                {
                  type: "verdadeiro-falso",
                  question: "React Native compila para código nativo real de iOS e Android, não para um WebView.",
                  answer: true,
                  explanation: "Verdadeiro. React Native usa uma bridge para comunicar JavaScript com componentes nativos reais, diferente de frameworks híbridos baseados em WebView."
                },
                {
                  type: "preencher",
                  question: "No React Native, os estilos são criados usando a API:",
                  answer: "StyleSheet",
                  explanation: "'StyleSheet.create()' otimiza os estilos no React Native, similar ao CSS mas em JavaScript."
                }
              ]
            },
            {
              id: "rn-2",
              titulo: "Navegação com React Navigation",
              categoria: "Fluxo de Telas",
              xp: 45,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual tipo de navegador do React Navigation empilha telas, permitindo voltar para a anterior?",
                  options: ["Tab Navigator", "Drawer Navigator", "Stack Navigator", "Modal Navigator"],
                  answer: 2,
                  explanation: "Stack Navigator empilha telas como cartas. Navegar avança na pilha; voltar remove a tela do topo, retornando à anterior."
                },
                {
                  type: "verdadeiro-falso",
                  question: "No React Navigation, todos os parâmetros passados entre telas são automaticamente tipados.",
                  answer: false,
                  explanation: "Falso. Os parâmetros de rota não são tipados por padrão. É necessário usar TypeScript com definições de tipos de rotas para tipagem."
                }
              ]
            },
            {
              id: "rn-3",
              titulo: "APIs Nativas: Câmera, Localização e Storage",
              categoria: "Recursos do Dispositivo",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual biblioteca é comumente utilizada para armazenamento local persistente em React Native?",
                  options: ["AsyncStorage", "LocalStorage", "SQLite apenas", "Redux Persist exclusivamente"],
                  answer: 0,
                  explanation: "AsyncStorage é a solução nativa do React Native para persistência de dados simples. Para dados complexos, combina-se com MMKV ou SQLite."
                }
              ]
            }
          ]
        },

        {
          id: "mod-flutter",
          nome: "Flutter & Dart",
          emoji: "🦋",
          xpBono: 450,
          licoes: [
            {
              id: "fl-1",
              titulo: "Widgets e o Modelo de UI Declarativa",
              categoria: "Flutter Básico",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "No Flutter, qual é a diferença entre StatelessWidget e StatefulWidget?",
                  options: [
                    "StatelessWidget é mais rápido, StatefulWidget é mais bonito.",
                    "StatelessWidget não gerencia estado interno mutável. StatefulWidget pode atualizar a UI em resposta a mudanças de estado.",
                    "StatelessWidget é para iOS, StatefulWidget para Android.",
                    "StatelessWidget usa Dart, StatefulWidget usa JavaScript."
                  ],
                  answer: 1,
                  explanation: "StatelessWidget é imutável e ideal para UI estática. StatefulWidget mantém estado que, quando alterado com setState(), reconstrói a widget."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Flutter usa o mesmo engine de renderização tanto no iOS quanto no Android, garantindo consistência visual.",
                  answer: true,
                  explanation: "Verdadeiro. Flutter usa o engine Skia/Impeller próprio, não componentes nativos da plataforma, garantindo pixel-perfect em ambos os sistemas."
                }
              ]
            },
            {
              id: "fl-2",
              titulo: "Gerenciamento de Estado com Bloc/Provider",
              categoria: "Estado no Flutter",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "O padrão BLoC (Business Logic Component) em Flutter separa:",
                  options: [
                    "A UI do código Dart.",
                    "A lógica de negócio da camada de apresentação usando Streams e eventos.",
                    "O código iOS do código Android.",
                    "Widgets stateful dos stateless."
                  ],
                  answer: 1,
                  explanation: "BLoC usa Streams para comunicar eventos de UI e estados. Separa claramente a lógica de negócio da apresentação visual."
                }
              ]
            }
          ]
        },

        {
          id: "mod-pwa",
          nome: "Progressive Web Apps (PWA)",
          emoji: "🌐",
          xpBono: 300,
          licoes: [
            {
              id: "pwa-1",
              titulo: "Service Workers e Cache",
              categoria: "Web Offline",
              xp: 35,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um Service Worker?",
                  options: [
                    "Um servidor web leve integrado ao navegador.",
                    "Um script que roda em segundo plano, interceptando requisições e habilitando funcionalidades offline.",
                    "Um tipo especial de Web Worker para processamento matemático.",
                    "Uma API para comunicação em tempo real."
                  ],
                  answer: 1,
                  explanation: "Service Workers são proxies programáveis entre o app e a rede, habilitando cache, notificações push e funcionamento offline."
                },
                {
                  type: "verdadeiro-falso",
                  question: "PWAs podem ser instaladas na tela inicial do celular como um app nativo.",
                  answer: true,
                  explanation: "Verdadeiro. Com um Web App Manifest configurado e Service Worker registrado, PWAs podem ser instaladas como apps nativos no Android e iOS."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // FASE 5 — DATA SCIENCE & BACKEND AVANÇADO
    // =========================================================
    {
      id: "fase-data",
      nome: "Fase 5: Data Science & Backend Avançado",
      descricao: "Análise de dados, machine learning, GraphQL e arquiteturas de microsserviços.",
      modulos: [

        {
          id: "mod-data-science",
          nome: "Data Science com Python",
          emoji: "📊",
          xpBono: 500,
          licoes: [
            {
              id: "ds-1",
              titulo: "Pandas e NumPy — Manipulação de Dados",
              categoria: "Análise de Dados",
              xp: 45,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual estrutura de dados do Pandas é similar a uma tabela com linhas e colunas?",
                  options: ["Series", "Array", "DataFrame", "Matrix"],
                  answer: 2,
                  explanation: "DataFrame é a estrutura 2D principal do Pandas, equivalente a uma tabela de banco de dados ou planilha Excel."
                },
                {
                  type: "verdadeiro-falso",
                  question: "NumPy arrays são mais eficientes que listas Python para operações matemáticas em grandes volumes de dados.",
                  answer: true,
                  explanation: "Verdadeiro. NumPy usa blocos contíguos de memória e operações vetorizadas em C, sendo muito mais rápido que loops Python para cálculos numéricos."
                },
                {
                  type: "preencher",
                  question: "No Pandas, para visualizar as 5 primeiras linhas de um DataFrame usamos o método:",
                  answer: "head",
                  explanation: "df.head() retorna as 5 primeiras linhas por padrão. df.head(n) retorna as n primeiras linhas."
                }
              ]
            },
            {
              id: "ds-2",
              titulo: "Machine Learning com Scikit-learn",
              categoria: "ML Básico",
              xp: 55,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é a diferença entre aprendizado supervisionado e não supervisionado?",
                  options: [
                    "Supervisionado usa mais memória RAM.",
                    "Supervisionado treina com dados rotulados (labels). Não supervisionado encontra padrões em dados sem labels.",
                    "Supervisionado é mais rápido de treinar.",
                    "Não supervisionado só funciona com imagens."
                  ],
                  answer: 1,
                  explanation: "No supervisionado, o modelo aprende a mapear entradas para saídas conhecidas. No não supervisionado, descobre estruturas ocultas nos dados."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Overfitting ocorre quando o modelo aprende tão bem os dados de treino que perde a capacidade de generalizar para novos dados.",
                  answer: true,
                  explanation: "Verdadeiro. Overfitting é o modelo 'memorizar' o treino. Técnicas como regularização, dropout e cross-validation ajudam a prevenir."
                }
              ]
            },
            {
              id: "ds-3",
              titulo: "Visualização de Dados com Matplotlib e Seaborn",
              categoria: "Dataviz",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual biblioteca Python é construída sobre Matplotlib e oferece gráficos estatísticos mais bonitos com menos código?",
                  options: ["Plotly", "Seaborn", "Bokeh", "Altair"],
                  answer: 1,
                  explanation: "Seaborn é uma camada de alto nível sobre Matplotlib, focada em visualizações estatísticas com paletas de cores atraentes por padrão."
                }
              ]
            }
          ]
        },

        {
          id: "mod-graphql",
          nome: "GraphQL & Apollo",
          emoji: "🔗",
          xpBono: 400,
          licoes: [
            {
              id: "gql-1",
              titulo: "Queries, Mutations e Subscriptions",
              categoria: "APIs Modernas",
              xp: 40,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é a vantagem principal do GraphQL sobre REST?",
                  options: [
                    "GraphQL é sempre mais rápido que REST.",
                    "O cliente especifica exatamente quais dados quer, evitando over-fetching e under-fetching.",
                    "GraphQL não precisa de servidor.",
                    "GraphQL usa XML em vez de JSON."
                  ],
                  answer: 1,
                  explanation: "GraphQL elimina over-fetching (dados desnecessários) e under-fetching (múltiplas requisições). O cliente define a estrutura exata da resposta."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Em GraphQL, uma Mutation é utilizada para operações de escrita (criar, atualizar, deletar dados).",
                  answer: true,
                  explanation: "Verdadeiro. Query é para leitura, Mutation para escrita, e Subscription para dados em tempo real via WebSocket."
                }
              ]
            },
            {
              id: "gql-2",
              titulo: "Schema Design e Resolvers",
              categoria: "GraphQL Avançado",
              xp: 45,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um Resolver em GraphQL?",
                  options: [
                    "Um cliente para testar APIs GraphQL.",
                    "Uma função que retorna os dados para um campo específico do schema.",
                    "Um middleware de autenticação automática.",
                    "Um tipo especial de union no schema."
                  ],
                  answer: 1,
                  explanation: "Resolvers são funções que buscam os dados para cada campo do schema. São o 'como' do GraphQL — o schema define 'o quê'."
                }
              ]
            }
          ]
        },

        {
          id: "mod-microsservicos",
          nome: "Microsserviços & Message Queues",
          emoji: "⚙️",
          xpBono: 550,
          licoes: [
            {
              id: "ms-1",
              titulo: "Arquitetura de Microsserviços",
              categoria: "Sistemas Distribuídos",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o principal desafio de arquiteturas de microsserviços em comparação com monolitos?",
                  options: [
                    "Microsserviços são mais difíceis de escrever em Python.",
                    "Complexidade operacional: mais serviços para monitorar, comunicação distribuída, consistência de dados.",
                    "Microsserviços não podem usar bancos de dados relacionais.",
                    "Microsserviços só funcionam em Kubernetes."
                  ],
                  answer: 1,
                  explanation: "Microsserviços trazem complexidade distribuída: latência de rede, falhas parciais, rastreamento de requisições e consistência eventual."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Cada microsserviço deve ter seu próprio banco de dados para garantir o desacoplamento.",
                  answer: true,
                  explanation: "Verdadeiro. Database per service é um padrão fundamental. Compartilhar banco de dados acopla os serviços e viola a autonomia dos microsserviços."
                }
              ]
            },
            {
              id: "ms-2",
              titulo: "RabbitMQ e Kafka — Message Queues",
              categoria: "Comunicação Assíncrona",
              xp: 55,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é a principal diferença entre RabbitMQ e Apache Kafka?",
                  options: [
                    "RabbitMQ é gratuito, Kafka é pago.",
                    "RabbitMQ é um message broker tradicional (foco em entrega). Kafka é uma plataforma de streaming de eventos com persistência e replay.",
                    "Kafka usa XML, RabbitMQ usa JSON.",
                    "RabbitMQ é mais escalável que Kafka."
                  ],
                  answer: 1,
                  explanation: "RabbitMQ foca em entrega confiável de mensagens. Kafka é otimizado para throughput massivo, retenção de eventos e reprocessamento histórico."
                }
              ]
            }
          ]
        }
      ]
    },

    // =========================================================
    // FASE 6 — CLOUD & DEVOPS MASTER
    // =========================================================
    {
      id: "fase-cloud",
      nome: "Fase 6: Cloud & DevOps Master",
      descricao: "Infraestrutura como código, Kubernetes, observabilidade e deployment em larga escala.",
      modulos: [

        {
          id: "mod-aws",
          nome: "AWS Cloud Essentials",
          emoji: "☁️",
          xpBono: 600,
          licoes: [
            {
              id: "aws-1",
              titulo: "Serviços Core: EC2, S3 e IAM",
              categoria: "Computação em Nuvem",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é o AWS S3?",
                  options: [
                    "Um serviço de banco de dados relacional gerenciado.",
                    "Um serviço de armazenamento de objetos escalável para arquivos, imagens, backups e dados.",
                    "Um serviço de computação serverless.",
                    "Uma rede de distribuição de conteúdo (CDN)."
                  ],
                  answer: 1,
                  explanation: "S3 (Simple Storage Service) armazena objetos ilimitados em buckets. É altamente disponível, durável e usado para estáticos, backups e data lakes."
                },
                {
                  type: "verdadeiro-falso",
                  question: "IAM (Identity and Access Management) na AWS segue o princípio do menor privilégio.",
                  answer: true,
                  explanation: "Verdadeiro. Boas práticas IAM recomendam conceder apenas as permissões necessárias para cada usuário/role, minimizando superfície de ataque."
                }
              ]
            },
            {
              id: "aws-2",
              titulo: "Lambda, API Gateway e Serverless",
              categoria: "Arquitetura Serverless",
              xp: 55,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o modelo de cobrança do AWS Lambda?",
                  options: [
                    "Por hora de servidor reservado.",
                    "Por número de funções criadas.",
                    "Por número de invocações e tempo de execução (paga apenas quando executa).",
                    "Por GB de código armazenado."
                  ],
                  answer: 2,
                  explanation: "Lambda usa pay-per-use: cobra por invocações e duração de execução em milissegundos. Sem execuções, sem custo — ideal para workloads intermitentes."
                }
              ]
            }
          ]
        },

        {
          id: "mod-kubernetes",
          nome: "Kubernetes & Orquestração",
          emoji: "☸️",
          xpBono: 700,
          licoes: [
            {
              id: "k8s-1",
              titulo: "Pods, Services e Deployments",
              categoria: "Orquestração de Containers",
              xp: 55,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é um Pod no Kubernetes?",
                  options: [
                    "Um cluster completo de servidores.",
                    "A menor unidade implantável, contendo um ou mais containers que compartilham rede e storage.",
                    "Um serviço de balanceamento de carga.",
                    "Um arquivo de configuração YAML."
                  ],
                  answer: 1,
                  explanation: "Pod é a unidade atômica do K8s. Containers no mesmo Pod compartilham IP, namespace de rede e volumes. Geralmente 1 container por Pod."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Um Deployment no Kubernetes gerencia rollouts e rollbacks automaticamente.",
                  answer: true,
                  explanation: "Verdadeiro. Deployments gerenciam ReplicaSets, garantindo o número desejado de Pods. Suportam rolling updates e rollback para versões anteriores."
                }
              ]
            },
            {
              id: "k8s-2",
              titulo: "Helm Charts e GitOps",
              categoria: "Deploy Avançado",
              xp: 60,
              questoes: [
                {
                  type: "multipla",
                  question: "O que é Helm no ecossistema Kubernetes?",
                  options: [
                    "Uma ferramenta de monitoramento de clusters.",
                    "Um gerenciador de pacotes para Kubernetes que facilita deploy de aplicações complexas.",
                    "Um substituto para o kubectl.",
                    "Um serviço de mesh de rede."
                  ],
                  answer: 1,
                  explanation: "Helm é o 'apt-get do Kubernetes'. Charts são pacotes de manifests K8s versionados e configuráveis, simplificando deploys complexos."
                }
              ]
            }
          ]
        },

        {
          id: "mod-observabilidade",
          nome: "Observabilidade: Logs, Métricas e Traces",
          emoji: "🔭",
          xpBono: 500,
          licoes: [
            {
              id: "obs-1",
              titulo: "Os 3 Pilares da Observabilidade",
              categoria: "SRE & Monitoramento",
              xp: 45,
              questoes: [
                {
                  type: "multipla",
                  question: "Quais são os 3 pilares da observabilidade em sistemas distribuídos?",
                  options: [
                    "CPU, RAM e Disco.",
                    "Logs, Métricas e Traces.",
                    "Frontend, Backend e Banco de Dados.",
                    "Dev, Staging e Produção."
                  ],
                  answer: 1,
                  explanation: "Logs registram eventos. Métricas medem números ao longo do tempo. Traces rastreiam uma requisição por todo o sistema distribuído."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O Prometheus coleta métricas usando um modelo push: os serviços enviam dados para ele.",
                  answer: false,
                  explanation: "Falso. Prometheus usa modelo pull: ele scraping (raspagem) os endpoints /metrics dos serviços em intervalos configurados."
                }
              ]
            },
            {
              id: "obs-2",
              titulo: "Grafana, Prometheus e OpenTelemetry",
              categoria: "Stack de Observabilidade",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "Qual é o papel do OpenTelemetry no ecosistema de observabilidade?",
                  options: [
                    "Um substituto ao Grafana para visualização.",
                    "Um padrão aberto para instrumentação de código que gera logs, métricas e traces de forma vendor-neutral.",
                    "Um banco de dados de séries temporais.",
                    "Um serviço de alertas automatizados."
                  ],
                  answer: 1,
                  explanation: "OpenTelemetry (OTEL) é um padrão CNCF que unifica a geração de telemetria. Você instrumenta uma vez e envia para qualquer backend (Jaeger, Zipkin, Datadog)."
                }
              ]
            }
          ]
        },

        {
          id: "mod-iac",
          nome: "Infraestrutura como Código (IaC)",
          emoji: "🏗️",
          xpBono: 600,
          licoes: [
            {
              id: "iac-1",
              titulo: "Terraform — Provisionamento Declarativo",
              categoria: "IaC com Terraform",
              xp: 55,
              questoes: [
                {
                  type: "multipla",
                  question: "O que diferencia a abordagem declarativa do Terraform da imperativa?",
                  options: [
                    "Terraform só funciona com AWS.",
                    "Declarativo descreve o estado desejado da infraestrutura. Terraform descobre os passos para atingi-lo.",
                    "Terraform cria servidores físicos, não virtuais.",
                    "Declarativo é mais lento que imperativo."
                  ],
                  answer: 1,
                  explanation: "No Terraform, você descreve 'o que quer' (estado final). Ele calcula e executa as mudanças necessárias para chegar lá, comparando com o estado atual."
                },
                {
                  type: "verdadeiro-falso",
                  question: "O arquivo terraform.tfstate armazena o estado atual da infraestrutura e deve ser versionado no Git.",
                  answer: false,
                  explanation: "Falso. tfstate pode conter dados sensíveis e causa conflitos em equipes. Use remote state (S3 + DynamoDB lock) para ambientes colaborativos."
                }
              ]
            },
            {
              id: "iac-2",
              titulo: "Ansible — Gerenciamento de Configuração",
              categoria: "Config Management",
              xp: 50,
              questoes: [
                {
                  type: "multipla",
                  question: "O Ansible usa qual linguagem para escrever seus playbooks?",
                  options: ["JSON", "XML", "YAML", "HCL"],
                  answer: 2,
                  explanation: "Ansible usa YAML para seus playbooks, tornando-os legíveis por humanos. Usa SSH para conectar aos servidores sem necessidade de agente instalado."
                },
                {
                  type: "verdadeiro-falso",
                  question: "Ansible requer que um agente seja instalado em cada servidor gerenciado.",
                  answer: false,
                  explanation: "Falso. Esta é uma vantagem do Ansible: é agentless. Usa SSH (Linux) ou WinRM (Windows) para executar tarefas remotamente."
                }
              ]
            }
          ]
        }
      ]
    }

  ],

  rankingEstatico: [
    { posicao: 1, usuario: "DevPro_Gamer", xp: 9920, tag: "Platina" },
    { posicao: 2, usuario: "Ana_Codex", xp: 8310, tag: "Ouro" },
    { posicao: 3, usuario: "RocketDev_BR", xp: 6540, tag: "Ouro" },
    { posicao: 4, usuario: "Você (CodeQuester)", xp: 0, tag: "Prata", isUser: true },
    { posicao: 5, usuario: "Lucas_Byte", xp: 4750, tag: "Prata" },
    { posicao: 6, usuario: "Clara_JS", xp: 3980, tag: "Prata" },
    { posicao: 7, usuario: "PythonKing_SP", xp: 2810, tag: "Bronze" },
    { posicao: 8, usuario: "CloudNinja", xp: 1650, tag: "Bronze" }
  ],

  missoesDiarias: [
    { id: "m1", texto: "Ganhar 60 XP no dia de hoje", meta: 60, atual: 0, concluida: false },
    { id: "m2", texto: "Concluir 2 lições completas", meta: 2, atual: 0, concluida: false },
    { id: "m3", texto: "Acertar 5 questões seguidas", meta: 5, atual: 0, concluida: false }
  ]
};
