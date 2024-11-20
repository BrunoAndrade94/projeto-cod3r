import { Event } from "../event";

//
// dmfafd9flqh-dep9ohpkbl-aflr4fwexxq-45muqd7yqns
// gewf5vxypqk-iopi3p8btaq-801izvmty23-yv3kvggmgxa
// m4lggywgxxa-8pa0snshwgh-6h4pa9jrl2m-f7rosfay0i
// jjt5c36lsu-1jlvo3c3s5x-5myk06fsnaj-86ty6lxveu9
// izu73pr9qpl-96u1l5drb6q-jlyrl9amkbs-lm0gib3d02
// bt5jb63o0vr-jcfbmyyrc2r-mv9whyrtthr-gpf1s6vklek
// b3adkkxvhps-rnryyavmvkd-4cikas23yhb-na2vy1d3fj
// s9p4hjjthli-ynbx6htho9i-j63paaq4fj-52v0yqei1og
// p7gb9vhgjr-5dlsxqyjl4n-anckbqqow3t-sd0qdrzadj
// u0bald9pvg-8jxsqxg8dey-t7stodccabs-ndm7hcgy0kh
//
//

const events: Event[] = [
  {
    id: "03zvokwyh8vy-q05uynzmhjo-30jt7flfy3i-qq99rvo53uf",
    alias: "event-fullstack",
    senha: "senha123",
    nome: "Event de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um event completo para aprender desenvolvimento fullstack do zero.",
    imagem:
      "https://coodesh.com/blog/wp-content/uploads/2021/03/papel-de-um-fullstack-scaled.jpg",
    imagemBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "bg5elq9d8fp-8f7ctrj8v8v-12bub81h3tl-fwz7eci427f",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
      {
        id: "bg5elq9d8fp-8f7ctrj8v8v-12bub81h3tl-fwz7eci444f",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: "bg5elq9d8fp-8f7ctrj8v8v-12bub81fr4l-fwz7eci427f",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 2,
      },
    ],
  },
  {
    id: "76vbo2r3z7-z0o48ozf0c-wdv87sa2mhg-wdv87sa2mhg",
    alias: "react-basico",
    senha: "react2024",
    nome: "Introdução ao React",
    data: new Date("2024-11-25T10:00:00Z"),
    local: "São Paulo, SP",
    descricao: "Um workshop básico para iniciantes em React.",
    imagem:
      "https://papode.dev/assets/img/1_fxa6ojfh2lrd7enaczicqg-1-780x439.png",
    imagemBackground:
      "https://miro.medium.com/max/3840/1*xk1roah9NDBxr3h-eXyO9Q.jpeg",
    publicoEsperado: 50,
    convidados: [
      {
        id: "76vbo2r3z7-z0o48ozf0c-wdv87sa2mhg-t7stodccabs",
        nome: "Mariana Silva",
        email: "mariana@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 2,
      },
      {
        id: "t7stodccabs-z0o48ozf0c-wdv87sa2mhg-gjt0sgbyfyo",
        nome: "João Pereira",
        email: "joao@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: "76vbo2r3z7-wdv87sa2mhg-wdv87sa2mhg-gjt0sgbyfyo",
    alias: "python-data-science",
    senha: "python2024",
    nome: "Python para Data Science",
    data: new Date("2024-11-28T14:00:00Z"),
    local: "Curitiba, PR",
    descricao: "Workshop sobre como usar Python para análise de dados.",
    imagem:
      "https://ica.ele.puc-rio.br/wp-content/uploads/2024/01/Python-tem-se-tornado-a-linguagem-mais-utilizada.webp",
    imagemBackground:
      "https://miro.medium.com/max/1400/1*0FgvD74x6mVRGUW_9zHMSw.jpeg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "76vbo2r3z7-t7stodccabs-wdv87sa2mhg-gjt0sgbyfyo",
        nome: "Carlos Meirelles",
        email: "carlos@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: "t7stodccabs-z0o48ozf0c-t7stodccabs-gjt0sgbyfyo",
        nome: "Ana Paula",
        email: "ana@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
    ],
  },
  {
    id: "76vbo2r3z7-wdv87sa2mhg-wdv87sa2mhg-gjt0sgbffyo",
    alias: "ux-ui-design",
    senha: "uxui2024",
    nome: "Princípios de UX/UI Design",
    data: new Date("2024-12-01T09:00:00Z"),
    local: "Florianópolis, SC",
    descricao: "Descubra os fundamentos de UX/UI para projetos digitais.",
    imagem:
      "https://assets.isu.pub/document-structure/231009112700-909445fd20d9596a58e2cb1cb1b77090/v1/ce775b80ef6825c0c9dc623016ab01f5.jpeg",
    imagemBackground:
      "https://www.nngroup.com/articles/improving-design-workflow/img0.png",
    publicoEsperado: 60,
    convidados: [
      {
        id: "76vbo2r3z7-z0o48ozf0c-wdv87sa2mhg-76vbo2r3z7",
        nome: "Luciana Gomes",
        email: "luciana@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: "76vbo2r3z7-76vbo2r3z7-76vbo2r3z7-gjt0sgbyfyo",
        nome: "Roberto Fernandes",
        email: "roberto@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 3,
      },
    ],
  },
  {
    id: "76vbo2r3z7-gjt0sgbyfyo-wdv87sa2mhg-gjt0sgbyfyo",
    alias: "event-js-avancado",
    senha: "js2024",
    nome: "Workshop Avançado de JavaScript",
    data: new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avançado para programadores JavaScript.",
    imagem:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "76vbo2r3z7-z0o48ozf0c-gjt0sgbyfyo-gjt0sgbyfyo",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: "76vbo2r3z7-gjt0sgbyfyo-wdv87sa2mhg-gjt0sgbyfyo",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
    ],
  },
  {
    id: "76vbo2r3z7-76vbo2r3z7-76vbo2r3z7-gjt0sgbyfyo",
    alias: "event-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incríveis e responsivas.",
    imagem:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "76vbo2r3z7-76vbo2r3z7-wdv87sa2mhg-76vbo2r3z7",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
      {
        id: "76vbo2r3z7-z0o48ozf0c-76vbo2r3z7-76vbo2r3z7",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: "76vbo2r3z7-z0o48ozf0c-76vbo2r3z7-gjt0sgbyfyo",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: "76vbo2r3z7-z0o48ozf0c-wdv87sa2mhg-76vbo2r3z7",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: new Date("2024-11-25T16:00:00Z"),
    local: "Florianópolis, SC",
    descricao:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    imagem:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "76vbo2r3z7-76vbo2r3z7-wdv87sa2mhg-gjt0sgbyfyo",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
      {
        id: "76vbo2r3z7-z0o48ozf0c-wdv87sa2mhg-gjt0sgbyfyo",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: "76vbo2r3z7-z0o48ozf0c-wdv87sa2mhg-gjt0sgbygyo",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Aniversário do João - 30 Anos",
    data: new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    imagem:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "76vbo2r3z7-96u1l5drb6q-wdv87sa2mhg-gjt0sgbyfyo",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 2,
      },
      {
        id: "76vbo2r3z7-96u1l5drb6q-96u1l5drb6q-gjt0sgbyfyo",
        nome: "José Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: "96u1l5drb6q-z0o48ozf0c-wdv87sa2mhg-96u1l5drb6q",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inauguração da Loja Estrela",
    data: new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao:
      "Event de inauguração da nova loja Estrela com brindes e promoções.",
    imagem:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "76vbo2r3z7-96u1l5drb6q-wdv87sa2mhg-96u1l5drb6q",
        nome: "Cláudia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 3,
      },
      {
        id: "96u1l5drb6q-z0o48ozf0c-96u1l5drb6q-gjt0sgbyfyo",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: "76vbo2r3z7-96u1l5drb6q-wdv87sa2mhg-gjt0sgbyfyo",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reunião da Família Oliveira",
    data: new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reunião de fim de ano da família Oliveira.",
    imagem:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "96u1l5drb6q-z0o48ozf0c-wdv87sa2mhg-gjt0sgbyfyo",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 4,
      },
      {
        id: "76vbo2r3z7-z0o48ozf0c-96u1l5drb6q-96u1l5drb6q",
        nome: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
];

export default events;
