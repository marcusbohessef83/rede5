import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo2.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark,
};

export const NavLinks = [
  {
    name: "Incio",
    url: "/",

  },
  {
    name: "Sobre",
    url: "/about",
  },
  {
    name: "Serviços",
    url: "/service",
    subItems: [
      {
        name: "Serviços",
        url: "/service",
      },
      {
        name: "Detalhes Dos Serviços",
        url: "/service-details",
      },
    ],
  },
  {
    name: "Portfolio",
    url: "/portfolio",
    subItems: [
      {
        name: "Portfolio 01",
        url: "/portfolio",
      },
      {
        name: "Detalhes do Portfolio",
        url: "/portfolio-details",
      },
    ],
  },
  
  {
    name: "Contato",
    url: "/contact",
  },
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "BEM-VINDO Á AGÊNCIA REDE5",
    title: "DEVELOPER WEB.",
    button: {
      label: "DESCUBRA MAIS",
      url: "/about",
    },
  },
  {
    image: sliderOne02,
    subTitle: "BEM-VINDO Á AGÊNCIA REDE5",
    title: "CRIAMOS TECNOLOGIAS.",
    button: {
      label: "DESCUBRA MAIS",
      url: "/about",
    },
  },
];

import sliderTwo01 from "@/images/slider/2_1.jpg";
import sliderTwo02 from "@/images/slider/2_2.jpg";
import sliderTwo03 from "@/images/slider/2_3.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "BEM-VINDO Á AGÊNCIA REDE5",
    title: "DIGITAL\nMARKETING\nDEVELOPER.",
    button: {
      label: "DESCUBRA MAIS",
      url: "/about",
    },
  },
  {
    image: sliderTwo02,
    subTitle: "BEM-VINDO Á AGÊNCIA REDE5",
    title: "DIGITAL\nMARKETING\nDEVELOPER.",
    button: {
      label: "DESCUBRA MAIS",
      url: "/about",
    },
  },
  {
    image: sliderTwo03,
    subTitle: "BEM-VINDO Á AGÊNCIA REDE5",
    title: "DIGITAL\nMARKETING\nAGÊNCIA.",
    button: {
      label: "DESCUBRA MAIS",
      url: "/about",
    },
  },
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "BEM-VINDO Á AGÊNCIA REDE5",
    title: "DEVELOPER.",
    button: {
      label: "DESCUBRA MAIS",
      url: "/about",
    },
  },
  {
    image: sliderThree02,
    subTitle: "BEM-VINDO Á AGÊNCIA REDE5",
    title: "DEVELOPER",
    button: {
      label: "DESCUBRA MAIS",
      url: "/about",
    },
  },
];

export const ContactInfosBlock = {
  subTitle: "nosso escritórios",
  title: "escritórios perto de você",
  description:
    "Estamos empenhados em fornecer aos nossos clientes um serviço excepcional, ao mesmo tempo que \ n oferecemos aos nossos funcionários o melhor treinamento.",
};

export const ContactInfosList = [
  {
    title: "austin",
    infos: [
      {
        name: "22 Texas West Hills",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "boston",
    infos: [
      {
        name: "5 Federal Street Boston",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "new york",
    infos: [
      {
        name: "8th Broklyn New York",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "baltimore",
    infos: [
      {
        name: "3 Lombabr 50 baltimore",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
];

export const ContactFormTitle = {
  subTitle: "Entre em contato conosco",
  title: "escreva-nos uma mensagem",
  description:
    "Estamos empenhados em fornecer aos nossos clientes um serviço excepcional enquanto \n      oferecendo aos nossos funcionários o melhor treinamento. ",
};



import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";
import portfolio06 from "@/images/portfolio/6.jpg";

export const PortfolioData = [
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio01,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio02,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio03,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio04,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio05,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio06,
    url: "/portfolio-details",
  },
];

export const PortfolioFilters = [
  { name: "Todos" },
  { name: "Graficos" },
  { name: "Web" },
  { name: "Marketing" },
  { name: "Logos" },
];

import portfolioD01 from "@/images/portfolio/7.jpg";
import portfolioD02 from "@/images/portfolio/8.jpg";

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: "Design Styles",
  text:
    " Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci dolors sit amet elit amet. ",
  client: "Jessica Brown",
  categories: [
    {
      name: "Graphic,",
      url: "#",
    },
    {
      name: "Illustrations,",
      url: "#",
    },
  ],
  date: "8 Nov, 2018",
  socials: [
    {
      name: "Facebook",
      url: "#",
    },
    {
      name: "Twitter",
      url: "#",
    },
    {
      name: "Linkedin",
      url: "#",
    },
  ],
};

export const ServicePostData = [
  {
    title: "Desenvolvimento",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-settings",
    url: "/service-details",
  },
  {
    title: "Infra & Aplicações",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-transfer",
    url: "/service-details",
  },
  {
    title: "SEO",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-pie-chart",
    url: "/service-details",
  },
];

export const ServiceHomeTwoData = {
  subTitle: "bem-vindo à agência Rede 5",
  title: "Projetamos produtos digitais que \n ajudam a expandir os negócios.",
  text:
    "Estamos empenhados em fornecer aos nossos clientes um serviço excepcional, ao mesmo tempo que \n oferecemos aos nossos funcionários o melhor treinamento.",
};

export const ServiceHomeThreeData = {
  subTitle: "Serviços que oferecemos",
  title: "Nossos Serviços",
  text:
    "Estamos empenhados em fornecer aos nossos clientes um serviço excepcional, ao mesmo tempo que \n oferecemos aos nossos funcionários o melhor treinamento.",
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "Projetamos produtos digitais que \n ajudam a expandir os negócios.",
    subTitle: "Serviços que oferecemos",
    text:
      "Estamos empenhados em fornecer aos nossos clientes um serviço excepcional, \n ao mesmo tempo que oferecemos aos nossos funcionários o melhor treinamento.",
  },
  posts: [
    {
      title: "Desenvolvimento Web",
      iconName: "mei-web-design",
      url: "/service-details",
    },
    {
      title: "Infraestrutura & Servidores",
      iconName: "mei-computer-graphic",
      url: "/service-details",
    },
    {
      title: "Integrações & Ecommerces",
      iconName: "mei-development-1",
      url: "/service-details",
    },
    {
      title: "SEO & Marketing",
      iconName: "mei-development",
      url: "/service-details",
    },
    {
      title: "Análises de Dados",
      iconName: "mei-app-development",
      url: "/service-details",
    },
  ],
};

import serviceOne01 from "@/images/home_1/6.jpg";
import serviceOne02 from "@/images/home_1/7.jpg";
import serviceOne03 from "@/images/home_1/8.jpg";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Vamos Criar Algo Novo",
    subTitle: "O que fazemos",
    text:
      "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional ao mesmo tempo em que oferecemos aos nossos funcionários o melhor treinamento.",
  },
  posts: [
    {
      title: "Desenvolvimento Web",
      image: serviceOne01,
      url: "/service-details",
    },
    {
      title: "SEO & Marketing",
      image: serviceOne02,
      url: "/service-details",
    },
    {
      title: "Infraestrutura",
      image: serviceOne03,
      url: "/service-details",
    },
  ],
};

export const FunfactData = [
  {
    title: "Projetos Completos",
    countNumber: 50,
  },
  {
    title: "Nossos Clientes",
    countNumber: 120,
  },
  {
    title: "Coca e Guloseimas",
    countNumber: 626,
  },
  {
    title: "Clientes Felizes",
    countNumber: 120,
  },
];

import trustClient01 from "@/images/home_1/4.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "Temos a confiança de mais de 120 clientes",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita-tion ullamco laboris nisi ut aliquip ex ea commodo.",
  url: "/about",
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel05 from "@/images/client/5.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "eles confiam em nós",
    subTitle: "nossos clientes",
    text:
      "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional ao mesmo tempo em que oferecemos aos nossos funcionários o melhor treinamento.",
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01,
    },
    {
      url: "#",
      image: ClientCarousel02,
    },
    {
      url: "#",
      image: ClientCarousel03,
    },
    {
      url: "#",
      image: ClientCarousel04,
    },
    {
      url: "#",
      image: ClientCarousel05,
    },
  ],
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "construir um site melhor e mais rápido com a agência rede 5",
    subTitle: "Troque uma ideia com a gente!",
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Estamos na ativa desde:",
    number: 2018,
  },
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "pessoas especializadas",
    subTitle: "conheça a equipe",
    text:
      "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional ao mesmo tempo em que oferecemos aos nossos funcionários o melhor treinamento.",
  },
  posts: [
    {
      image: team01,
      name: "Herman Fisher",
      designation: "General Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
    {
      image: team02,
      name: "Charlie Kennedy",
      designation: "Brand Designer",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
  ],
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "Fazer sites incríveis sem tocar no código",
    subTitle: "o único projeto que você precisa",
    text:
      "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purus aliquet.",
  },
  video: {
    image: video01,
    ID: "y2Eqx6ys1hQ",
    title: "Watch Video",
  },
};

export const SubscribeFormData = {
  sectionContent: {
    title: "Inscreva",
    subTitle: "não perca nossas últimas atualizações",
  },
};

import testimonial01 from "@/images/home_1/t1.jpg";
import testimonial02 from "@/images/home_1/t2.jpg";
import testimonial03 from "@/images/home_1/t3.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "nossos depoimentos",
    title: "clientes felizes",
  },
  posts: [
    {
      name: "Cecilia Colon",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Chase Hanson",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Mittie Flores",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
  ],
};

import featureTab01 from "@/images/home_1/c1.jpg";
import featureTab02 from "@/images/home_1/c2.jpg";
import featureTab03 from "@/images/home_1/c3.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "por que nos escolher",
    subTitle: "nossos benefícios",
    text:
      "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional e, ao mesmo tempo, oferecer aos nossos funcionários o melhor treinamento.",
  },
  posts: [
    {
      title: "A mais recente tecnologia",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab01,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "Awesome Support",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab02,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "1 Click demo install",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab03,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
  ],
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "Grandes coisas nos negócios nunca são feitas por uma pessoa.",
  specialText: "Eles são feitos por uma equipe de pessoas.",
  text:
    "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional e, ao mesmo tempo, oferecer aos nossos funcionários o melhor treinamento.",
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "Trabalhos",
    subTitle: "Nossos Trabalhos",
    text:
      "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional e, ao mesmo tempo, oferecer aos nossos funcionários o melhor treinamento.",
  },
};

import video02 from "@/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "Experiência Digital",
    subTitle: "como trabalhamos",
    text:
      "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional e, ao mesmo tempo, oferecer aos nossos funcionários o melhor treinamento.",
  },
  video: {
    title: "Veja!",
    ID: "y2Eqx6ys1hQ",
    image: video02,
  },
};

import aboutTwo01 from "@/images/home_1/2.jpg";
import aboutTwo02 from "@/images/home_1/1.jpg";

export const AboutTwoData = {
  sectionContent: {
    title: "Somos a melhor agência de websites do globo terrestre",
    subTitle: "Seja Bem Vindo a Rede 5",
    text:
      "Estamos comprometidos em oferecer a nossos clientes um serviço excepcional.",
  },
  button: {
    label: "Veja Mais",
    url: "#",
  },
  gallery: [aboutTwo01, aboutTwo02],
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "experiência real",
    subTitle: "nossas principais características",
    text:
      " Estamos comprometidos em oferecer a nossos clientes um serviço excepcional, ao mesmo tempo em que oferecemos aos nossos funcionários o melhor treinamento. ",
  },
  posts: [
    {
      title: "Não são necessárias habilidades de code",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered.",
    },
    {
      title: "Online Documentation",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered.",
    },
    {
      title: "SEO Optimized",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered.",
    },
  ],
  image: {
    text: "Liberdade total de projeto \n para todos.",
    path: featureTwo01,
  },
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
    url: "/portfolio",
  },
  {
    label: "Reqeust a free quote",
    url: "/contact",
  },
];
