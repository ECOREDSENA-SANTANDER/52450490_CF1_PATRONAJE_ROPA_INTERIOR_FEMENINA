<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Análisis de medidas y cuadro de tallas
      
      .row.justify-content-center.mb-5.bg-color-3(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t3/1.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t3/2.svg')
          p.mb-4 El análisis de medidas constituye una etapa de interpretación y organización de la información corporal. Una vez obtenidos los largos, anchos y contornos, los valores dejan de funcionar como registros aislados y comienzan a relacionarse entre sí para describir dimensiones, proporciones y diferencias entre distintas regiones del cuerpo. Esta lectura permite determinar qué medidas resultan relevantes para una tipología de prenda y cómo deben incorporarse posteriormente al desarrollo del patrón.

          p.mb-0 La organización de los datos adquiere especial importancia cuando el patronaje deja de responder a una única persona y se proyecta hacia un sistema de tallas. Un cuadro de tallas agrupa medidas corporales bajo categorías definidas, de manera que una misma estructura de patronaje pueda desarrollarse y posteriormente graduarse conservando relaciones dimensionales controladas. 
      
      p.mb-5(data-aos='fade-right') Los sistemas de tallaje para vestuario parten de información antropométrica y requieren seleccionar dimensiones capaces de representar las características corporales relevantes para el producto. La investigación especializada también advierte que las diferentes medidas corporales no aumentan necesariamente de forma lineal ni en la misma proporción entre tallas, condición que impide asumir incrementos idénticos para todas las dimensiones. 
      
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 De la medida individual al cuadro de tallas

      p.mb-5(data-aos='fade-right') La información corporal atraviesa distintos niveles de organización antes de incorporarse al patrón. Primero se obtiene la medida sobre una región definida; posteriormente se analiza su relación con otras dimensiones y, cuando se trabaja con producción por tallas, se integra dentro de una estructura que establece correspondencias entre diferentes grupos dimensionales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta de la información corporal al escalado
      
      LineaTiempoE.color-secundario.mb-0(data-aos='fade-right')
        .row.justify-content-center.mb-0(titulo='Paso 1')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/3.svg')
          .col-sm-12.col-lg-10
            h4 Medida corporal individual
            p Registra una dimensión obtenida sobre una persona y una región corporal determinada.
            p.mb-0 #[b Función técnica:] proporciona el dato de partida para interpretar dimensiones y relaciones corporales.

        .row.justify-content-center.mb-0(titulo='Paso 2')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/4.svg')
          .col-sm-12.col-lg-10
            h4 Conjunto de medidas
            p Reúne largos, anchos y contornos correspondientes a diferentes regiones del cuerpo.
            p.mb-0 #[b Función técnica:] permite relacionar dimensiones y reconocer la configuración corporal de manera más completa.

        .row.justify-content-center.mb-0(titulo='Paso 3')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/5.svg')
          .col-sm-12.col-lg-10
            h4 Análisis dimensional
            p Compara los registros y establece correspondencias entre diferentes segmentos corporales.
            p.mb-0 #[b Función técnica:] facilita la selección de las medidas necesarias según la tipología de prenda que se desarrollará.

        .row.justify-content-center.mb-0(titulo='Paso 4')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/6.svg')
          .col-sm-12.col-lg-10
            h4 Cuadro de tallas
            p Organiza medidas corporales dentro de categorías de talla previamente definidas.
            p.mb-0 #[b Función técnica:] establece referencias comunes para el desarrollo y la gradación de patrones.

        .row.justify-content-center.mb-0(titulo='Paso 5')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/7.svg')
          .col-sm-12.col-lg-10
            h4 Patrón base
            p Traduce las medidas seleccionadas en líneas y dimensiones bidimensionales.
            p.mb-0 #[b Función técnica:] proporciona la estructura sobre la cual se desarrollan las piezas correspondientes a una prenda.

        .row.justify-content-center.mb-0(titulo='Paso 6')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/8.svg')
          .col-sm-12.col-lg-10
            h4 Escalado
            p Gradúa las dimensiones del patrón para obtener las tallas establecidas.
            p.mb-0 #[b Función técnica:] permite desarrollar diferentes tallas conservando los criterios dimensionales definidos.


      
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Cuadro de tallas
      
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/9.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-4 Un cuadro de tallas no representa una colección arbitraria de números. Su construcción requiere organizar dimensiones corporales de forma sistemática y establecer cuáles de ellas tienen mayor capacidad para identificar una talla o complementar su descripción. ISO 8559-2:2025 diferencia dimensiones primarias y secundarias para establecer sistemas de designación de tallas basados en medidas del cuerpo. La misma norma señala expresamente que la designación de talla se fundamenta en dimensiones corporales y no en las dimensiones de la prenda terminada. 
          p.mb-0 La dimensión primaria funciona como referencia principal para identificar la talla de una determinada categoría de prenda. Las dimensiones secundarias complementan esa información cuando una sola medida no resulta suficiente para representar las características corporales relacionadas con el producto. La selección de unas u otras depende del tipo de prenda y del sistema de tallaje adoptado. 
      
      p.mb-5(data-aos='fade-right') Para organizar un cuadro de tallas intervienen diferentes elementos que permiten identificar, ordenar y dar trazabilidad a la información dimensional.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de un cuadro de tallas
      
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Código o denominación de talla")
          .col-sm-12.col-lg-5
            p Identifica cada categoría incluida dentro del sistema de tallaje.
            p.mb-0 #[b Función:] permite distinguir los grupos dimensionales establecidos para el producto.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/10.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Dimensión primaria")
          .col-sm-12.col-lg-5
            p Corresponde a la medida corporal utilizada como referencia principal para la designación de talla.
            p.mb-0 #[b Función:] organiza la secuencia principal del sistema de tallas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/11.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Dimensiones secundarias")
          .col-sm-12.col-lg-5
            p Incorporan otras medidas corporales necesarias para complementar la caracterización dimensional.
            p.mb-0 #[b Función:] permiten representar relaciones que no pueden definirse mediante una sola medida.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/12.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Secuencia de tallas")
          .col-sm-12.col-lg-5
            p Ordena las categorías dimensionales que forman parte del sistema.
            p.mb-0 #[b Función:] facilita la relación entre las distintas tallas utilizadas durante el patronaje y el escalado.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/13.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Unidad de medida")
          .col-sm-12.col-lg-5
            p Define el sistema bajo el cual se expresan los valores registrados.
            p.mb-0 #[b Función:] mantiene coherencia entre cuadro de tallas, documentación técnica y desarrollo del patrón.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/14.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Fuente antropométrica")
          .col-sm-12.col-lg-5
            p Identifica el origen de los datos utilizados para construir o adoptar el sistema.
            p.mb-0 #[b Función:] permite establecer la procedencia y trazabilidad de las medidas utilizadas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/15.png')

      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre medidas en ropa interior femenina
      
      p.mb-5(data-aos='fade-right') La proximidad de la ropa interior con el cuerpo hace necesario distinguir las regiones corporales que intervienen en cada tipología. La elección de las dimensiones utilizadas durante el patronaje debe responder al tipo de producto y a una fuente antropométrica validada.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Regiones corporales y patronaje de ropa interior
      
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/16.svg')
            h3.text-center Región superior del torso
            p.text-center #[b Información dimensional:] contornos, anchos y dimensiones verticales correspondientes al busto y al torso.
            p.text-center.mb-0 #[b Relación con el patronaje:] proporciona referencias para organizar patrones de prendas interiores superiores.

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/17.svg')
            h3.text-center Región de transición
            p.text-center #[b Información dimensional:] medidas relacionadas con cintura y recorridos verticales del torso.
            p.text-center.mb-0 #[b Relación con el patronaje:] permite establecer continuidad entre zonas superiores e inferiores cuando la tipología lo requiere.

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/18.svg')
            h3.text-center Región inferior
            p.text-center #[b Información dimensional:] contornos y dimensiones correspondientes a pelvis, cadera y región superior de los miembros inferiores.
            p.text-center.mb-0 #[b Relación con el patronaje:] aporta referencias para la construcción de prendas interiores inferiores.

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcus-2
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t3/19.svg')
            h3.text-center Estructura integral
            p.text-center #[b Información dimensional:] combinación de medidas verticales, horizontales y perimetrales de torso y región inferior.
            p.text-center.mb-0 #[b Relación con el patronaje:] permite relacionar ambas zonas dentro de prendas que cubren el cuerpo de manera continua.

      
      
      
      
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Proporción y relación entre medidas
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/20.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') La interpretación corporal no se limita a determinar si una medida es mayor o menor que otra. La proporción expresa la relación existente entre diferentes dimensiones y permite comprender cómo se distribuyen las amplitudes y longitudes dentro de la figura. Dos personas pueden presentar un valor similar en una determinada medida y, al mismo tiempo, mostrar diferencias importantes en otras regiones corporales. Por esta razón, una sola dimensión no describe de manera suficiente la configuración completa del cuerpo.
      p.mb-5(data-aos='fade-right') Para interpretar correctamente la información corporal, es importante diferenciar conceptos que, aunque están relacionados, cumplen funciones distintas dentro del patronaje.
        
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medida, proporción y talla en patronaje

      .bg-fondo-1.pcus-6.pcus-5.mb-5(data-aos='fade-right')
        SlyderA.pcus-4.pcus-7(tipo="b")
          .row.align-items-center.justify-content-center.pcus-4.pcus-3(titulo="Medida corporal")
            .col-sm-12.col-lg-5
              h4 Medida corporal
              p Es el valor cuantitativo correspondiente a una dimensión determinada del cuerpo.
              p.mb-0 #[b Aplicación técnica:] proporciona información específica sobre largos, anchos, alturas o contornos.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/22.png')

          .row.align-items-center.justify-content-center.pcus-4.pcus-3(titulo="Proporción corporal")
            .col-sm-12.col-lg-5
              h4 Proporción corporal
              p Es la relación existente entre dos o más dimensiones o regiones corporales.
              p.mb-0 #[b Aplicación técnica:] permite interpretar cómo se distribuyen las dimensiones dentro de la configuración corporal.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/23.png')

          .row.align-items-center.justify-content-center.pcus-4.pcus-3(titulo="Talla")
            .col-sm-12.col-lg-5
              h4 Talla
              p Es la categoría utilizada para organizar determinadas dimensiones corporales dentro de un sistema definido.
              p.mb-0 #[b Aplicación técnica:] permite establecer referencias comunes para desarrollar y escalar patrones destinados a una población objetivo.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/24.png')

          .row.align-items-center.justify-content-center.pcus-4.pcus-3(titulo="Medida de prenda")
            .col-sm-12.col-lg-5
              h4 Medida de prenda
              p Es la dimensión correspondiente al producto confeccionado y no directamente al cuerpo.
              p.mb-0 #[b Aplicación técnica:] se utiliza para especificar y controlar las dimensiones constructivas del producto terminado.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/25.png')


      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        h4 Los incrementos entre tallas no deben suponerse
        p.mb-0 La construcción de una secuencia de tallas no debe resolverse aumentando todas las medidas mediante un valor idéntico. Las distintas dimensiones corporales pueden presentar patrones de variación diferentes entre grupos de talla; por ello, los incrementos utilizados para desarrollar o escalar un sistema deben proceder de un cuadro de tallas técnicamente definido y no de estimaciones. 
      
      p.mb-3(data-aos='fade-right') Profundice en el análisis de tallas y medidas mediante el siguiente recurso complementario.
      p.mb-5(data-aos='fade-right') Consulte el anexo para ampliar sus conocimientos sobre proporciones, medidas deducidas, construcción y análisis de cuadros de tallas, incrementos entre tallas, rupturas y drop.

      .bg-color-1.mb-0.px-5.py-4.br-1(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img.wcus-2.mx-auto(src='@/assets/curso/temas/t3/21.svg')
          .col-sm-12.col-lg-7
            .titulo-segundo.color-acento-contenido.mb-4
              h3.mb-3 Análisis de tallas y medidas
            p.mb-3 Profundice en el análisis de tallas y medidas mediante el siguiente recurso complementario.
            p.mb-3 Consulte el anexo para ampliar sus conocimientos sobre proporciones, medidas deducidas, construcción y análisis de cuadros de tallas, incrementos entre tallas, rupturas y drop.
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/Anexo_02_Analisis_de_tallas_y_medidas.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false")
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")

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
