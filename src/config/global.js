export default {
  global: {
    componenteFormativo:
      'Evaluación y monitoreo en la implementación de BPG para bovinos de leche',
    descripcionCurso:
      'Este componente tratará los temas sobre la evaluación de seguimiento y plan de contingencia en el monitoreo de la implementación de las Buenas Prácticas Ganaderas en Bovinos de Leche (BPGBL), profundizando en la trazabilidad y las acciones correctivas sobre la implementación en la unidad productiva lechera.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contingencias',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acciones correctivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodología',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Aplicación y métodos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguimiento y evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos y técnicas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Metodología',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Indicadores de gestión',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Procedimientos e instrumentos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Diagramación y aplicación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Seguimiento y evaluación',
      referencia:
        'Ortegón, E., Pacheco, J. y Prieto, A. (2015). Metodología del marco lógico para la planificación, el seguimiento y la evaluación de proyectos y programas. CEPAL.',
      tipo: 'Manual',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5607/S057518_es.pdf',
    },
    {
      tema: 'Seguimiento y evaluación',
      referencia: 'Mideplan Costa Rica. (2015). Seguimiento y Evaluación ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=d4l7c8saBgo',
    },
  ],
  glosario: [
    {
      termino: 'Aplicar a escala',
      significado:
        'conseguir que un proyecto pase de tratar con un reducido número de beneficiarios a un número más amplio. (CIVICUS, 2001)',
    },
    {
      termino: 'Calidad',
      significado:
        'es el grado en el que un conjunto de características inherentes cumple con unos requisitos. (López, 2014)',
    },
    {
      termino: 'Capacitación',
      significado:
        'es toda actividad realizada en una organización, respondiendo a sus necesidades, que busca mejorar la actitud, conocimiento, habilidades o conductas de su personal. (López, 2014)',
    },
    {
      termino: 'Consumidor final',
      significado:
        'es el último consumidor de un producto alimenticio que no empleará dicho alimento como parte de ninguna operación o actividad mercantil. (López, 2014)',
    },
    {
      termino: 'Evaluación',
      significado:
        'análisis, lo más sistemático y objetivo posible, de un proyecto en curso o ya terminado, de su formulación, ejecución y resultados. El propósito es determinar el cumplimiento de los objetivos y las prestaciones del proyecto (pertinencia, eficiencia, eficacia, impacto y sostenibilidad). (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Indicadores',
      significado:
        'son señales concretas que se pueden medir. Son el reflejo de que algo ha ocurrido. Por ejemplo, un aumento del número de estudiantes aprobados es un indicador de la mejora de la cultura de enseñanza y aprendizaje. El medio de verificación (la prueba) es la lista oficial de aprobados. (CIVICUS, 2001)',
    },
    {
      termino: 'Impacto',
      significado:
        'efecto de un proyecto sobre los beneficiarios directos, así como sobre su entorno más amplio, al interior de un sector o en un área geográfica, en términos de factores técnicos, económicos, socioculturales e institucionales. Evidencia la relación entre objetivos generales y objetivos específicos. (Castulina y Martínez, 2013).',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'Es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Métodos cualitativos',
      significado:
        'pertenecen a la tradición de las ciencias sociales y se basan en la observación de las personas en su mismo territorio, en la interacción con ellas en su propio idioma, posiblemente en sus propios términos. Enfatizan la comprensión de la manera como las personas estudiadas construyen la realidad. La mayoría de estudios cualitativos cuentan con análisis descriptivos más que estadísticos. (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Métodos cuantitativos',
      significado:
        'se apoyan en instrumentos estructurados para recolectar información estandarizada de una muestra cuidadosamente seleccionada de individuos, unidades o eventos. La información es analizada a través de una comparación estadística entre grupos o de un análisis multivariado. (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Monitoreo o seguimiento',
      significado:
        'actividad sistemática y permanente de recolección y análisis de datos para proveer, al equipo de gestión y a las principales partes interesadas, indicaciones sobre el avance y el logro de los objetivos, así como sobre la utilización de los fondos disponibles. Es muy importante para retroalimentar la gestión y la toma de decisiones. (Castulina y Martínez, 2013)',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'es el conjunto de procedimientos preestablecidos y autosuficientes que permiten conocer el histórico, la ubicación y la trayectoria de un producto o lote de productos a lo largo de la cadena de suministros en un momento dado, a través de unas herramientas determinadas. (López, 2014)',
    },
  ],
  referencias: [
    {
      referencia:
        'Alianza Mundial para la Participación Ciudadana [CIVICUS]. (2001). Seguimiento y evaluación.',
      link:
        'https://www.civicus.org/view/media/Seguimiento%20y%20evaluacion.pdf',
    },
    {
      referencia:
        'Castulina, N. y Martínez, C. (2013). Guía para el Seguimiento y Evaluación de Proyectos Sociales. Project Concern International.',
    },
    {
      referencia:
        'Da Silva, D. (2021). ¿Qué son los indicadores de gestión y cómo impactan en la atención al cliente? Blog de Zendesk.',
      link:
        'https://www.zendesk.com.mx/blog/indicadores-gestion/#:~:text=Los%20indicadores%20de%20gesti%C3%B3n%20son,o%20preventivas%20seg%C3%BAn%20el%20caso.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP], Dirección de Inversiones y Finanzas Públicas [DIFP], Grupo Asesor de la Gestión de Programas y Proyectos de Inversión Pública [GAPI], Programa de las Naciones Unidas para el Desarrollo [PNUD] y Proyecto de Modernización de la Administración Financiera del Sector Público [MASFP]. Metodología de Seguimiento de programas y proyectos de inversión. Versión oficial. (2004). Grupo Asesor de la Gestión de Programas y Proyectos de Inversión Pública.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Inversiones%20y%20finanzas%20pblicas/Metodolo_Seguimiento_progr_proys_inv.pdf',
    },
    {
      referencia:
        'Estrategia Internacional para la Reducción de Desastres de las Naciones Unidas. [UNISDR]. (2009). Terminología sobre Reducción del Riesgo de Desastres. Naciones Unidas.',
      link: 'https://www.unisdr.org/files/7817_UNISDRTerminologySpanish.pdf',
    },
    {
      referencia:
        'Keyence. (s. f.). ¿Qué es la trazabilidad? Principios de trazabilidad.',
      link:
        'https://www.keyence.com.mx/ss/products/marking/traceability/basic_about.jsp',
    },
    {
      referencia:
        'Kurmen, R. (s. f.). Formulación y Evaluación de Proyectos. Universidad Manuela Beltrán.',
    },
    {
      referencia:
        'López, M. (2014). Elaboración del sistema de trazabilidad en la planta de producción de la empresa El Horno de Mikaela. Corporación Universitaria Lasallista.',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/1142/1/Elaboracion_sistema_trazabilidad_planta_producci%c3%b3n_El_Horno_de_Mikaela.pdf',
    },
    {
      referencia:
        'Toro Galvis, C. A., Bedoya Henao, G., Rodríguez Espinosa, H., Palacio Baena, L. G. & Silva Pérez, M. L. (2012). Manual para la certificación en buenas prácticas ganaderas en producción de leche. Universidad de Antioquia. Facultad de Ciencias Agrarias.',
      link:
        'https://revistas.udea.edu.co/index.php/biogenesis/article/view/326139/20783422',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Johanna Cruz',
        cargo: 'Experto Temático',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Gloria Lida Álzate Suarez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
