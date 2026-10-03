<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estructura del cuerpo
      
      .row.justify-content-center.mb-5.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t1/1.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t1/2.svg')
          p.mb-4 Una prenda íntima establece una relación directa con la superficie y la configuración tridimensional del cuerpo. Su ajuste no depende únicamente de los valores obtenidos en los contornos, sino también de la posición relativa de los segmentos corporales, la distribución del volumen, las proporciones y los cambios que se producen durante el movimiento. Estas variables convierten la lectura corporal en una etapa técnica previa al desarrollo del patrón, porque permiten comprender qué información debe conservarse al trasladar una forma tridimensional hacia una representación bidimensional.

          p.mb-0 La antropometría proporciona una base objetiva para esta lectura. La Organización Mundial de la Salud la reconoce como una técnica destinada a valorar el tamaño, las proporciones y la composición corporal, mientras que la norma ISO 8559-1:2017 establece definiciones antropométricas y principios de medición específicamente destinados al desarrollo de prendas y a la construcción de perfiles de talla y forma. 
      
      p.mb-3(data-aos='fade-right') Para el patronaje de ropa interior femenina, la lectura corporal requiere reconocer las regiones que participan en prendas superiores, inferiores e integrales. El busto y el torso intervienen en la interpretación de prendas interiores superiores; la cintura, la pelvis, la cadera, los glúteos y la región superior de las piernas se relacionan con prendas inferiores; las prendas integrales articulan ambos sectores y exigen conservar la correspondencia entre dimensiones verticales y perimetrales. 

      p.mb-5(data-aos='fade-right') La estructura corporal, por tanto, no debe reducirse a una suma de cifras. Una medida solo adquiere valor para el patronaje cuando se identifica qué segmento representa, desde qué referencias se obtiene y cuál será su función dentro de la construcción de la prenda. Esta relación entre cuerpo, medida y patrón permite interpretar con mayor precisión las diferencias de proporción y forma presentes entre personas.
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Figura 1.]  Figura femenina, masculina e infantil con medidas por partes del cuerpo
      .row.justify-content-center.mb-5.bg-color-2.pcus-1(data-aos='fade-right')
        .col-sm-12.col-lg-8
            img(src='@/assets/curso/temas/t1/3.svg', alt='Esquema antropométrico con figuras femenina, masculina e infantil, señalando proporciones y medidas corporales mediante líneas y números.').mb-0

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Disciplinas para la lectura técnica del cuerpo
      
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t1/4.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') El análisis corporal aplicado al patronaje integra conocimientos procedentes de distintas disciplinas. Su función no es equivalente: unas permiten cuantificar dimensiones, otras explican la estructura corporal, algunas analizan el movimiento y otras estudian la relación entre las características humanas y los elementos con los cuales interactúa el cuerpo. 
      p.mb-5(data-aos='fade-right') La diferenciación entre estas disciplinas permite organizar el análisis técnico antes de iniciar la construcción del patrón.
      
      
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Aportes disciplinares a la lectura corporal para patronaje
      .tabla-a.color-acento-botones.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-t2 #[b Disciplina]
              th #[b Objeto de análisis]
              th #[b Pregunta técnica que permite resolver]
              th #[b Aplicación en patronaje de ropa interior femenina]
          tbody
            tr
              td #[b Antropometría]
              td Mide y sistematiza dimensiones y proporciones corporales.
              td ¿Cuáles son las dimensiones que caracterizan la estructura corporal que será tomada como referencia?
              td Sustenta la obtención y organización de largos, anchos, alturas y contornos utilizados en el desarrollo del patrón.
            tr
              td #[b Anatomía]
              td Estudia la estructura, localización y relación funcional de las partes del cuerpo.
              td ¿Qué estructuras corporales sirven como referencia para localizar y comprender una medición?
              td Facilita la identificación de regiones y puntos corporales asociados con las zonas de ajuste de la prenda.
            tr
              td #[b Biomecánica]
              td Analiza el movimiento corporal y las fuerzas que intervienen sobre el sistema musculoesquelético.
              td ¿Cómo modifica el movimiento la relación entre los segmentos corporales durante el uso?
              td Permite relacionar movilidad y comportamiento funcional con las decisiones adoptadas durante el desarrollo del patrón.
            tr
              td #[b Morfología]
              td Describe la forma corporal, sus proporciones y la distribución de los volúmenes.
              td ¿Cómo se configura la forma general del cuerpo y cómo se relacionan sus diferentes volúmenes?
              td Favorece la interpretación de siluetas y de diferencias estructurales que pueden modificar la lectura de las medidas.
            tr
              td #[b Ergonomía]
              td Estudia la interacción entre las personas y los demás elementos de un sistema.
              td ¿Cómo debe relacionarse un producto con las características físicas y funcionales de la persona?
              td Permite considerar ajuste, funcionalidad y relación cuerpo-prenda dentro de las decisiones de patronaje.

      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Profundización en la lectura técnica del cuerpo
      
      p.mb-5(data-aos='fade-right') Además de identificar el objeto de análisis y la aplicación de cada disciplina, algunos criterios permiten comprender con mayor precisión cómo se relacionan estos conocimientos con el desarrollo de vestuario.
      
      
      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para interpretar la estructura corporal
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5
        .row.justify-content-center.mb-0.align-items-center(titulo="Estandarización antropométrica")
          .col-sm-12.col-lg-5
              p.mb-0 #[b ISO 8559-1:2017] señala que las mediciones antropométricas sirven como base para crear perfiles de talla y forma y para apoyar el desarrollo de distintos tipos de prendas. La estandarización de los puntos y procedimientos de medición favorece que los datos puedan organizarse y compararse bajo criterios comunes.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/5.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Referencias anatómicas")
          .col-sm-12.col-lg-5
              p.mb-0 El cuerpo no presenta una superficie geométrica uniforme: cuello, hombros, busto, cintura, pelvis, cadera y extremidades poseen relaciones espaciales diferenciadas. Su identificación facilita interpretar por qué dos registros numéricos similares pueden formar parte de configuraciones corporales distintas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/6.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Relaciones morfológicas")
          .col-sm-12.col-lg-5
              p.mb-0 La investigación antropométrica aplicada al vestuario utiliza relaciones entre medidas y datos tridimensionales para clasificar formas corporales y apoyar el desarrollo de patrones y sistemas de tallaje.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/7.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Integración ergonómica")
          .col-sm-12.col-lg-5
              p.mb-0 La International Ergonomics Association incluye dentro de la ergonomía física las características anatómicas, antropométricas, fisiológicas y biomecánicas de las personas en relación con la actividad física. Esta integración permite comprender que dimensiones, movimiento y características corporales deben considerarse conjuntamente cuando se desarrolla un producto destinado a interactuar con el cuerpo (International Ergonomics Association #[b [IEA], 2010]).
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/8.png')

      
      .cajon.color-acento-botones.p-4.mb-4(data-aos='fade-right')
        p.mb-0 La correspondencia entre la información antropométrica y el patronaje depende de que cada medida conserve una referencia corporal definida y pueda relacionarse con las líneas, recorridos y dimensiones que estructuran el patrón. #[b ISO 8559-1:2017] establece que las mediciones destinadas al desarrollo de vestuario deben sustentarse en principios anatómicos y antropométricos claramente definidos.
      
      
      p.mb-5(data-aos='fade-right') La información obtenida mediante la lectura corporal sigue una secuencia que permite pasar del análisis del cuerpo a la organización de los datos necesarios para el desarrollo del patrón.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 De la lectura corporal al patrón

      LineaTiempoE.color-secundario.mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0(titulo='Paso 1')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/9.svg')
          .col-sm-12.col-lg-10
            h4 Lectura corporal
            p.mb-0 Se analizan segmentos, proporciones, distribución de volúmenes y relaciones entre regiones del cuerpo. Esta etapa permite reconocer la configuración corporal antes de seleccionar y organizar las medidas.

        .row.justify-content-center.mb-0(titulo='Paso 2')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/10.svg')
          .col-sm-12.col-lg-10
            h4 Medición antropométrica
            p.mb-0 Se obtienen largos, alturas, anchos y contornos desde referencias corporales definidas, convirtiendo determinadas características dimensionales del cuerpo en datos cuantificables.

        .row.justify-content-center.mb-0(titulo='Paso 3')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/11.svg')
          .col-sm-12.col-lg-10
            h4 Organización de medidas
            p.mb-0 Se relacionan los valores obtenidos con la zona corporal a la cual corresponden, facilitando la clasificación de la información necesaria para desarrollar el patrón.

        .row.justify-content-center.mb-0(titulo='Paso 4')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/12.svg')
          .col-sm-12.col-lg-10
            h4 Construcción del patrón
            p.mb-0 Las medidas organizadas y las relaciones dimensionales requeridas por la prenda se transforman en una estructura bidimensional destinada al desarrollo de las piezas.

      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 División del cuerpo
      
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t1/13.png')(data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La segmentación corporal constituye una herramienta de organización para el análisis técnico. La división entre cabeza, cuello, tronco, miembros superiores y miembros inferiores permite localizar las regiones anatómicas y establecer relaciones entre ellas. En patronaje, esta organización facilita distinguir qué zonas intervienen en una determinada prenda y qué tipos de medidas resultan pertinentes para su construcción. 
      

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Figura 2.]  División del cuerpo
      .row.justify-content-center.mb-5.bg-color-2.pcus-1(data-aos='fade-right')
        .col-sm-12.col-lg-5
            img.mb-0(src='@/assets/curso/temas/t1/14.svg', alt='Esquema del cuerpo humano dividido en cabeza, tronco, miembros superiores e inferiores, con nombres de sus principales segmentos anatómicos.')


      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0.text-center La división corporal también permite establecer criterios específicos de lectura según la zona en la que se ubique la prenda.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lectura corporal según la zona de la prenda
      

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/15.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-3.p-4(titulo="Zona superior")
              p.mb-0 Se relaciona con prendas interiores superiores y tops de primera capa. Su lectura requiere relacionar amplitudes, contornos y dimensiones verticales correspondientes al torso.

            .tarjeta.bg-color-3.p-4(titulo="Zona inferior")
              p.mb-0 Se relaciona con prendas interiores inferiores. Su lectura exige interpretar la relación entre contornos y dimensiones longitudinales de la región inferior.

            .tarjeta.bg-color-3.p-4(titulo="Configuración integral")
              p.mb-0 Comprende #[i bodies] y prendas que articulan las zonas superior e inferior. Su lectura requiere establecer continuidad entre las dimensiones correspondientes a ambos sectores corporales.



      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0.text-center Una vez reconocidas las zonas corporales, es necesario diferenciar los tipos de información dimensional que intervienen en su análisis.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de información dimensional
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-1
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/16.svg')
            h3.text-center Largos
            p.text-center.mb-0 Son recorridos predominantemente verticales entre referencias corporales. Permiten establecer distancias longitudinales entre diferentes niveles del cuerpo.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-1
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/17.svg')
            h3.text-center Anchos
            p.text-center.mb-0 Son distancias predominantemente horizontales entre referencias corporales. Permiten interpretar la amplitud de determinadas regiones corporales.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-1
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/18.svg')
            h3.text-center Contornos
            p.text-center.mb-0 Son recorridos perimetrales alrededor de una región corporal. Permiten registrar la dimensión tridimensional de zonas como busto, cintura y cadera.
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-1
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/19.svg')
            h3.text-center Proporciones
            p.text-center.mb-0 Son relaciones entre dos o más dimensiones corporales. Permiten interpretar la correspondencia entre segmentos sin considerar cada medida como un dato aislado. 

      p.mb-5(data-aos='fade-right') Para cerrar este apartado, se propone un recurso audiovisual que complementa el reconocimiento de la estructura corporal y sus principales referencias.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')        
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/9UZwjgAYxMY?si=P3FkrA5qPApzcyC_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-0 A partir de esta lectura integral del cuerpo, es posible avanzar hacia el reconocimiento de las diferentes formas en que se distribuyen las proporciones y los volúmenes corporales. Esta relación permite introducir el análisis de las siluetas femeninas como una herramienta complementaria para interpretar la configuración corporal.


      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Tipos de siluetas femeninas
      
      p.mb-5(data-aos='fade-right') La silueta corresponde a una lectura global de la forma corporal construida a partir de la relación entre diferentes dimensiones y volúmenes. En el patronaje, su identificación funciona como complemento de la información antropométrica porque permite reconocer cómo se distribuyen las amplitudes entre hombros, busto, cintura y cadera.

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/20.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-4 La técnica Female Figure Identification Technique for Apparel (FFIT) fue desarrollada por Simmons (2003) en North Carolina State University a partir de datos obtenidos mediante escaneo corporal tridimensional. El sistema utilizó combinaciones de medidas de busto, cintura, cadera, estómago y abdomen para clasificar nueve configuraciones corporales femeninas. Posteriormente, Devarajan e Istook (2004) validaron la metodología mediante análisis discriminante y análisis multivariado de varianza (MANOVA), y determinaron que las relaciones entre medidas empleadas por el sistema permitían diferenciar estadísticamente las formas corporales identificadas. Los resultados señalaron, además, que esta clasificación podía utilizarse como referencia para la construcción de patrones estándar en sistemas CAD y para el desarrollo de sistemas de tallaje en la industria del vestuario.
          p.mb-0 En el patronaje se reconocen principalmente cinco tipologías generales: reloj de arena, triangular, triángulo invertido, rectangular y ovalada. Estas categorías permiten describir relaciones generales entre las diferentes zonas corporales.


      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Figura 3.]  Tipologías generales de silueta femenina
      .row.justify-content-center.mb-5.bg-color-2.pcus-1(data-aos='fade-right')
        .col-sm-12.col-lg-8
            img.mb-0(src='@/assets/curso/temas/t1/21.svg', alt='Ilustración de cinco siluetas femeninas con formas geométricas que representan diferencias entre hombros, cintura y cadera.')


      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0 Las características visuales de cada silueta pueden complementarse con criterios técnicos que orientan su identificación y su lectura dentro del proceso de patronaje.


      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 2.] Lectura comparativa de siluetas femeninas
      .tabla-a.color-acento-botones.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-t2 #[b Silueta]
              th #[b Relación estructural general]
              th #[b Elementos que orientan su identificación]
              th #[b Consideración para la lectura del patrón]
          tbody
            tr
              td #[b Reloj de arena]
              td Los hombros y las caderas presentan amplitudes próximas, mientras que la cintura se diferencia por una menor amplitud.
              td Relación entre región superior, cintura y cadera.
              td Requiere comprobar mediante medición la transición entre torso, cintura y cadera, sin asumir igualdad exacta entre ambos lados o segmentos.
            tr
              td #[b Triangular]
              td La región de caderas presenta mayor amplitud que la zona de hombros.
              td Diferencia entre amplitud superior e inferior y definición de la cintura.
              td La interpretación debe reconocer el predominio dimensional de la región inferior y conservar las medidas reales de cada zona.
            tr
              td #[b Triángulo invertido]
              td La zona de hombros presenta mayor amplitud que la región de caderas.
              td Predominio de la región superior frente a la menor amplitud inferior.
              td El patrón debe diferenciar las dimensiones del torso y de la región inferior sin trasladar automáticamente las proporciones de una zona a otra.
            tr
              td #[b Rectangular]
              td Hombros, cintura y cadera presentan amplitudes relativamente próximas.
              td Menor contraste entre las regiones superior, media e inferior.
              td El análisis requiere registrar las variaciones reales de cada contorno, aunque la lectura general presente mayor continuidad.
            tr
              td #[b Ovalada]
              td La distribución del volumen presenta mayor presencia en la región del torso y el área abdominal.
              td Relación entre torso, cintura y región inferior.
              td La construcción del patrón requiere basarse en las medidas registradas y en la distribución real del volumen, sin ajustar el cuerpo a una proporción predeterminada.


      p.mb-5(data-aos='fade-right') La comparación entre siluetas permite reconocer que dos personas pueden compartir determinadas medidas y, aun así, presentar diferencias en la distribución de sus volúmenes. Los sistemas de clasificación corporal aplicados al vestuario parten precisamente de relaciones entre varias dimensiones y no de una única medida aislada. En la metodología FFIT, la clasificación se fundamentó en razones derivadas de diferentes medidas corporales, lo que confirma la necesidad de interpretar la forma como una relación dimensional.

      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-0 La clasificación de la silueta organiza una lectura general de la forma corporal; la construcción del patrón exige datos antropométricos obtenidos mediante procedimientos definidos. #[b ISO 8559-1:2017] establece las mediciones corporales como base para desarrollar perfiles de talla y forma destinados al vestuario. Por ello, una categoría de silueta puede orientar la interpretación de las proporciones, pero no permite asignar por sí sola largos, anchos, alturas o contornos.




















        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
