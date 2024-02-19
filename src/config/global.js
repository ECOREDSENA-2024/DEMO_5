export default {
  global: {
    componenteFormativo:
      'Protocolo y tecnologías para elaboración de prótesis total',
    descripcionCurso:
      'En la elaboración de prótesis total, uno de los aspectos más importantes es tener presente el uso de las buenas prácticas en la confección de los dispositivos y, de esta manera, poder cumplir con la prescripción clínica para la fabricación de esta, garantizando así el cumplimiento de las necesidades del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Anatomía y morfología ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fases de diseño de la prótesis',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tecnologías mixtas digital y analógica',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolo de trabajo digital',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Protocolo de elaboración prótesis total',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Diseño y elaboración de prótesis',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Control de calidad ',
        desarrolloContenidos: true,
        subMenu: [],
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
      //{
      //  icono: 'fas fa-download',
      //  titulo: 'Descargar material',
      //  download: 'downloads/material.zip',
      //},
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Álvarez, M. (2017). La enseñanza bimodal en la asignatura "Dentaduras parciales removibles" y su incidencia en el rendimiento estudiantil. Acta odontológica venezolana, 55(2), p. 7-8. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6844827',
    },
    {
      referencia:
        'Esponda, R. (2019). Anatomía dental. Universidad Nacional Autónoma de México [UNAM].',
      link:
        'https://www.academia.edu/9753158/30468426_Anatomia_Dental_Esponda_Vila',
    },
    {
      referencia:
        'Matiz, J. (2014). Temas de rehabilitación oral: acrílicos dentales. 1: Clínica-laboratorio. Ecoe Ediciones. ',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2015/07/Temas-de-rehabilitaci%C3%B3n-oral.-acr%C3%ADlicos-Vista-preliminar-del-libro.pdf',
    },
    {
      referencia:
        'Navas, E. (2018). Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales. Editorial ICB.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/111411',
    },
    {
      referencia:
        'Riojas, M. (2014). Anatomía dental. Editorial El Manual Moderno.',
      link:
        'https://www.academia.edu/36436803/Anatomia_Dental_Riojas_Garza_pdf',
    },
    {
      referencia:
        'Salido, M., Gross, E., Martínez-Rus, F., Berrendero, S. y Pradíes, G. (2020). Protocolo digital para prótesis sobre implantes muco-soportadas e implanto-soportadas en el desdentado total. Periodoncia Clínica. ',
      link:
        'https://www.researchgate.net/publication/347486449_Protocolo_Digital_Protesis_sobre_Implantes_Periodoncia_Clinica  ',
    },
  ],
  glosario: [
    {
      termino: 'Articuladores',
      significado:
        'instrumentos que simulan la relación existente entre los dientes maxilares y los mandibulares y permiten reproducir las posiciones y movimientos mandibulares fuera de la boca y sobre la mesa de trabajo.',
    },
    {
      termino: 'CAD-CAM',
      significado:
        '(Computer-Aided Design-Computer-Aided Manufacturing) programa informático de diseño y fabricación asistido por ordenador.',
    },
    {
      termino: 'Cubetas individuales',
      significado:
        'son instrumentos que se realizan cuando las cubetas estándar no se adaptan bien al paciente para la toma del registro de la boca.',
    },
    {
      termino: 'Fraguado',
      significado: 'endurecimiento del revestimiento.',
    },
    {
      termino: 'Odontología',
      significado:
        'es una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, que incluye los dientes, el periodonto, la articulación temporomandibular, el sistema neuromuscular y todas las estructuras de la cavidad oral, como la lengua, el paladar, la mucosa oral y las glándulas salivales.',
    },
    {
      termino: 'Posición dentaria',
      significado:
        'es la “posición de equilibrio muscular”, donde los dientes se colocan en la posición donde exista un equilibrio.',
    },
    {
      termino: 'Prótesis dental',
      significado:
        'la prótesis dental es un elemento artificial destinado para suplir la ausencia dentaria, restaurando la anatomía de una o varias piezas.',
    },
    {
      termino: 'Pulido',
      significado:
        'procedimiento superficial que consiste en un desgaste por frotación o abrasión para conseguir una prótesis totalmente lisa.',
    },
  ],
  complementario: [
    {
      tema: '3. Tecnologías mixtas digital y analógica',
      referencia:
        'Top Doctors España. (2018). Sistema CAD-CAM ¿Qué es? [Video]. YouTube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1AulPvWpTsU&ab_channel=TopDoctorsEspa%C3%B1a ',
    },
    {
      tema: '3. Tecnologías mixtas digital y analógica',
      referencia:
        'Dentsply Sirona Latam. (2020). CAD/CAM y la odontología actual | Dentistry Web Class [Video]. YouTube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ZI3ZsuFjTWk&ab_channel=DentsplySironaLatam ',
    },
    {
      tema: '6. Diseño y elaboración de prótesis',
      referencia:
        'New Stetic S.A. (2020). Encerado y caracterización de prótesis totales [Video]. YouTube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=FXQbCKgmRME&ab_channel=NewSteticS.A ',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel L. Toro A',
        cargo: 'Experto temático',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional ',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Álix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
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
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
