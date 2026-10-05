<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Textiles

      .row.justify-content-center.mb-5.bg-color-3(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t5/1.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t5/2.svg')
          p.mb-0 Los materiales textiles, tanto para aplicaciones de vestuario como para usos industriales, se originan a partir de fibras que constituyen la unidad básica de cualquier estructura textil. Estas fibras se transforman mediante procesos técnicos que incluyen la formación de filamentos, el hilado para obtener hilos y, posteriormente, la conformación de tejidos que dan lugar a las telas. La comprensión de esta secuencia permite interpretar cómo las características del material influyen en el comportamiento, la resistencia y la funcionalidad del producto final.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fibras textiles

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/3.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/4.svg')
              .col-sm-12.col-lg-10
                  p.mb-0  Se entienden como la unidad sólida elemental que compone toda estructura textil. Cada fibra corresponde a un filamento que participa en la conformación de los hilos y, en consecuencia, de los tejidos y telas. Desde el punto de vista técnico, se considera fibra a aquel elemento cuya longitud es considerablemente mayor que su diámetro, condición que posibilita su entrelazado, torsión y transformación en estructuras textiles con propiedades específicas de resistencia, flexibilidad y adaptabilidad al uso.
            p.mb-0 Las fibras textiles se organizan de acuerdo con su origen, lo que permite comprender sus propiedades físicas, su comportamiento durante los procesos de transformación y su pertinencia según el uso final. De manera general, se reconocen dos grandes grupos: fibras naturales y fibras químicas, cada uno con subdivisiones según la materia prima de procedencia.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de las fibras textiles

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Fibras naturales")
          .col-sm-12.col-lg-5
            p #[b Animal]
            p.mb-0 • Procedentes de secreciones sedosas: seda y seda silvestre.
            p.mb-4 • Procedentes de folículos pilosos: alpaca, angora, camello, cachemira, conejo, llama, vicuña, yak, entre otras.
            p #[b Vegetal]
            p.mb-0 • Procedentes de la semilla: algodón.
            p.mb-0 • Procedentes del tallo: lino, cáñamo, yute y ramio.
            p.mb-0 • Procedentes de la hoja: esparto y sisal.
            p.mb-4 • Procedentes del fruto: coco.
            p #[b Mineral]
            p.mb-0 • Origen inorgánico: asbesto, fibra de vidrio y fibra de carbono.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/5.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Fibras químicas")
          .col-sm-12.col-lg-5
            p #[b Artificiales]
            p.mb-0 • Base proteica: fibras derivadas de caseína y alginatos.
            p.mb-0 • Base celulósica: rayón, viscosa, cupro y acetato.
            p.mb-4 • Base metálica: filamentos con contenido de oro, plata o cobre.
            p #[b Sintéticas]
            p.mb-0 • Por polimerización: polivinilo y fibras acrílicas.
            p.mb-0 • Por condensación: poliéster y poliamida (nylon).
            p.mb-0 • Por poliadicción: poliuretano y elastómeros.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/6.png')



      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Hilos e hilatura

      p.mb-5(data-aos='fade-right') Después de reconocer las fibras y su clasificación, es necesario comprender cómo estas se transforman en estructuras aptas para la fabricación textil.

      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.bg-color-6.p-5.mb-cus.hcus-5
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/7.svg')          
          h2.text-center Hilo
          p.mb-0 Se entiende como la agrupación de fibras textiles, continuas o discontinuas, que se integran mediante torsión hasta alcanzar una longitud suficiente para su utilización en la fabricación de estructuras textiles. Esta conformación permite obtener un elemento resistente y uniforme, apto para procesos posteriores de tejido.
        
        .col-md.tarjeta.color-secundario.p-5.hcus-5
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/8.svg')          
          h2.text-center Hilatura
          p.mb-0 Corresponde al proceso técnico mediante el cual los filamentos o fibras se transforman y organizan en hebras continuas, preparadas para la construcción de hilos y, posteriormente, de tejidos. Este procedimiento incide de manera directa en propiedades como la resistencia, la regularidad y el desempeño funcional del material en su uso final.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tejidos
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t5/9.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Los tejidos corresponden a estructuras textiles obtenidas a partir de la transformación y organización de fibras o hilos, cuya relación entre longitud, área y espesor les otorga cohesión y resistencia mecánica suficiente para su uso. Estas estructuras permiten generar superficies flexibles con propiedades específicas según el método de construcción empleado.
      p.mb-5(data-aos='fade-right') De manera general, los tejidos se agrupan en tejidos planos y tejidos de punto. Además, se contemplan las estructuras no tejidas, producidas mediante procesos tecnológicos que no requieren el entrelazado tradicional de hilos.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de los tejidos
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/10.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-3.p-4(titulo="Tejido plano")
              p.mb-4 #[b Ligamentos fundamentales:] tafetán, sarga o diagonal y raso.
              p.mb-1 #[b Ligamentos derivados:] esterilla —panamá o canasta—, espina o espiga y sarga interrumpida (#[i broken twill]).
              p.mb-0 #[b Otros:] #[i dobby], #[i jacquard], rizo y afelpados.

            .tarjeta.bg-color-3.p-4(titulo="Tejido de punto")
              p.mb-4 #[b Por trama:] sencillo —#[i jersey], #[i lacoste]— y doble —#[i rib] o resortado, #[i interlock] y piqué.
              p.mb-0 #[b Por urdimbre:] #[i tricot] y #[i raschel].

            .tarjeta.bg-color-3.p-4(titulo="Estructuras no tejidas")
              p Corresponden a estructuras no entrelazadas.
              p.mb-0 #[b Ejemplos:] interlones, guatas y entretelas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caracterización de los textiles
      
      p.mb-3(data-aos='fade-right') La caracterización de los textiles permite analizar su comportamiento a partir de aspectos como la estructura, la fluidez, la expansión y la compresión. Estas características influyen en la manera en que el material se relaciona con el cuerpo y responde durante la construcción y uso de una prenda.
      p.mb-5(data-aos='fade-right') Para ampliar la comprensión sobre el comportamiento de los materiales textiles y reconocer sus principales características, consulte el siguiente recurso audiovisual.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')        
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/mc1kARHDHrs?si=wLrDMiUCxcuMDSJ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-3 En este recurso se profundiza en la estructura, fluidez, expansión y compresión de los textiles, así como en aspectos relacionados con las entretelas y su aplicación.
        p.mb-0 La identificación de estas características permite relacionar el comportamiento del material con las condiciones de uso de la prenda y constituye una base para seleccionar y aprovechar adecuadamente los textiles durante el proceso de patronaje.





      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.1 Aprovechamiento
      
      p.mb-5(data-aos='fade-right') El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total comprada. Este cálculo es crucial para optimizar costos, minimizar desperdicios y mejorar la eficiencia en producción.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Pasos para determinar el aprovechamiento

      p.mb-5(data-aos='fade-right') Para establecer el aprovechamiento del material textil, es necesario organizar las piezas del patrón, identificar el espacio ocupado y comparar el área utilizada con el área total disponible.

      LineaTiempoE.color-secundario.mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0(titulo='Paso 1')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/11.svg')
          .col-sm-12.col-lg-10
            h4 Trazado de las piezas del patrón
            p Ubique las piezas del patrón sobre la tela respetando:
            p • El sentido del hilo, correspondiente a la dirección de la urdimbre.
            p • Los márgenes de costura.
            p.mb-0 • El sentido del diseño o estampado, cuando aplique.

        .row.justify-content-center.mb-0(titulo='Paso 2')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/12.svg')
          .col-sm-12.col-lg-10
            h4 Distribución y encaje de piezas
            p.mb-0 Organice las piezas para que ocupen el menor espacio posible dentro del ancho de la tela, normalmente de 1,40 m o 1,50 m. Se busca una disposición eficiente mediante el encaje de las piezas, siempre que sus características permitan modificar su ubicación.

        .row.justify-content-center.mb-0(titulo='Paso 3')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/13.svg')
          .col-sm-12.col-lg-10
            h4 Medición de la tela utilizada
            p.mb-0 Mida el largo total de tela ocupado una vez distribuidas todas las piezas. Por ejemplo, si las piezas utilizan 0,95 m de 1 m de tela, este valor corresponde al largo realmente empleado.

        .row.justify-content-center.mb-0(titulo='Paso 4')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/14.svg')
          .col-sm-12.col-lg-10
            h4 Cálculo del aprovechamiento
            p.mb-0 Determine la relación entre el área ocupada por los patrones y el área total disponible de tela.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cálculo del aprovechamiento
      
      p.mb-3(data-aos='fade-right') El porcentaje de aprovechamiento se obtiene mediante la siguiente relación:
      p.mb-3(data-aos='fade-right') Aprovechamiento (%) = (Área ocupada por los patrones ÷ Área total de tela) × 100
      p.mb-5(data-aos='fade-right') Para aplicar este cálculo, primero se determina el área total del material y posteriormente se compara con el área efectivamente ocupada por las piezas del patrón.  


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de aplicación
      
      .bg-full-width.bg-color-7.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-0.bg-color-3.p-5.br-1
            .col-sm-12.col-lg-7
              p.mb-4 #[b Ejemplo de aplicación]
              p #[b Tela disponible:]
              p 1 m de largo × 1,50 m de ancho = 1,50 m²
              p #[b Área ocupada por los patrones:]
              p 1,15 m²
              p #[b Cálculo:]
              p (1,15 m² ÷ 1,50 m²) × 100 = 76,67 %
              p.mb-0 Por tanto, el aprovechamiento del material textil en este ejemplo es de #[b 76,67 %].

            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/15.svg')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores que afectan el aprovechamiento
      
      p.mb-5(data-aos='fade-right') El rendimiento del material no depende únicamente del área de las piezas. Diferentes condiciones del patrón, la tela y el proceso de corte pueden modificar las posibilidades de distribución.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores que afectan el aprovechamiento textil


      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Forma y número de piezas")
          .col-sm-12.col-lg-5
            p.mb-0 Las piezas pequeñas pueden encajarse en espacios residuales, pero aumentan la complejidad del trazo.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/16.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Ancho de la tela")
          .col-sm-12.col-lg-5
            p.mb-0 Modifica el número de alternativas disponibles para organizar las piezas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/17.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Dirección del material")
          .col-sm-12.col-lg-5
            p.mb-0 Limita la rotación de las piezas cuando existe sentido del hilo, diseño o comportamiento direccional.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/18.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Técnica de corte")
          .col-sm-12.col-lg-5
            p.mb-0 El corte manual o asistido por #[i software] modifica la precisión y el rendimiento.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/19.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Reutilización de retales")
          .col-sm-12.col-lg-5
            p.mb-0 Permite destinar sobrantes a piezas complementarias cuando la especificación lo autoriza.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/20.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consideraciones adicionales
      
      p.mb-5(data-aos='fade-right') Para complementar el cálculo del aprovechamiento, deben tenerse en cuenta algunas previsiones relacionadas con la compra y utilización del material:

      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-6
          .bg-color-3.p-4.br-1.hcus-4.mb-cus
            p.mb-0 Se recomienda considerar un margen de seguridad del 5 % al 10 % al comprar la tela. 
        .col-sm-12.col-lg-6
          .bg-color-3.p-4.br-1.hcus-4.mb-cus
            p.mb-0 Los retales sobrantes pueden utilizarse en otras prendas o complementos, siempre que sus características y las especificaciones del producto lo permitan.












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
