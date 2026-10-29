import type { Dictionary } from './types';

export const es = {
  nav: {
    manifesto: 'Manifiesto',
    projects: 'Proyectos',
    members: 'Socios',
    join: 'Unirse',
    faq: 'FAQ',
  },
  common: {
    language: 'Idioma',
    skip: 'Saltar al contenido',
    navLabel: 'Principal',
    homeLabel: 'artel, inicio',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    themeLabel: 'Tema oscuro',
  },
  hero: {
    eyebrow: 'Artel — cooperativa de desarrollo',
    plate: 'Lámina I',
    title: 'Software con oficio,',
    titleItalic: 'hecho en común.',
    lead: 'Somos una cooperativa de personas que escriben software. Trabajamos por proyectos, compartimos la propiedad y decidimos entre iguales. También incubamos los nuestros.',
    footLabel: 'Cooperativa de trabajo asociado',
    footLink: 'Leer el manifiesto',
  },
  manifesto: {
    number: 'I',
    kicker: 'Manifiesto',
    title: 'Lo que sostenemos.',
    notes: [
      'Cada socio, un voto.',
      'Las cuentas, dentro de casa.',
      'Decir que no también es oficio.',
    ],
    paragraphs: [
      'No creemos en la empresa como fin. Creemos en el trabajo bien hecho, en equipos pequeños y en decisiones que se pueden explicar. Artel existe para que un grupo de personas pueda desarrollar software sin perder el criterio por el camino ni la propiedad de lo que construye.',
      'Funcionamos como una cooperativa: cada socio tiene un voto, un salario acordado y acceso a las cuentas. Los proyectos se incuban dentro y, cuando maduran, se convierten en iniciativas con vida propia, con su equipo y su financiación. Lo que sale bien se reparte; lo que sale mal se asume entre todos.',
      'No prometemos velocidad ni disrupción. Prometemos método: alcance claro, código legible, documentación honesta y una relación directa con quien encarga el trabajo. Preferimos rechazar un proyecto antes que aceptarlo sin poder cuidarlo.',
    ],
    sign: 'Aprobado en asamblea.',
    plateCaption: 'Lám. I — Estudio de rama.',
  },
  projects: {
    number: 'II',
    kicker: 'Proyectos',
    title: 'Tres proyectos en marcha.',
    intro: 'Unos nacen dentro y buscan equipo. Otros ya tienen clientes. Todos se pueden contar sin adornos.',
    fig: 'Fig.',
    link: 'Ver ficha',
    status: {
      incubacion: 'En incubación',
      desarrollo: 'En desarrollo',
      publico: 'Beta privada',
      pausado: 'En pausa',
    },
    detail: {
      back: 'Volver a proyectos',
      year: 'Año',
      status: 'Estado',
      stack: 'Stack',
      repo: 'Repositorio',
      site: 'Sitio',
    },
    page: {
      title: 'Proyectos.',
      lead: 'Los proyectos que artel incuba y mantiene.',
      metaTitle: 'Proyectos — artel',
      metaDescription: 'Los proyectos que artel incuba y mantiene.',
    },
  },
  panel: {
    number: 'III',
    kicker: 'Socios',
    title: 'La decisión no se delega.',
    paragraphs: [
      'En una cooperativa la propiedad y la dirección van juntas. Cada socio tiene un voto, sea cual sea su antigüedad o las horas que haya puesto. Los salarios se conocen dentro de la casa y las cuentas se presentan en asamblea.',
      'Eso hace las cosas más lentas. También las hace nuestras.',
    ],
    caption: 'Fig. 4 — Reparto de la decisión',
  },
  members: {
    title: 'Quiénes somos.',
    intro: 'Las personas que forman la cooperativa.',
    page: {
      title: 'Socios.',
      lead: 'Las personas que forman la cooperativa.',
      metaTitle: 'Socios — artel',
      metaDescription: 'Las personas que forman la cooperativa artel.',
    },
  },
  join: {
    number: 'IV',
    kicker: 'Unirse',
    title: 'Buscamos socios, no candidatos.',
    intro: 'No hay una plantilla de entrada ni un proceso automático. Hay una conversación, un periodo de prueba y una asamblea que decide.',
    requirements: [
      {
        title: 'Oficio',
        body: 'Escribes software en producción y puedes enseñar lo que has construido. No pedimos un lenguaje concreto; pedimos criterio.',
      },
      {
        title: 'Participación',
        body: 'Quieres decidir sobre la casa, no solo ejecutar encargos. Las asambleas son parte del trabajo, no un trámite.',
      },
      {
        title: 'Dedicación',
        body: 'Puedes dedicar al menos dos días a la semana al proyecto común durante el primer año.',
      },
      {
        title: 'Aportación',
        body: 'Aportas una parte del capital social inicial. La cuantía y los plazos se acuerdan contigo antes de entrar.',
      },
    ],
    ctaLabel: 'Escríbenos',
    ctaNote: 'Cuéntanos qué has hecho y qué te gustaría hacer aquí. Respondemos en dos semanas, aunque sea para decir que no.',
    email: 'hola@artel.dev',
    page: {
      title: 'Unirse.',
      lead: 'Cómo entrar en la cooperativa.',
      metaTitle: 'Unirse — artel',
      metaDescription: 'Cómo entrar en la cooperativa artel.',
    },
  },
  faq: {
    number: 'V',
    kicker: 'Preguntas',
    title: 'Lo que suele preguntarse.',
    items: [
      {
        question: '¿Qué significa exactamente ser socio?',
        answer: 'Ser socio es ser dueño. Cada socio aporta capital social, tiene un voto en la asamblea y participa en el reparto de resultados. No hay una categoría intermedia de colaborador indefinido: o se entra con las mismas reglas o no se entra.',
      },
      {
        question: '¿Solo trabajáis en proyectos propios?',
        answer: 'No. Buena parte del trabajo viene de encargos externos: producto digital, herramientas internas, mantenimiento de sistemas que ya existen. Esa parte sostiene la casa y financia la incubadora.',
      },
      {
        question: '¿Cómo se reparten los beneficios?',
        answer: 'Primero se cubre una reserva acordada en asamblea. Después se reparte el resto entre los socios según el criterio vigente, que se revisa cada año. Las cuentas están abiertas a cualquiera que esté dentro.',
      },
      {
        question: '¿Puedo entrar sin experiencia en cooperativismo?',
        answer: 'Sí. Nadie nace sabiendo leer un balance. Hay un periodo de acompañamiento y formación en lo que haga falta; lo que no se negocia es el criterio técnico y las ganas de participar en las decisiones.',
      },
      {
        question: '¿Qué pasa si un proyecto no funciona?',
        answer: 'Se cierra. Se documenta lo aprendido, se libera lo que se pueda liberar y la pérdida se asume entre la reserva y los socios. Cerrar a tiempo también es parte del oficio.',
      },
    ],
    page: {
      title: 'Preguntas.',
      lead: 'Las dudas que más nos llegan.',
      metaTitle: 'Preguntas — artel',
      metaDescription: 'Preguntas frecuentes sobre la cooperativa artel.',
    },
  },
  contact: {
    number: 'VI',
    kicker: 'Contacto',
    title: 'Hablemos.',
    intro: 'Para encargos, colaboraciones o cualquier duda sobre la cooperativa.',
    emailLabel: 'Escríbenos',
    email: 'hola@artel.dev',
    note: 'Respondemos en dos semanas, aunque sea para decir que no.',
    page: {
      title: 'Contacto.',
      lead: 'Escríbenos.',
      metaTitle: 'Contacto — artel',
      metaDescription: 'Contacta con la cooperativa artel.',
    },
  },
  footer: {
    tagline: 'Cooperativa de desarrollo de software.',
    contactLabel: 'Contacto',
    documentsLabel: 'Documentos',
    documents: ['Estatutos', 'Aviso legal', 'Privacidad'],
    signature: 'artel — cooperativa de desarrollo',
  },
  notFound: {
    title: 'Página no encontrada.',
    text: 'La página que buscas no existe o ha cambiado de sitio.',
    home: 'Volver al inicio',
    contact: 'Contacto',
    english: 'English',
    metaTitle: 'Página no encontrada — artel',
    metaDescription: 'La página que buscas no existe.',
  },
  meta: {
    home: {
      title: 'artel — cooperativa de desarrollo',
      description: 'Artel es una cooperativa de desarrollo de software y una incubadora privada de proyectos. Trabajamos por proyectos, compartimos la propiedad y decidimos entre iguales.',
    },
  },
} as const satisfies Dictionary;
