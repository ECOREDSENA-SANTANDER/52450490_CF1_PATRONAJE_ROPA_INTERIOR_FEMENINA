export default {
  global: {
    Name: 'Estructura corporal femenina y sistema de medidas.',
    Description: 'Este componente aborda la estructura corporal femenina, los tipos de silueta y el sistema de medidas aplicado al patronaje de ropa interior. Incluye toma, deducción y conversión de medidas, elaboración de cuadros de tallas, tipología de prendas interiores e identificación de textiles, de acuerdo con las características corporales y el tipo de prenda.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
    menuPrincipal: {
  "menu": [
    {
      "nombreRuta": "inicio",
      "icono": "fas fa-home",
      "titulo": "Volver al inicio"
    },
    {
      "nombreRuta": "introduccion",
      "icono": "fas fa-info-circle",
      "titulo": "Introducción",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "tema1",
      "numero": "1",
      "titulo": "Estructura del cuerpo",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "1.1",
          "titulo": "Tipos de siluetas femeninas",
          "hash": "t_1_1"
        }
      ]
    },
    {
      "nombreRuta": "tema2",
      "numero": "2",
      "titulo": "Análisis y clasificación de las medidas",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "2.1",
          "titulo": "Conversión entre sistemas",
          "hash": "t_2_1"
        },
        {
          "numero": "2.2",
          "titulo": "Registro técnico de las medidas",
          "hash": "t_2_2"
        },
        {
          "numero": "2.3",
          "titulo": "Las medidas",
          "hash": "t_2_3"
        },
        {
          "numero": "2.4",
          "titulo": "Control técnico del registro corporal",
          "hash": "t_2_4"
        }
      ]
    },
    {
      "nombreRuta": "tema3",
      "numero": "3",
      "titulo": "Análisis de medidas y cuadro de tallas",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "3.1",
          "titulo": "Cuadro de tallas",
          "hash": "t_3_1"
        },
        {
          "numero": "3.2",
          "titulo": "Proporción y relación entre medidas",
          "hash": "t_3_2"
        }
      ]
    },
    {
      "nombreRuta": "tema4",
      "numero": "4",
      "titulo": "Moda",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "4.1",
          "titulo": "Universos del vestuario",
          "hash": "t_4_1"
        },
        {
          "numero": "4.2",
          "titulo": "Gamas de mercado",
          "hash": "t_4_2"
        }
      ]
    },
    {
      "nombreRuta": "tema5",
      "numero": "5",
      "titulo": "Textiles",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "5.1",
          "titulo": "Aprovechamiento",
          "hash": "t_5_1"
        }
      ]
    },
    {
      "nombreRuta": "tema6",
      "numero": "6",
      "titulo": "Fichas técnicas en patronaje",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "6.1",
          "titulo": "Ficha de patronaje, despiece y escalado",
          "hash": "t_6_1"
        }
      ]
    }
  ],
  "subMenu": [
    {
      "icono": "fas fa-sitemap",
      "titulo": "Síntesis",
      "nombreRuta": "sintesis",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "actividad",
      "icono": "far fa-question-circle",
      "titulo": "Actividad didáctica",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "glosario",
      "icono": "fas fa-sort-alpha-down",
      "titulo": "Glosario"
    },
    {
      "icono": "fas fa-book",
      "titulo": "Referencias bibliográficas",
      "nombreRuta": "referencias"
    },
    {
      "icono": "fas fa-file-pdf",
      "titulo": "Descargar PDF",
      "download": "downloads/dist.pdf"
    },
    {
      "icono": "fas fa-download",
      "titulo": "Descargar material",
      "download": "downloads/material.zip"
    },
    {
      "icono": "far fa-registered",
      "titulo": "Créditos",
      "nombreRuta": "creditos"
    }
  ]
},
  glosario: [
    {
      termino: 'Anatomía',
      significado: 'disciplina biológica que estudia la estructura, organización y relación funcional de los órganos y sistemas del cuerpo.',
    },
    {
      termino: 'Antropometría',
      significado: 'área del conocimiento dedicada a la medición y análisis de las dimensiones y proporciones corporales.',
    },
    {
      termino: 'Biomecánica',
      significado: 'estudio de los principios mecánicos que explican el movimiento y el comportamiento funcional del sistema musculoesquelético.',
    },
    {
      termino: 'Canon',
      significado: 'modelo de referencia que establece relaciones de proporcionalidad consideradas equilibradas dentro de la figura humana.',
    },
    {
      termino: 'Ergonomía',
      significado: 'disciplina que analiza la interacción entre las personas y los elementos de un sistema para favorecer bienestar, seguridad y funcionalidad.',
    },
    {
      termino: 'Escalado',
      significado: 'proceso técnico mediante el cual se gradúan las tallas a partir de un patrón base manteniendo proporciones estructurales.',
    },
    {
      termino: 'Estructura corporal',
      significado: 'organización y disposición de los segmentos del cuerpo en relación con su función y movimiento.',
    },
    {
      termino: 'Fibra textil',
      significado: 'unidad sólida elemental cuya longitud es mayor que su diámetro y que permite la formación de hilos y tejidos.',
    },
    {
      termino: 'Ficha técnica',
      significado: 'documento que registra información precisa sobre procesos, medidas, materiales y características constructivas de una prenda.',
    },
    {
      termino: 'Hilatura',
      significado: 'proceso mediante el cual las fibras se transforman en hebras continuas aptas para la elaboración de hilos.',
    },
    {
      termino: 'Hilo',
      significado: 'conjunto de fibras continuas o discontinuas que se agrupan y torsionan para su uso en la fabricación de tejidos.',
    },
    {
      termino: 'Patronaje',
      significado: 'proceso técnico que traduce las dimensiones corporales en planos bidimensionales para construir patrones de prendas.',
    },
    {
      termino: 'Proporción',
      significado: 'relación de correspondencia y equilibrio entre las partes que conforman un todo.',
    },
    {
      termino: 'Silueta',
      significado: 'configuración general de la forma corporal determinada por la distribución de volúmenes y proporciones.',
    },
    {
      termino: 'Tejido',
      significado: 'estructura textil obtenida mediante la organización o enlace de hilos o fibras que genera una superficie cohesionada.',
    },
  ],
  referencias: [
    {
      referencia: 'Atasağun, H. G., Okur, A., Psikuta, A., Rossi, R. M., & Annaheim, S. (2018). Determination of the effect of fabric properties on the coupled heat and moisture transport of underwear–shirt fabric combinations. Textile Research Journal, 88(11), 1319–1331.',
    },
    {
      referencia: 'Bureau International des Poids et Mesures. (2026). The International System of Units (SI Brochure) (9.ª ed.).',
    },
    {
      referencia: 'Carufel, R., & Bye, E. (2020). Exploration of the body–garment relationship theory through the analysis of a sheath dress. Fashion and Textiles, 7, Article 22.',
    },
    {
      referencia: 'Devarajan, P., & Istook, C. L. (2004). Validation of female figure identification technique (FFIT) for apparel software [Validación de la técnica de identificación de la figura femenina (FFIT) para software de vestuario]. Journal of Textile and Apparel, Technology and Management, 4(1), 1–23.',
    },
    {
      referencia: 'Domingo, J., Ibáñez, M. V., Simó, A., Durá, E., Ayala, G., & Alemany, S. (2014). Modeling of female human body shapes for apparel design based on cross mean sets. Expert Systems with Applications, 41(14), 6224–6234.',
    },
    {
      referencia: 'International Ergonomics Association. (2010). What is ergonomics (HFE)? [¿Qué es la ergonomía (HFE)?].',
    },
    {
      referencia: 'International Organization for Standardization. (2017). Size designation of clothes—Part 1: Anthropometric definitions for body measurement (ISO Standard No. 8559-1:2017).',
    },
    {
      referencia: 'International Organization for Standardization. (2025). Size designation of clothes—Part 2: Primary and secondary dimension indicators (ISO Standard No. 8559-2:2025).',
    },
    {
      referencia: 'Kawamura, Y. (2005). Fashion-ology: An introduction to fashion studies. Berg.',
    },
    {
      referencia: 'Kawamura, Y. (2023). Fashion-ology: Fashion studies in the postmodern digital era (3.ª ed.). Bloomsbury Visual Arts.',
    },
    {
      referencia: 'National Center for Health Statistics. (2017). National Health and Nutrition Examination Survey (NHANES): Anthropometry procedures manual. Centers for Disease Control and Prevention.',
    },
    {
      referencia: 'Simmons, K. P. (2003). Body shape analysis using three-dimensional body scanning technology [Análisis de la forma corporal mediante tecnología de escaneo corporal tridimensional] [Doctoral dissertation, North Carolina State University]. NC State University Libraries.',
    },
    {
      referencia: 'Thompson, A., & Taylor, B. N. (2008). Guide for the use of the International System of Units (SI) (NIST Special Publication 811). National Institute of Standards and Technology.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
