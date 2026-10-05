<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Moda
      
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')  
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La moda no se limita a la existencia material de prendas ni a la sucesión de tendencias. Su funcionamiento involucra procesos sociales mediante los cuales determinados objetos de vestir adquieren significado, aceptación y formas específicas de uso. Kawamura (2005) distingue precisamente entre vestimenta, entendida como producto material, y moda, concebida como una construcción simbólica producida y legitimada mediante procesos sociales e institucionales. Esta distinción permite comprender que una prenda participa simultáneamente de una dimensión física, relacionada con su construcción, y de una dimensión cultural, vinculada con la manera en que se incorpora a prácticas, hábitos y códigos de vestuario. 
          p.mb-0 La ropa interior femenina forma parte de esa estructura porque responde a condiciones de uso diferenciadas respecto de otras categorías de vestuario. Su ubicación como primera capa y su contacto directo con el cuerpo permiten distinguirla de prendas exteriores, deportivas, ceremoniales, acuáticas o destinadas al descanso. La clasificación incluida en el documento base organiza estas categorías según su ocasión y condición de uso, incorporando el #[i lingeriewear]  como universo correspondiente al vestuario interior. 
      
      
      
      
      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')  
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/2.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/3.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La pertenencia de una prenda a un universo determinado aporta información útil para su desarrollo técnico. La ocasión de uso permite establecer qué relación tendrá el producto con el cuerpo, qué nivel de cobertura requiere y qué características generales deberán considerarse durante el diseño, el patronaje y la selección de materiales.
            p.mb-0 Esta relación resulta especialmente relevante en prendas ajustadas, porque la correspondencia entre cuerpo y vestuario no depende únicamente de una talla: estudios sobre la relación cuerpo-prenda han identificado variaciones de forma corporal incluso entre mujeres agrupadas dentro de una misma talla, con efectos sobre la configuración y el ajuste de los patrones. 

      
      
      
      
      
      
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Universos del vestuario
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')  
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/4.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/5.svg')
              .col-sm-12.col-lg-8.bg-color-1.p-4
                  p.mb-0 Los universos del vestuario permiten organizar las prendas según las condiciones en las que son utilizadas. Esta clasificación relaciona propósito, escenario de uso y tipología de producto, facilitando la diferenciación entre prendas que pueden compartir algunos recursos constructivos, pero responden a funciones distintas. 
            p.mb-0 La ocasión de uso actúa como criterio de clasificación porque vincula la prenda con las actividades y escenarios en los que participa. Un traje destinado a una ceremonia no responde a la misma condición de uso que un uniforme funcional; del mismo modo, una prenda para actividades acuáticas se diferencia de otra destinada al descanso o de aquella concebida como vestuario interior. Esta diferenciación permite situar la ropa interior femenina dentro de una categoría concreta sin confundirla con productos próximos por forma, material o nivel de cobertura.
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')  
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Universos del vestuario según la ocasión de uso
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Formal")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] corresponde a actos protocolarios y encuentros sociales de carácter solemne.
            p.mb-0 #[b Ejemplos:] trajes estructurados, vestidos de noche y conjuntos formales.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/6.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Informal o casual")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] corresponde a actividades cotidianas y situaciones habituales de uso diario.
            p.mb-0 #[b Ejemplos:] camisetas, camisas, pantalones, vestidos ligeros y calzado de uso cotidiano.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/7.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Deportivo o funcional")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] se relaciona con actividad física o labores que requieren condiciones específicas de desempeño.
            p.mb-0 #[b Ejemplos:] conjuntos deportivos, uniformes médicos y prendas de trabajo funcional.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/8.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Oficina o ejecutivo")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] se asocia con entornos laborales, administrativos y escenarios vinculados con actividades de negocios.
            p.mb-0 #[b Ejemplos:] trajes ejecutivos, blusas formales y pantalones de vestir.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/9.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Ceremonia y festivo")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] comprende celebraciones sociales, culturales, religiosas o eventos de carácter especial.
            p.mb-0 #[b Ejemplos:] vestidos largos, trajes formales e indumentaria destinada a celebraciones.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/10.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Fantasía")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] se vincula con producciones escénicas, audiovisuales, representaciones o celebraciones temáticas.
            p.mb-0 #[b Ejemplos:] disfraces, vestuario teatral, trajes de época y prendas de caracterización.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/11.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="<i>Swimwear</i>")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] corresponde a actividades desarrolladas en piscinas, playas y otros espacios acuáticos.
            p.mb-0 #[b Ejemplos:] vestidos de baño, prendas para actividades acuáticas y salidas de baño.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/12.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="<i>Lingeriewear</i>")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] se relaciona con prendas utilizadas como primera capa y en contacto directo con el cuerpo.
            p.mb-0 #[b Ejemplos:] brasieres, pantis, conjuntos de ropa interior y otras prendas interiores femeninas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/13.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="<i>Sleepwear</i>")
          .col-sm-12.col-lg-5
            p.mb-0 #[b Condición de uso:] corresponde a periodos de reposo, descanso o sueño.
            p.mb-0 #[b Ejemplos:] pijamas y prendas destinadas al descanso.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/14.png')

      
      p.mb-5(data-aos='fade-right')   Aunque algunos universos pueden compartir materiales o soluciones constructivas, su clasificación responde a la función y al escenario de uso de la prenda. #[i Swimwear, lingeriewear y sleepwear], por ejemplo, pueden mantener distintos niveles de proximidad con el cuerpo, pero corresponden a condiciones de uso diferentes.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')  
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 #[i Lingeriewear] y relación cuerpo-prenda
      
      
      .row.justify-content-center.mb-5.bg-color-3.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t4/15.png')
        .col-sm-12.col-lg-7.p-4
          p.mb-3 En el patronaje de ropa interior femenina, el análisis del universo #[i lingeriewear] requiere articular las condiciones de uso, el ajuste, el material y la tipología de la prenda.
          p.mb-0 La denominación de talla, por sí sola, no permite representar todas las variaciones de configuración corporal. Carufel y Bye (2020) identificaron diferencias de forma entre mujeres agrupadas en una misma talla y variaciones en las dimensiones de los bloques de patronaje requeridos para su adaptación. 

      p.mb-5(data-aos='fade-right')   El material también interviene en esta relación. Atasağun et al. (2018) determinaron que las propiedades de los tejidos utilizados como ropa interior influyen en procesos relacionados con la transferencia de calor y humedad, como la acumulación de humedad, el enfriamiento y el tiempo de secado. 

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')  
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Claves técnicas del universo #[i lingeriewear]
      

      .row.justify-content-center.mb-5(data-aos='fade-right')  
        .col-sm-12.col-lg-4
          .bg-color-5.p-4.br-1.hcus-3.mb-cus
            h4.text-center Posición de uso
            p #[b Condición:] corresponde a prendas empleadas como primera capa.
            p.mb-0 #[b Relación técnica:] sitúa la prenda en relación inmediata con las dimensiones y la forma corporal.

        .col-sm-12.col-lg-4
          .bg-color-5.p-4.br-1.hcus-3.mb-cus
            h4.text-center Relación corporal
            p #[b Condición:] mantiene contacto directo con diferentes regiones del cuerpo según la tipología.
            p.mb-0 #[b Relación técnica:] exige correspondencia entre las zonas cubiertas y las medidas utilizadas en el patrón.

        .col-sm-12.col-lg-4
          .bg-color-5.p-4.br-1.hcus-3.mb-cus
            h4.text-center Ajuste
            p #[b Condición:] la prenda debe relacionarse con la configuración corporal de la persona usuaria.
            p.mb-0 #[b Relación técnica:] requiere interpretar medidas, proporciones y variaciones de forma sin depender únicamente de la talla nominal.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4
          .bg-color-5.p-4.br-1.hcus-3.mb-cus
            h4.text-center Material
            p #[b Condición:] el textil participa directamente en la interacción entre cuerpo y prenda.
            p.mb-0 #[b Relación técnica:] sus características deben analizarse de acuerdo con la función y las condiciones de uso del producto.

        .col-sm-12.col-lg-4
          .bg-color-5.p-4.br-1.hcus-3.mb-cus
            h4.text-center Tipología
            p #[b Condición:] comprende prendas interiores superiores, inferiores y conjuntos, entre otras configuraciones.
            p.mb-0 #[b Relación técnica:] determina qué regiones corporales y qué relaciones dimensionales intervienen en el patronaje.

      p.mb-5(data-aos='fade-right') A continuación, encontrará ejemplos de prendas del universo #[i lingeriewear] en la línea femenina.  

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.]  Tipologías de prendas inferiores íntimas
            .bg-color-2.pcus-1
              img(src='@/assets/curso/temas/t4/16.png', alt='Siete tipos de ropa interior femenina inferior: string, tanga, slip, bikini, boyshort, brazilian y control briefs.').mb-0
      
      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-12
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 6.] Tipologías de prendas superiores íntimas
            .bg-color-2.pcus-1
              img(src='@/assets/curso/temas/t4/17.svg', alt='Doce tipos de brasieres clasificados por diseño y soporte, como triangle, corset, bralette, strapless, deportivo y lactancia.')
      
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Gamas de mercado
      
      p.mb-3(data-aos='fade-right')   Las gamas de mercado permiten clasificar la oferta de moda según su nivel de posicionamiento, exclusividad, alcance comercial y escala de producción. Esta organización distingue desde propuestas de alta costura hasta productos de amplia distribución, mostrando que una misma tipología de prenda puede responder a diferentes exigencias de diseño, patronaje, materiales y producción.
      p.mb-5(data-aos='fade-right')   Para comprender esta clasificación, la siguiente figura representa de manera jerárquica los diferentes niveles que pueden encontrarse dentro del mercado de la moda.  

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 7.] Representación piramidal de gamas de mercado en moda
            .bg-color-2.pcus-1
              img(src='@/assets/curso/temas/t4/18.svg', alt='Doce tipos de brasieres clasificados por diseño y soporte, como triangle, corset, bralette, strapless, deportivo y lactancia.')
            figcaption Fuente: https://www.lauraerre.com/post/piramide-moda.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')  
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gamas de mercado y sus implicaciones para el patronaje
      

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Alta costura")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Caracterización:] producción exclusiva y elaboración especializada.
            p.mb-0 #[b Implicación para el patronaje:] requiere desarrollos particulares y baja repetición.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/19.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Alta calidad y lujo")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Caracterización:] productos posicionados con materiales y acabados de alta especificación.
            p.mb-0 #[b Implicación para el patronaje:] demanda precisión en diseño, patronaje y acabado.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/20.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Gama media")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Caracterización:] oferta de acceso intermedio con diferenciación de producto.
            p.mb-0 #[b Implicación para el patronaje:] combina estandarización con variaciones de diseño.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/21.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Mercado masivo")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Caracterización:] producción de amplia distribución y alta repetición.
            p.mb-0 #[b Implicación para el patronaje:] requiere tallaje consistente, escalado y eficiencia productiva.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/22.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Gama económica")
          .col-sm-12.col-lg-5
            p.mb-4 #[b Caracterización:] oferta orientada al precio y a la disponibilidad amplia.
            p.mb-0 #[b Implicación para el patronaje:] exige optimización del material y control técnico del producto.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/23.png')


      p.mb-5(data-aos='fade-right')   Para complementar e integrar los contenidos abordados sobre gamas de mercado, universos del vestuario y ocasiones de uso, consulte el siguiente recurso audiovisual.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')        
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/VsTacEciP3k?si=CqaLusiFpQCGX_JI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-3 Este recurso permite relacionar la clasificación del mercado de la moda con los diferentes universos del vestuario y las condiciones de uso de las prendas.
        p.mb-0 La relación entre las gamas de mercado, los universos del vestuario y las ocasiones de uso permite comprender cómo se organiza la oferta de moda y cómo las características del producto responden tanto al mercado como a las necesidades de uso.










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
