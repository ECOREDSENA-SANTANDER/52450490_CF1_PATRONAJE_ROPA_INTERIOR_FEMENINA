<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Análisis y clasificación de las medidas
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-4 La construcción de un patrón requiere que la información corporal se exprese mediante valores cuantificables, registrados bajo un sistema de unidades claramente identificado. La exactitud del proceso no depende únicamente de tomar una medida de manera correcta; también exige conservar la unidad utilizada, registrar los valores sin ambigüedades y mantener correspondencia entre la información consignada en tablas, fichas técnicas y trazados. 
          p.mb-0 Para interpretar correctamente estos valores, es necesario reconocer las características de los sistemas de medida utilizados y la forma en que sus unidades se aplican en patronaje.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sistemas de medida aplicados al patronaje
      
      TabsC.color-primario.mb-5(data-aos='fade-right')
        .pcus-2(titulo="Sistema Internacional de Unidades")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/2.png')
            .col-sm-12.col-lg-5
              p El #[b Sistema Internacional de Unidades (SI)] establece el metro (m) como unidad base de longitud. A partir de esta unidad se utilizan múltiplos y submúltiplos decimales; entre ellos, el centímetro (cm) y el milímetro (mm), ampliamente utilizados cuando se requiere expresar dimensiones menores.
              p.mb-0 El Bureau International des Poids et Mesures (BIPM), organismo responsable de mantener el SI, confirma al metro como unidad base de longitud y establece el sistema de prefijos decimales utilizado para expresar sus subdivisiones.

        .pcus-2(titulo="Centímetro en patronaje")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/3.png')
            .col-sm-12.col-lg-5
              p Para el patronaje, el centímetro facilita la escritura y comparación de dimensiones corporales porque permite expresar los registros mediante valores enteros o decimales. Una medida de 72,5 cm, por ejemplo, mantiene una lectura directa dentro del sistema decimal y puede trasladarse a los instrumentos de medición y trazado graduados bajo la misma unidad.
              p.mb-0 La norma #[b ISO 8559-1:2017] utiliza mediciones antropométricas definidas para el desarrollo de prendas y proporciona criterios sobre la toma de medidas corporales destinadas, entre otros propósitos, a la construcción de perfiles de talla y forma. Su alcance confirma la importancia de establecer referencias corporales y procedimientos de medición consistentes en el desarrollo de vestuario.

        .pcus-2(titulo="Sistema inglés")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/4.png')
            .col-sm-12.col-lg-5
              p El denominado #[b sistema inglés] utiliza la pulgada como una de sus unidades de longitud. Su lectura puede presentarse mediante valores enteros, decimales o fracciones de pulgada.
              p.mb-0 La relación entre ambos sistemas está definida de manera exacta: 1 pulgada equivale a 25,4 milímetros, es decir, 2,54 centímetros. Esta equivalencia, adoptada internacionalmente desde 1959 para la pulgada, permite realizar conversiones controladas cuando una ficha, molde o instrumento utiliza una unidad diferente de aquella empleada durante el trazado.

        .pcus-2(titulo="Identificación de la unidad")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/5.png')
            .col-sm-12.col-lg-5
              p La coexistencia de centímetros y pulgadas exige identificar la unidad antes de interpretar cualquier dato dimensional. Un valor numérico aislado carece de precisión documental si no indica el sistema al cual pertenece: registrar #[b "12"] no permite determinar si se trata de 12 cm o 12 pulgadas.
              p.mb-0 La diferencia entre ambos valores es considerable, puesto que 12 pulgadas corresponden exactamente a 30,48 cm. Por ello, las unidades forman parte del dato técnico y deben conservarse junto con el valor registrado.
    
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sistemas de medidas empleados en patronaje

      p.mb-3(data-aos='fade-right') Además de emplear unidades diferentes, ambos sistemas presentan formas distintas de organizar y leer sus subdivisiones.

      p.mb-5(data-aos='fade-right') Las diferencias entre ambos sistemas no se limitan al nombre de la unidad. También modifican la forma en que se leen las graduaciones de los instrumentos y se consignan las dimensiones. Mientras el sistema métrico organiza sus subdivisiones de manera decimal, la pulgada puede dividirse mediante fracciones sucesivas, entre ellas medios, cuartos, octavos y dieciseisavos. La interpretación correcta de estas divisiones resulta necesaria cuando se utilizan reglas, cintas métricas, moldes o documentos expresados en pulgadas.  
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 3.] Equivalencias entre fracciones habituales de pulgada y sistema métrico
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .tabla-a.t-cus.color-acento-botones.mb-0
            table
              thead
                tr
                  th #[b Fracción de pulgada]
                  th #[b Expresión decimal en pulgadas]
                  th #[b Equivalencia exacta en milímetros]
                  th #[b Equivalencia exacta en centímetros]
              tbody
                tr
                  td #[b 1/16 in]
                  td 0,0625 in.
                  td 1,5875 mm.
                  td 0,15875 cm.
                tr
                  td #[b 1/8 in]
                  td 0,125 in.
                  td 3,175 mm.
                  td 0,3175 cm.
                tr
                  td #[b 1/4 in]
                  td 0,25 in.
                  td 6,35 mm.
                  td 0,635 cm.
                tr
                  td #[b 1/2 in]
                  td 0,5 in.
                  td 12,7 mm.
                  td 1,27 cm.
                tr
                  td #[b 3/4 in]
                  td 0,75 in.
                  td 19,05 mm.
                  td 1,905 cm.
                tr
                  td #[b 1 in]
                  td 1,0 in.
                  td 25,4 mm.
                  td 2,54 cm.

        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png')
      
      
      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-0.text-center #[b Nota.] Las equivalencias se calculan a partir de la relación exacta de 1 in = 25,4 mm establecida para la pulgada internacional. 
      
      
      
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Conversión entre sistemas
      
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/7.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') La conversión permite trasladar una dimensión expresada en pulgadas hacia centímetros o realizar la operación inversa sin modificar la magnitud original. La conversión de unidades se entiende como un procedimiento basado en la multiplicación o división por un factor numérico, en el que debe considerarse también el tratamiento de cifras significativas y redondeos cuando estos resulten necesarios. 
      p.mb-5(data-aos='fade-right') Para realizar estas conversiones, se utiliza como referencia la equivalencia exacta entre pulgadas y centímetros.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conversión entre pulgadas y centímetros
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/8.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-3.p-4(titulo="De pulgadas a centímetros")
              p.mb-4 Para convertir pulgadas a centímetros se emplea la equivalencia:
              p.mb-1 Pulgadas × 2,54 = centímetros
              p.mb-1 Por ejemplo:
              p.mb-1 10 in × 2,54 = 25,4 cm[span_0](start_span)[span_0](end_span)

            .tarjeta.bg-color-3.p-4(titulo="De centímetros a pulgadas")
              p.mb-4 Para convertir centímetros a pulgadas se aplica la operación inversa:
              p.mb-1 Centímetros ÷ 2,54 = pulgadas
              p.mb-1 Por ejemplo:
              p.mb-1 25,4 cm ÷ 2,54 = 10 in[span_1](start_span)[span_1](end_span)

      p.mb-3(data-aos='fade-right') La conversión debe efectuarse antes de incorporar el valor al trazado cuando los documentos de origen y los instrumentos de trabajo utilizan sistemas diferentes. De esta manera, se evita alternar unidades dentro de una misma construcción y se conserva la coherencia dimensional del patrón.
      p.mb-5(data-aos='fade-right') Para reforzar la aplicación de estas operaciones, los siguientes ejemplos muestran diferentes valores de origen y su correspondiente conversión.
      
      
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            p.mb-0  #[b Tabla 4.] Ejemplos de conversión entre pulgadas y centímetros
          .tabla-a.color-acento-botones.mb-5(data-aos='fade-right')
            table
              thead
                tr
                  th #[b Valor de origen]
                  th #[b Operación aplicada]
                  th #[b Valor convertido]
              tbody
                tr
                  td #[b 1 in.]
                  td 1 × 2,54.
                  td 2,54 cm.
                tr
                  td #[b 5 in.]
                  td 5 × 2,54.
                  td 12,70 cm.
                tr
                  td #[b 10 in.]
                  td 10 × 2,54.
                  td 25,40 cm.
                tr
                  td #[b 20 in.]
                  td 20 × 2,54.
                  td 50,80 cm.
                tr
                  td #[b 2,54 cm.]
                  td 2,54 ÷ 2,54.
                  td 1 in.
                tr
                  td #[b 25,40 cm.]
                  td 25,40 ÷ 2,54.
                  td 10 in.
                tr
                  td #[b 50,80 cm.]
                  td 50,80 ÷ 2,54.
                  td 20 in.

      
      
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Registro técnico de las medidas
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/9.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/9.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 El registro dimensional debe permitir reconocer de manera inequívoca tres elementos: qué se midió, qué valor se obtuvo y bajo qué unidad se expresó. Esta estructura resulta fundamental cuando la información corporal pasa de la toma directa a una tabla de medidas, una ficha técnica o un procedimiento de trazado.
            p.mb-0 Las unidades deben acompañar los valores siempre que exista posibilidad de confusión. También se requiere mantener un criterio uniforme de escritura dentro del mismo documento. Si una tabla se construye en centímetros, todos los datos correspondientes deben conservar esa unidad; si el documento original emplea pulgadas, debe identificarse esta condición antes de trasladar sus valores a un sistema diferente.
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para el registro y control de unidades en patronaje

      
         
      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Identificación de la unidad")
          .col-sm-12.col-lg-5
            p #[b Aplicación técnica:] cada valor debe asociarse con la unidad utilizada para obtenerlo o expresarlo.
            p.mb-0 #[b Riesgo que se controla:] evita interpretar como equivalentes valores registrados en sistemas diferentes.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/10.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Uniformidad del sistema")
          .col-sm-12.col-lg-5
            p #[b Aplicación técnica:] las medidas utilizadas dentro de un mismo trazado deben mantenerse bajo una unidad común.
            p.mb-0 #[b Riesgo que se controla:] reduce errores derivados de combinar centímetros y pulgadas durante la construcción.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/11.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Verificación de la fuente")
          .col-sm-12.col-lg-5
            p #[b Aplicación técnica:] las tablas, moldes y fichas deben revisarse para determinar el sistema en el que fueron elaborados.
            p.mb-0 #[b Riesgo que se controla:] previene la transferencia incorrecta de datos provenientes de documentación técnica externa.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/12.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Conversión controlada")
          .col-sm-12.col-lg-5
            p #[b Aplicación técnica:] el cambio de unidad debe realizarse mediante el factor de conversión correspondiente.
            p.mb-0 #[b Riesgo que se controla:] conserva la magnitud original de la medida al trasladarla entre sistemas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/13.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Registro del valor convertido")
          .col-sm-12.col-lg-5
            p #[b Aplicación técnica:] la nueva unidad debe quedar identificada después de ejecutar la conversión.
            p.mb-0 #[b Riesgo que se controla:] facilita la trazabilidad del dato utilizado durante el desarrollo del patrón.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/14.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Control del redondeo")
          .col-sm-12.col-lg-5
            p #[b Aplicación técnica:] cuando sea necesario aproximar un resultado, debe mantenerse un criterio uniforme en el documento.
            p.mb-0 #[b Riesgo que se controla:] evita acumulaciones de diferencias dimensionales producidas por aproximaciones inconsistentes.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/15.png')


      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        h4 Control de unidad
        p.mb-3 El número y la unidad constituyen conjuntamente el dato dimensional. Un registro técnico debe permitir distinguir si una medida está expresada en centímetros, milímetros o pulgadas. 
        p.mb-0 Cuando sea necesario trasladar información entre sistemas, la conversión debe efectuarse mediante una equivalencia establecida y el resultado debe quedar identificado con la nueva unidad. 

      .bg-color-1.mb-0.px-5.py-4.br-1(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img.wcus-2.mx-auto(src='@/assets/curso/temas/t2/16.svg')
          .col-sm-12.col-lg-7
            .titulo-segundo.color-acento-contenido.mb-4
              h3.mb-3 Clasificación de las medidas
            p.mb-3 Amplíe sus conocimientos sobre la clasificación y aplicación de las medidas en patronaje mediante el siguiente recurso complementario.
            p.mb-4 Consulte el anexo para profundizar en los sistemas de medida, las conversiones y la clasificación de las medidas corporales utilizadas en patronaje y confección.
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/Anexo_01_Clasificacion_de_las_medidas.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false")
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      
      
      
      
      
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Las medidas
      
      
      .bloque-texto-g.bloque-texto-g.bg-color-4.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/17.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La medición corporal transforma determinadas características físicas del cuerpo en datos cuantificables que pueden registrarse, compararse y posteriormente utilizarse en el desarrollo del patrón. Su valor técnico no reside únicamente en la cifra obtenida, sino en la relación entre el nombre de la medida, los puntos corporales que delimitan su recorrido, la dirección en que se toma y la unidad empleada para registrarla. La ISO 8559-1:2017 reconoce precisamente la necesidad de definir las mediciones antropométricas y sus fundamentos anatómicos para su aplicación en el desarrollo de prendas. 
          p.mb-0 Las medidas corporales se organizan funcionalmente en #[b largos, anchos y contornos], clasificación que facilita comprender la dirección que describe cada registro sobre la figura femenina. 
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación funcional de las medidas corporales
      
      TabsA.color-acento-botones.mb-5(data-aos='fade-right')
        .tarjeta.bg-color-3.p-4(titulo="Largos")
          p Corresponden a recorridos predominantemente verticales entre dos referencias corporales. Permiten determinar distancias entre distintos niveles del cuerpo y establecer relaciones longitudinales necesarias para ordenar el patrón.
          p Su interpretación exige reconocer con claridad el punto inicial y el punto final de cada recorrido, puesto que una modificación en cualquiera de estas referencias altera el valor obtenido.
          p.mb-0 #[b Forma de medición:] recorridos verticales entre dos puntos corporales de referencia.
          p.mb-1 #[b Ejemplos generales:] largos del torso o distancias entre líneas corporales.
          p.mb-1 #[b Información que aporta:] expresan la separación longitudinal entre diferentes niveles del cuerpo.
          p.mb-1 #[b Aplicación en el patrón:] organizan alturas y relaciones verticales dentro de la construcción del patrón.

        .tarjeta.bg-color-3.p-4(titulo="Anchos")
          p Expresan distancias horizontales entre puntos determinados de una región corporal. A diferencia de los contornos, no rodean completamente el cuerpo, sino que registran la amplitud existente entre dos referencias.
          p Su aplicación permite analizar dimensiones parciales de zonas como el torso y relacionarlas posteriormente con las líneas estructurales del patrón.
          p.mb-0 #[b Forma de medición:] distancias horizontales entre dos referencias corporales.
          p.mb-1 #[b Ejemplos generales:] anchos correspondientes a diferentes zonas del torso.
          p.mb-1 #[b Información que aporta:] expresan la amplitud parcial de una región sin recorrer todo su perímetro.
          p.mb-1 #[b Aplicación en el patrón:] definen dimensiones horizontales necesarias para estructurar determinadas zonas del patrón.

        .tarjeta.bg-color-3.p-4(titulo="Contornos")
          p Describen recorridos perimetrales alrededor de una región corporal, como busto, cintura o cadera. El registro perimetral aporta información sobre el volumen corporal y requiere una colocación consistente de la cinta métrica.
          p Como principio general de la medición antropométrica, los protocolos técnicos establecen que una cinta destinada a medir circunferencias debe mantener contacto con el cuerpo sin producir una compresión que modifique la dimensión registrada.
          p.mb-0 #[b Forma de medición:] recorridos perimetrales alrededor de una región corporal.
          p.mb-1 #[b Ejemplos generales:] contornos de busto, cintura o cadera.
          p.mb-1 #[b Información que aporta:] registran dimensiones asociadas con el volumen de una zona corporal.
          p.mb-1 #[b Aplicación en el patrón:] se relacionan con la amplitud general y el ajuste de la prenda alrededor del cuerpo.


      
      p.mb-5(data-aos='fade-right') La clasificación permite comprender que una medición corporal debe interpretarse desde su recorrido y no únicamente desde su valor. Un contorno de cintura, por ejemplo, representa una dimensión perimetral completa, mientras que un ancho correspondiente a esa misma región expresa una distancia parcial. Esta distinción evita trasladar al patrón datos cuya naturaleza dimensional es diferente.
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Figura 4.]  Clasificación de medidas sobre la figura femenina
      .row.justify-content-center.mb-5.bg-color-2.pcus-1(data-aos='fade-right')
        .col-sm-12.col-lg-8
            img.mb-0(src='@/assets/curso/temas/t2/18.svg', alt='Esquema frontal y posterior del cuerpo femenino con líneas de medición que señalan largos, anchos y contornos.')
      
      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        h4 Medida corporal y medida de prenda
        p.mb-0 La medida corporal registra una dimensión obtenida directamente sobre el cuerpo mediante referencias definidas. La dimensión final de una prenda responde posteriormente a decisiones de desarrollo relacionadas con su tipo, posición de uso, corte y características constructivas. La ISO 8559-2:2025 establece que los sistemas de designación de tallas para vestuario se fundamentan en medidas corporales, diferenciándolas de las dimensiones propias de la prenda terminada. 
      
      
      
      
      
      
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Control técnico del registro corporal

      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/19.png')(data-aos='fade-right')
      p.mb-5(data-aos='fade-right') La confiabilidad de una medida depende de que pueda obtenerse nuevamente bajo condiciones equivalentes. El registro antropométrico exige, por ello, controlar la identificación de la medida, la localización de las referencias corporales, la posición del instrumento, la lectura del valor y su correcta consignación. Los protocolos de control antropométrico reconocen precisamente la posición corporal, la lectura de la medición y el registro del dato entre las principales fuentes de error durante este tipo de procedimientos.
      p.mb-5(data-aos='fade-right') Para mantener la precisión del registro, es necesario controlar diferentes aspectos durante la toma de medidas.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Controles técnicos durante la medición corporal

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center(titulo="Denominación de la medida")
          .col-sm-12.col-lg-5
            p La primera condición consiste en identificar con precisión #[b qué medida se requiere]. La denominación debe corresponder con una región y un recorrido definidos, evitando registros genéricos que posteriormente dificulten determinar qué dimensión fue tomada.
            p Una expresión como “cadera” resulta menos precisa que “contorno de cadera” cuando el propósito consiste en identificar el tipo de recorrido efectuado.
            p.mb-0 #[b Condición requerida:] debe identificar con precisión la región corporal y el tipo de recorrido.
            p.mb-1 #[b Error que permite prevenir:] confusión entre dimensiones diferentes que pueden presentar valores similares.
            p.mb-1 #[b Finalidad técnica:] permite reconocer posteriormente qué información corporal representa cada registro.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/20.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Unidad utilizada")
          .col-sm-12.col-lg-5
            p La unidad debe aparecer definida y mantenerse uniforme dentro del registro.
            p.mb-0 #[b Error que permite prevenir:] mezcla de centímetros, milímetros o pulgadas durante el desarrollo del patrón.
            p.mb-1 #[b Finalidad técnica:] conserva la coherencia dimensional de la información utilizada.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/21.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Puntos de referencia")
          .col-sm-12.col-lg-5
            p La ubicación de los #[b puntos anatómicos de referencia] constituye un elemento fundamental. ISO 8559-1:2017 vincula las mediciones destinadas al desarrollo de vestuario con principios anatómicos y antropométricos, de manera que el procedimiento pueda relacionar cada dato con una referencia corporal identificable.
            p Una variación en el punto inicial, en el punto final o en el nivel de un recorrido perimetral modifica la dimensión registrada y reduce su comparabilidad.
            p.mb-0 #[b Condición requerida:] deben corresponder con las referencias establecidas para cada medición.
            p.mb-1 #[b Error que permite prevenir:] variaciones producidas por iniciar o finalizar el recorrido en ubicaciones diferentes.
            p.mb-1 #[b Finalidad técnica:] favorece la repetibilidad de la medición bajo condiciones equivalentes.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/22.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Posición de la cinta")
          .col-sm-12.col-lg-5
            p La #[b cinta métrica flexible] debe seguir la trayectoria definida para la medida. En los contornos, su disposición debe conservar el nivel correspondiente y evitar torsiones o desplazamientos.
            p.mb-0 #[b Error que permite prevenir:] alteración de la distancia o del perímetro registrado.
            p.mb-1 #[b Finalidad técnica:] mantiene correspondencia entre el recorrido corporal y el valor obtenido.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/23.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Contacto en contornos")
          .col-sm-12.col-lg-5
            p La cinta debe mantenerse ajustada sin comprimir la superficie corporal.
            p.mb-0 #[b Error que permite prevenir:] reducción artificial del valor debido a una tensión excesiva del instrumento.
            p.mb-1 #[b Finalidad técnica:] favorece un registro perimetral consistente.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/24.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Lectura del instrumento")
          .col-sm-12.col-lg-5
            p La lectura debe realizarse después de comprobar que el instrumento permanece en la posición requerida y desde una ubicación que permita identificar correctamente su graduación.
            p.mb-0 #[b Error que permite prevenir:] errores de apreciación asociados con la posición frente a la escala.
            p.mb-1 #[b Finalidad técnica:] aumenta la precisión en la consignación del valor.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/25.png')
        
        .row.justify-content-center.mb-0.align-items-center(titulo="Registro inmediato")
          .col-sm-12.col-lg-5
            p La medida debe registrarse inmediatamente con su denominación y unidad. Separar la toma del registro aumenta la posibilidad de intercambio, omisión o transcripción incorrecta entre valores.
            p.mb-0 #[b Finalidad técnica:] mantiene la trazabilidad entre el cuerpo medido, la tabla utilizada y el dato que posteriormente será trasladado al desarrollo del patrón.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/26.png')

        .row.justify-content-center.mb-0.align-items-center(titulo="Lectura de control")
          .col-sm-12.col-lg-5
            p Cuando exista inconsistencia o duda sobre un dato, la medición debe realizarse nuevamente.
            p.mb-0 #[b Error que permite prevenir:] incorporación de valores erróneos al cuadro de medidas o al trazado.
            p.mb-1 #[b Finalidad técnica:] permite confirmar la información antes de utilizarla en patronaje.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/27.png')

      p.mb-5(data-aos='fade-right') Una vez identificados los controles necesarios, el procedimiento puede organizarse en una secuencia que facilite el registro ordenado de cada medida.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Secuencia para registrar una medida corporal

      LineaTiempoE.color-secundario.mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0(titulo='Paso 1')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/28.svg')
          .col-sm-12.col-lg-10
            h4 Identificar la medida
            p.mb-0 Identificar la medida requerida y determinar la región corporal a la cual corresponde.

        .row.justify-content-center.mb-0(titulo='Paso 2')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/29.svg')
          .col-sm-12.col-lg-10
            h4 Confirmar la unidad
            p.mb-0 Confirmar la unidad de registro que se utilizará durante el procedimiento.

        .row.justify-content-center.mb-0(titulo='Paso 3')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/30.svg')
          .col-sm-12.col-lg-10
            h4 Localizar las referencias
            p.mb-0 Localizar los puntos de referencia establecidos para iniciar y finalizar el recorrido.

        .row.justify-content-center.mb-0(titulo='Paso 4')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/31.svg')
          .col-sm-12.col-lg-10
            h4 Disponer la cinta
            p.mb-0 Disponer la cinta métrica según se trate de una medida longitudinal, horizontal o perimetral.

        .row.justify-content-center.mb-0(titulo='Paso 5')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/32.svg')
          .col-sm-12.col-lg-10
            h4 Comprobar la posición
            p.mb-0 Comprobar la posición del instrumento antes de efectuar la lectura.

        .row.justify-content-center.mb-0(titulo='Paso 6')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/33.svg')
          .col-sm-12.col-lg-10
            h4 Leer y registrar
            p.mb-0 Leer y registrar el valor utilizando una denominación precisa y la unidad correspondiente.

        .row.justify-content-center.mb-0(titulo='Paso 7')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/34.svg')
          .col-sm-12.col-lg-10
            h4 Verificar
            p.mb-0 Realizar una nueva comprobación cuando la posición, la lectura o la consistencia del dato generen duda.

      
      p.mb-5(data-aos='fade-right') Los procedimientos de control antropométrico recurren a nuevas lecturas cuando se detectan valores inconsistentes o fuera de los rangos previstos. Esta práctica permite confirmar el dato antes de incorporarlo definitivamente al registro.

      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        h4 Repetibilidad de la medición
        p.mb-0 Una medición técnicamente controlada debe poder repetirse utilizando la misma definición, los mismos puntos de referencia y un procedimiento equivalente. La estandarización de la posición corporal, la lectura y el registro disminuye la variabilidad introducida por quien realiza la medición y facilita que los datos puedan utilizarse posteriormente con mayor consistencia. 
      
      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t2/35.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-acento-contenido.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-4.p-4(
              texto="Pódcast: Antes de trazar, hay que medir bien"
              :audio="require_src('@/assets/curso/temas/audio/podcast.mp3')"
          )
              p.mb-3.px-4 Para reforzar la importancia del control y la verificación durante el registro de medidas corporales, escuche el siguiente recurso sonoro.
              p.mb-0.px-4 En este recurso se presentan situaciones prácticas que permiten reconocer cómo un registro corporal claro, coherente y verificable contribuye a reducir errores durante el patronaje.
      p.mb-3(data-aos='fade-right') A partir de estos criterios de control, el siguiente recurso audiovisual permite reconocer de manera práctica la clasificación y toma de diferentes medidas corporales.
      
      .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')        
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/nrZzZ6GeEjY?si=jrql1gmrpp7ZC5xT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

      p.mb-0(data-aos='fade-right') La aplicación sistemática de estos controles permite obtener registros corporales más consistentes y disponer de información confiable para su posterior organización y análisis. A partir de estos datos es posible avanzar hacia la construcción y lectura de cuadros de tallas.





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
