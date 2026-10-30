import type { Dictionary } from "./types";

export const es = {
  nav: {
    manifesto: "Manifiesto",
    projects: "Proyectos",
    members: "Socios",
    join: "Unirse",
    faq: "FAQ",
  },
  common: {
    language: "Idioma",
    skip: "Saltar al contenido",
    navLabel: "Principal",
    homeLabel: "artel, inicio",
    themeLight: "Claro",
    themeDark: "Oscuro",
    themeLabel: "Tema oscuro",
  },
  hero: {
    eyebrow: "Artel — comunidad de desarrollo",
    plate: "Lámina I",
    title: "Proyectos propios,",
    titleItalic: "hechos en común.",
    lead: "Somos una comunidad de personas que desarrollan software. Trabajamos por proyectos, compartimos el aprendizaje y las ideas entre iguales. También incubamos nuestros propios proyectos.",
    footLabel: "Comunidad de desarrollo",
    footLink: "Leer el manifiesto",
  },
  manifesto: {
    number: "I",
    kicker: "Manifiesto",
    title: "Lo que sostenemos.",
    notes: [
      "Comunión en la era de la IA.",
      "La creación como medio de emancipación.",
      "Compromiso y equidad.",
    ],
    paragraphs: [
      "La IA ha llegado para quedarse, y más que nunca necesitamos comunidades y equipos que compartan conocimiento y puedan emprender juntos. Artel existe para que un grupo de personas pueda desarrollar software sin perder el criterio por el camino ni la propiedad de lo que construye.",
      "Funcionamos compartiendo nuestros conocimientos y formando equipos para desarrollar nuestros proyectos. Con el objetivo de llegar a crear grandes aplicaciones sólidas e innovadoras y sacarlas al mercado sin perder el control ni la propiedad por el camino.",
      "Artel no es otra incubadora: es una comunidad en la que priorizamos el bienestar de todos nuestros miembros de manera equitativa. Todos los proyectos se comienzan firmando un compromiso con el proyecto y con el reparto equitativo de sus futuros beneficios.",
    ],
    sign: "Los tres pilares.",
    plateCaption: "Lám. I — Estudio de rama.",
  },
  projects: {
    number: "II",
    kicker: "Proyectos",
    title: "Tres proyectos en marcha.",
    intro:
      "Unos nacen dentro y buscan equipo. Otros ya tienen clientes. Todos se pueden contar sin adornos.",
    fig: "Fig.",
    link: "Ver ficha",
    status: {
      incubacion: "En incubación",
      desarrollo: "En desarrollo",
      publico: "Beta privada",
      pausado: "En pausa",
    },
    detail: {
      back: "Volver a proyectos",
      year: "Año",
      status: "Estado",
      stack: "Stack",
      repo: "Repositorio",
      site: "Sitio",
    },
    page: {
      title: "Proyectos.",
      lead: "Los proyectos que artel incuba y mantiene.",
      metaTitle: "Proyectos — artel",
      metaDescription: "Los proyectos que artel incuba y mantiene.",
    },
  },
  panel: {
    number: "III",
    kicker: "Socios",
    title: "Fundadores y trabajadores.",
    paragraphs: [
      "En Artel pensamos que nuestros proyectos fracasan por falta de fondos, multidisciplinariedad o gestión. Al trabajar juntos y compartir herramientas, contactos y conocimientos, superamos estas barreras.",
      "Cada proyecto funciona como una cooperativa: cada socio se compromete a un trabajo y una dedicación, y obtiene una participación del proyecto en la misma medida. Todos los socios del proyecto son iguales.",
    ],
    caption: "Fig. 4 — Reparto de la decisión",
  },
  members: {
    title: "Quiénes somos.",
    intro: "Las personas que forman la comunidad.",
    page: {
      title: "Socios.",
      lead: "Las personas que forman la comunidad.",
      metaTitle: "Socios — artel",
      metaDescription: "Las personas que forman la comunidad artel.",
    },
  },
  join: {
    number: "IV",
    kicker: "Unirse",
    title: "Buscamos compañeros, no candidatos.",
    intro:
      "No hay una plantilla de entrada ni un proceso automático. Hay una conversación y una asamblea que decide.",
    requirements: [
      {
        title: "Presentación",
        body: "Qué puedes aportar a esta comunidad y qué buscas que la comunidad te aporte a ti. Puedes venir de cualquier oficio del sector IT (negocio, UX/UI, diseño, frontend, backend).",
      },
      {
        title: "Valores",
        body: "La comunidad tiene unos valores muy claros sobre cómo gestionar los proyectos y el reparto del trabajo y de los beneficios. No somos una empresa de recursos humanos.",
      },
      {
        title: "Dedicación",
        body: "Sin trabajar no hay nada sobre lo que participar. Entendemos que, cuando arrancamos un proyecto, se establece un tiempo convenido entre todos los socios del proyecto.",
      },
      {
        title: "Comunidad",
        body: "Entendemos que nuestra manera de trabajar no se parece a la de la empresa en la que trabajas ni a la de otros proyectos en los que has participado: la comunidad es el pilar que hace posible Artel.",
      },
    ],
    ctaLabel: "Escríbenos",
    ctaNote:
      "Cuéntanos qué has hecho y qué te gustaría hacer aquí. Siempre te responderemos, aunque sea para decir que no.",
    email: "hola@artel.dev",
    page: {
      title: "Unirse.",
      lead: "Cómo entrar en la comunidad.",
      metaTitle: "Unirse — artel",
      metaDescription: "Cómo entrar en la comunidad artel.",
    },
  },
  faq: {
    number: "V",
    kicker: "Preguntas",
    title: "Lo que suele preguntarse.",
    items: [
      {
        question: "¿Qué significa exactamente entrar en la comunidad?",
        answer:
          "En la comunidad encontrarás otras personas como tú, con ganas de trabajar, de empezar sus propios proyectos y de unirse a los que más les gusten. Estar en la comunidad no implica estar en un proyecto.",
      },
      {
        question: "¿Solo trabajáis en proyectos propios?",
        answer:
          "Sí, la idea de esta comunidad es hacernos con la propiedad de lo que trabajamos y compartirla entre los socios. Si no creamos nuestros propios proyectos, siempre dependeremos del trabajo ajeno.",
      },
      {
        question: "¿Cómo se reparten los beneficios en los proyectos?",
        answer:
          "Cuando se funda un proyecto se establecen unas dedicaciones y a partir de ellas se reparten los beneficios. Entendemos que lo ideal es que todo el mundo dedicase el mismo esfuerzo y obtuviese el mismo beneficio, pero la vida personal de cada uno a veces no lo permite.",
      },
      {
        question: "¿Qué pasa si un proyecto no funciona?",
        answer:
          "Se cierra. Se documenta lo aprendido, se libera lo que se pueda liberar y la pérdida se asume entre los socios. Cerrar a tiempo también es parte del oficio.",
      },
    ],
    page: {
      title: "Preguntas.",
      lead: "Las dudas que más nos llegan.",
      metaTitle: "Preguntas — artel",
      metaDescription: "Preguntas frecuentes sobre la comunidad artel.",
    },
  },
  contact: {
    number: "VI",
    kicker: "Contacto",
    title: "Hablemos.",
    intro: "Para encargos, colaboraciones o cualquier duda sobre la comunidad.",
    emailLabel: "Escríbenos",
    email: "hola@artel.dev",
    note: "Respondemos en dos semanas, aunque sea para decir que no.",
    page: {
      title: "Contacto.",
      lead: "Escríbenos.",
      metaTitle: "Contacto — artel",
      metaDescription: "Contacta con la comunidad artel.",
    },
  },
  footer: {
    tagline: "Comunidad de desarrollo de software.",
    contactLabel: "Contacto",
    documentsLabel: "Documentos",
    documents: ["Estatutos", "Aviso legal", "Privacidad"],
    signature: "artel — comunidad de desarrollo",
  },
  notFound: {
    title: "Página no encontrada.",
    text: "La página que buscas no existe o ha cambiado de sitio.",
    home: "Volver al inicio",
    contact: "Contacto",
    english: "English",
    metaTitle: "Página no encontrada — artel",
    metaDescription: "La página que buscas no existe.",
  },
  meta: {
    home: {
      title: "artel — comunidad de desarrollo",
      description:
        "Artel es una comunidad de desarrollo de software y una incubadora privada de proyectos. Trabajamos por proyectos cooperativos, compartimos la propiedad y decidimos entre iguales.",
    },
  },
} as const satisfies Dictionary;
