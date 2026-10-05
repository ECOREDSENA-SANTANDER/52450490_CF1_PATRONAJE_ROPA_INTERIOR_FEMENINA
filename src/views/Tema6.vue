<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Fichas técnicas en patronaje

      .bloque-texto-g.bloque-texto-g--inverso.bg-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La ficha técnica constituye un instrumento de control y comunicación que concentra las especificaciones necesarias para desarrollar una prenda de manera consistente. Su función consiste en mantener correspondencia entre diseño, patronaje, materiales, medidas, procesos constructivos y acabados, evitando interpretaciones diferentes entre las áreas que intervienen durante el desarrollo y la fabricación.
          p.mb-0 La organización de la información debe permitir identificar con precisión cada referencia de producto y reconocer las condiciones técnicas asociadas a su construcción. En ropa interior femenina, esta documentación adquiere especial relevancia por la cantidad de piezas, materiales y componentes que pueden intervenir en una misma prenda, así como por la necesidad de conservar correspondencia entre dimensiones corporales, patrón y características del material.

      p.mb-3(data-aos='fade-right') Una ficha correctamente estructurada facilita la trazabilidad de las decisiones adoptadas durante el desarrollo del producto.
      p.mb-5(data-aos='fade-right') Para cumplir esta función, la ficha técnica reúne diferentes tipos de información que permiten identificar el producto y orientar su desarrollo y fabricación.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos clave de una ficha técnica de prenda
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Identificación del producto")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Contenido:] nombre de la prenda, código, referencia, categoría y colección.
            p #[b Función:] diferencia el producto dentro del sistema documental.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t6/2.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Detalles de diseño")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Contenido:] descripción del estilo y de los elementos constructivos de la prenda.
            p #[b Función:] orienta la interpretación técnica del producto.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t6/3.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Materiales")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Contenido:] tejidos, fornituras, composición y características requeridas.
            p #[b Función:] define los recursos previstos para la fabricación.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t6/4.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Medidas y tallas")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Contenido:] dimensiones organizadas según las tallas o referencias establecidas.
            p #[b Función:] sustenta la construcción, verificación y escalado de patrones.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t6/5.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Instrucciones de confección")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Contenido:] métodos de costura, puntadas, márgenes y operaciones requeridas.
            p #[b Función:] relaciona las piezas del patrón con su proceso de ensamble.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t6/6.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Acabados")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Contenido:] especificaciones de terminación, etiquetado, presentación y empaque.
            p #[b Función:] establece las condiciones finales de la prenda.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t6/7.png')

      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        h4 Control de la información técnica
        p.mb-0 La información registrada en la ficha técnica debe corresponder siempre con la versión vigente del producto. Cuando se modifiquen medidas, materiales, piezas o procesos constructivos, los registros asociados deben actualizarse de manera controlada para mantener la coherencia entre patronaje, corte, confección y control de calidad.




      Separador
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.1 Ficha de patronaje, despiece y escalado
      
        
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/8.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t6/9.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La documentación utilizada durante el patronaje puede organizarse según la etapa técnica que controla. La ficha de patronaje concentra la información necesaria para construir y transformar los patrones; la ficha de despiece identifica las piezas que conforman la prenda; y la ficha de escalado registra los criterios empleados para obtener las tallas derivadas del patrón de referencia.
            p.mb-0 Aunque estos documentos forman parte de una misma secuencia de desarrollo, cada uno cumple una función diferente. El patronaje define la estructura bidimensional de la prenda, el despiece organiza los elementos resultantes de esa construcción y el escalado establece la progresión dimensional necesaria para reproducir el modelo en las tallas previstas.


      p.mb-5(data-aos='fade-right') Para diferenciar la función y el contenido de cada documento, se presentan sus principales características.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fichas técnicas empleadas en patronaje

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/10.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-3.p-4(titulo="Ficha técnica de patronaje")
              p.mb-4 #[b Información principal:] registra el diseño plano acotado y las medidas correspondientes a una o varias tallas.
              p.mb-0 #[b Aplicación:] orienta la construcción de patrones básicos y sus transformaciones.

            .tarjeta.bg-color-3.p-4(titulo="Ficha técnica de despiece")
              p.mb-4 #[b Información principal:] identifica las piezas que conforman la prenda, junto con cantidad, material y características constructivas.
              p.mb-0 #[b Aplicación:] facilita el reconocimiento y control de los componentes durante el corte y la preparación.

            .tarjeta.bg-color-3.p-4(titulo="Ficha técnica de escalado")
              p.mb-4 #[b Información principal:] registra los incrementos y criterios definidos para obtener las tallas derivadas del patrón de referencia.
              p.mb-0 #[b Aplicación:] organiza la gradación manteniendo la correspondencia entre las tallas establecidas.

      p.mb-5(data-aos='fade-right') Para ampliar la comprensión sobre la función de las fichas técnicas y reconocer cómo se articulan durante las diferentes etapas del desarrollo de una prenda, consulte el siguiente recurso audiovisual.


      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')        
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/5YOLIDHLiCw?si=li1BTb9yHZtpe6TE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-0 La documentación técnica permite mantener la continuidad entre las diferentes etapas del desarrollo de la prenda y facilita que la información necesaria para patronaje, despiece y escalado se conserve organizada, actualizada y disponible durante el proceso.

















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
