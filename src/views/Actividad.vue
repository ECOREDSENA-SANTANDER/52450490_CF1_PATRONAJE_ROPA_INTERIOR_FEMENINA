<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion: '<b>Objetivo:</b> validar la apropiación de conceptos sobre lectura corporal femenina, sistemas de medidas, tallaje, textiles y fichas técnicas aplicadas al patronaje de ropa interior.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [{"id": 1, "texto": "¿Qué función cumple la antropometría en el patronaje de ropa interior femenina?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Clasificar prendas según su ocasión de uso.", "esCorrecta": false}, {"id": "b", "texto": "Medir dimensiones y proporciones corporales.", "esCorrecta": true}, {"id": "c", "texto": "Seleccionar colores de acuerdo con la temporada.", "esCorrecta": false}, {"id": "d", "texto": "Definir acabados decorativos del producto.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 2, "texto": "¿Qué disciplina permite reconocer regiones corporales usadas como referencias de medición?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "La anatomía aplicada al cuerpo.", "esCorrecta": true}, {"id": "b", "texto": "La moda orientada al mercado.", "esCorrecta": false}, {"id": "c", "texto": "La hilatura de fibras textiles.", "esCorrecta": false}, {"id": "d", "texto": "La comunicación visual comercial.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 3, "texto": "¿Qué aspecto analiza la biomecánica dentro de la lectura corporal para patronaje?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El precio final de cada prenda.", "esCorrecta": false}, {"id": "b", "texto": "La textura comercial del material.", "esCorrecta": false}, {"id": "c", "texto": "El movimiento y la relación funcional.", "esCorrecta": true}, {"id": "d", "texto": "La marca usada por el proveedor.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 4, "texto": "¿Qué permite interpretar la morfología en la estructura corporal femenina?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "La conversión exacta entre unidades.", "esCorrecta": false}, {"id": "b", "texto": "La forma, proporción y volúmenes.", "esCorrecta": true}, {"id": "c", "texto": "La ficha de empaque terminado.", "esCorrecta": false}, {"id": "d", "texto": "La secuencia de venta mayorista.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 5, "texto": "¿Qué relación establece la ergonomía en el desarrollo de prendas interiores?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El vínculo entre persona, ajuste y funcionalidad.", "esCorrecta": true}, {"id": "b", "texto": "La elección del canal digital de venta.", "esCorrecta": false}, {"id": "c", "texto": "El orden financiero de una colección.", "esCorrecta": false}, {"id": "d", "texto": "La asignación comercial de descuentos.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 6, "texto": "¿Qué segmentos se relacionan principalmente con prendas interiores superiores?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Cadera, glúteos y miembros inferiores.", "esCorrecta": false}, {"id": "b", "texto": "Tobillo, rodilla y planta del pie.", "esCorrecta": false}, {"id": "c", "texto": "Mano, antebrazo y brazo completo.", "esCorrecta": false}, {"id": "d", "texto": "Hombros, busto, torso y cintura.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 7, "texto": "¿Qué caracteriza una prenda interior femenina de configuración integral?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Relaciona torso, cintura, pelvis y región inferior.", "esCorrecta": true}, {"id": "b", "texto": "Depende únicamente del largo de manga.", "esCorrecta": false}, {"id": "c", "texto": "Elimina la necesidad de medidas verticales.", "esCorrecta": false}, {"id": "d", "texto": "Sustituye el cuadro de tallas técnico.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 8, "texto": "¿Qué tipo de medida registra recorridos verticales entre referencias corporales?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Los contornos corporales perimetrales.", "esCorrecta": false}, {"id": "b", "texto": "Los largos corporales definidos.", "esCorrecta": true}, {"id": "c", "texto": "Los anchos corporales horizontales.", "esCorrecta": false}, {"id": "d", "texto": "Las proporciones comerciales externas.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 9, "texto": "¿Qué tipo de medida expresa una distancia horizontal entre dos referencias?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El contorno de una región.", "esCorrecta": false}, {"id": "b", "texto": "El largo del segmento.", "esCorrecta": false}, {"id": "c", "texto": "El ancho de una zona.", "esCorrecta": true}, {"id": "d", "texto": "La talla del producto.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 10, "texto": "¿Qué tipo de medida registra el recorrido alrededor de una región corporal?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El largo técnico.", "esCorrecta": false}, {"id": "b", "texto": "El ancho parcial.", "esCorrecta": false}, {"id": "c", "texto": "La proporción visual.", "esCorrecta": false}, {"id": "d", "texto": "El contorno corporal.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 11, "texto": "¿Por qué la silueta femenina no sustituye la medición corporal?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Porque solo organiza una lectura general de forma.", "esCorrecta": true}, {"id": "b", "texto": "Porque define todos los largos exactos.", "esCorrecta": false}, {"id": "c", "texto": "Porque reemplaza las referencias anatómicas.", "esCorrecta": false}, {"id": "d", "texto": "Porque determina automáticamente cada talla.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 12, "texto": "¿Qué silueta presenta hombros y caderas próximos con cintura diferenciada?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Silueta triangular.", "esCorrecta": false}, {"id": "b", "texto": "Silueta reloj de arena.", "esCorrecta": true}, {"id": "c", "texto": "Silueta ovalada.", "esCorrecta": false}, {"id": "d", "texto": "Silueta rectangular.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 13, "texto": "¿Qué silueta se reconoce por mayor amplitud de caderas frente a hombros?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Silueta rectangular.", "esCorrecta": false}, {"id": "b", "texto": "Silueta ovalada.", "esCorrecta": false}, {"id": "c", "texto": "Silueta triangular.", "esCorrecta": true}, {"id": "d", "texto": "Silueta triángulo invertido.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 14, "texto": "¿Qué silueta presenta mayor amplitud de hombros frente a la cadera?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Silueta ovalada.", "esCorrecta": false}, {"id": "b", "texto": "Silueta rectangular.", "esCorrecta": false}, {"id": "c", "texto": "Silueta reloj de arena.", "esCorrecta": false}, {"id": "d", "texto": "Silueta triángulo invertido.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 15, "texto": "¿Qué equivalencia exacta se utiliza para convertir pulgadas a centímetros?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Una pulgada equivale a 2,54 centímetros.", "esCorrecta": true}, {"id": "b", "texto": "Una pulgada equivale a 1,27 centímetros.", "esCorrecta": false}, {"id": "c", "texto": "Una pulgada equivale a 3,75 centímetros.", "esCorrecta": false}, {"id": "d", "texto": "Una pulgada equivale a 0,25 centímetros.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 16, "texto": "¿Qué procedimiento convierte centímetros a pulgadas dentro del registro técnico?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Multiplicar el valor por diez.", "esCorrecta": false}, {"id": "b", "texto": "Dividir el valor entre 2,54.", "esCorrecta": true}, {"id": "c", "texto": "Sumar dos unidades completas.", "esCorrecta": false}, {"id": "d", "texto": "Restar el margen de costura.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 17, "texto": "¿Qué debe incluir un registro dimensional técnicamente claro?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Precio, color y temporada.", "esCorrecta": false}, {"id": "b", "texto": "Marca, colección y proveedor.", "esCorrecta": false}, {"id": "c", "texto": "Medida, valor y unidad.", "esCorrecta": true}, {"id": "d", "texto": "Diseño, empaque y etiqueta.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 18, "texto": "¿Qué riesgo se controla al mantener una unidad común en el trazado?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "La mezcla de sistemas de medida.", "esCorrecta": true}, {"id": "b", "texto": "La falta de nombre comercial.", "esCorrecta": false}, {"id": "c", "texto": "La pérdida de tendencia visual.", "esCorrecta": false}, {"id": "d", "texto": "La ausencia de carta cromática.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 19, "texto": "¿Qué función cumple una lectura de control durante la toma de medidas?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Cambiar la denominación de la talla.", "esCorrecta": false}, {"id": "b", "texto": "Confirmar datos con duda o inconsistencia.", "esCorrecta": true}, {"id": "c", "texto": "Reemplazar la ficha técnica vigente.", "esCorrecta": false}, {"id": "d", "texto": "Modificar el universo del vestuario.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 20, "texto": "¿Qué diferencia principal existe entre medida corporal y medida de prenda?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "La corporal se obtiene del cuerpo; la de prenda pertenece al producto.", "esCorrecta": true}, {"id": "b", "texto": "La corporal siempre corresponde al precio; la de prenda al color.", "esCorrecta": false}, {"id": "c", "texto": "La corporal define la marca; la de prenda determina el mercado.", "esCorrecta": false}, {"id": "d", "texto": "La corporal reemplaza el patrón; la de prenda elimina la ficha.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}], 
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion: '<b>Objetivo:</b> validar la apropiación de conceptos sobre lectura corporal femenina, sistemas de medidas, tallaje, textiles y fichas técnicas aplicadas al patronaje de ropa interior.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
