<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5.align-items-center
      .col-sm-12.col-lg-8
        p.mb-3 La ropa interior femenina mantiene una relación directa con la forma corporal, debido a que se ajusta a diferentes zonas del cuerpo y requiere precisión en la toma y organización de las medidas. Por esta razón, el patronaje parte del reconocimiento de la estructura corporal femenina, sus proporciones y tipos de silueta, así como de procedimientos de medición que permitan obtener información confiable para el desarrollo de las prendas.
        .bg-color-1.p-5
          p.mb-3 El componente formativo “Estructura corporal femenina y sistema de medidas” aborda el reconocimiento de las características del cuerpo femenino y su relación con los sistemas de medidas utilizados en patronaje. Durante su desarrollo se estudiarán la toma, deducción y conversión de medidas, la elaboración de cuadros de tallas y la identificación de diferentes tipos de prendas interiores femeninas, teniendo en cuenta sus características y variaciones. 
          p.mb-0 Además, se reconocerán los textiles y sus criterios de uso, así como aspectos relacionados con el consumo de material textil. De esta manera, el aprendiz contará con una base técnica para comprender la relación entre la estructura corporal, las medidas, las tallas, los textiles y el tipo de prenda, como fundamento para continuar con el proceso de patronaje de ropa interior femenina.

      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
