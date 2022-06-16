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
      tema: 'Plan de implementación',
      referencia:
        'Tafur Garzón, M. & Nieto, A. (2011). Las Buenas Prácticas Ganaderas en la Producción de Leche. ICA - MADR. ',
      tipo: 'Cartilla',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/2259/44962_60380.pdf',
    },
    {
      tema: 'Plan de implementación',
      referencia:
        'Uribe F., Zuluaga, A. F., Valencia L., Mugueitio, E. & Ochoa L. (2011). Manuel 3. Buenas prácticas ganaderas. Ganadería Colombiana Sostenible.  ',
      tipo: 'Manual',
      link:
        'http://ganaderiacolombianasostenible.co/web/wp-content/uploads/2015/04/3.-Buenas-Practicas-Ganaderas.pdf',
    },
    {
      tema: 'Procedimientos, procesos, registros',
      referencia:
        'Nickerson Stephen, C. (s.f.). Estrategias de Prevención y Control de Mastitis. ',
      tipo: 'Documento',
      link:
        'http://www.aprocal.com.ar/wp-content/uploads/estrategias_prevencion_y_control_mastitis.htm.pdf',
    },
    {
      tema: 'Procedimientos, procesos, registros',
      referencia:
        'Strappini A. C., Gallo, C., Bustamante, H., Werner, M., Sepúlveda, Pilar. & Valenzuela, R. (2018). Manual de Manejo y Bienestar de la Vaca Lechera.',
      tipo: 'Manual',
      link:
        'https://www.prolesur.cl/content/dam/prolesur/documents/2018/Manual_de_manejo_y_bienestar_de_la_vaca_lechera.pdf',
    },
    {
      tema: 'Gestión documental',
      referencia: 'TVAgro. (2016). Implementación de Buenas Prácticas Lecheras',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fn06Uia3JSQ',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Es el estado físico y mental de los animales con relación a las condiciones en las que vive y muere (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Son todas aquellas medidas sanitarias, procedimientos técnicos y normas de manejo que se aplican de forma permanente, con el propósito de prevenir la entrada y salida de agentes infectocontagiosos en la unidad de producción primaria (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'Prácticas recomendadas con el propósito de disminuir riesgos físicos, químicos y biológicos en la producción primaria de alimentos de origen animal que puedan generar riesgo a las personas promoviendo la sanidad, el bienestar animal y la protección del medio ambiente (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Criterios fundamentales',
      significado:
        'Son aquellos criterios directamente vinculados con el cumplimiento de la normatividad oficial en materia sanitaria y de inocuidad en la producción primaria. Es obligatorio el cumplimiento del 100% de estos criterios para lograr la certificación en BPG (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Criterios mayores',
      significado:
        'Son aquellos criterios cuyo cumplimiento están directamente relacionados con las condiciones necesarias para lograr la inocuidad en la producción primaria. Es obligatorio el cumplimiento de mínimo el 80 % de estos criterios para lograr la certificación (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Criterios menores',
      significado:
        'Son aquellos criterios que, si bien no están relacionados directamente con la inocuidad de producción primaria, su cumplimiento contribuye a garantizar la inocuidad. Es obligatorio el cumplimiento de mínimo el 60 % de estos criterios para lograr la certificación (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Enfermedad de control oficial',
      significado:
        'Las enfermedades de control oficial son aquellas que son priorizadas por el ICA debido a su importancia zoonótica o que tienen un impacto económico por ser limitantes para el comercio nacional y/o internacional (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'Es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Leche anormal',
      significado:
        'Corresponde al producto que presenta alteraciones de diferente naturaleza en los componentes y las propiedades físico-químicas de la leche, que desencadenan problemas en la elaboración de derivados o en la calidad de los mismos (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Peligro',
      significado:
        'Agente biológico, químico o físico presente en la leche, productos lácteos comestibles, que puede provocar un efecto adverso para la salud humana (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Predio de producción primaria',
      significado:
        'Granja o finca destinada a la producción de animales en cualquiera de sus etapas de desarrollo (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Delgadillo Pérez, D. (2013). Implementación de las Buenas Prácticas Ganaderas BPG en una finca ubicada en la finca ubicada en la vereda la vereda la Aurora en el municipio de La Calera en el municipio de La Calera.',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1025&context=medicina_veterinaria',
    },
    {
      referencia:
        'Garzón Espitia, P.G. & Ruiz Sánchez, A. (2015). Estudio sobre el conocimiento del manejo de la leche con residuos farmacológicos, en las ganaderías de una vereda del municipio de Ubaté. Universidad la Salle.',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1099&context=medicina_veterinaria',
    },
    {
      referencia:
        'Jones, G. M. (2019). Limpieza y desinfección del equipo de ordeño. DAIREXNET.',
      link:
        'https://dairy-cattle.extension.org/limpieza-y-desinfeccion-del-equipo-de-ordeno/',
    },
    {
      referencia:
        'Kruze, J. (1998). La Rutina de Ordeño y Su Rol en los Programas de Control de Mastitis Bovina. Archivos de medicina veterinaria, 30 (2), 07-16.',
      link: 'https://dx.doi.org/10.4067/S0301-732X1998000200001',
    },
    {
      referencia:
        'Londoño, C., Barrios. D., Bedoya, G. A., Rodríguez, H., Toro, C. A., Silva, M. T., Dávila, M. D, Pemberty, M., Suárez, P. A. & Palacio, L. G. (s.f.). Buenas Prácticas Ganaderas y Gestión Empresarial. Universidad de Antioquia. Facultad de Ciencias Agrarias.',
      link:
        'https://revistas.udea.edu.co/index.php/biogenesis/article/view/325352/20782758',
    },
    {
      referencia:
        'Moreno Melo, V. (2014). Guía para la Implementación de las Buenas Prácticas Ganaderas. Universidad de Cundinamarca.',
      link: 'https://es.calameo.com/read/004535211d3fe462ab1b0',
    },
    {
      referencia:
        'Resolución No. 067449 de 2020 [Instituto Colombiano Agropecuario - ICA] Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de leche. 8 de mayo de 2020.',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/LISTADO-DE-PREDIOS-CERTIFICADOS-EN-BPG/Resolucion-067449-del-08-de-mayo-2020-1.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Tafur Garzón, M. & Nieto, A. (2011). Las Buenas Prácticas Ganaderas en la Producción de Leche. ICA - MADR.',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/2259/44962_60380.pdf',
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
        nombre: 'Jhon Jairo Rodríguez ',
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
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabal',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Roja',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana PINTO',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
      {
        nombre: 'nombre',
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
