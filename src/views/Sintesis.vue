<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo permitió integrar los fundamentos necesarios para interpretar la estructura corporal femenina y relacionarla con el proceso de patronaje. A lo largo de su desarrollo se abordaron la lectura de la configuración corporal, la clasificación y el registro técnico de las medidas, la conversión entre sistemas, el análisis de proporciones y cuadros de tallas, así como criterios asociados con los universos del vestuario y las gamas de mercado. También se reconocieron las características básicas de los textiles, su aprovechamiento y la importancia de las fichas técnicas como instrumentos de organización, control y trazabilidad. En conjunto, estos conocimientos proporcionan una base técnica para tomar decisiones más precisas durante la construcción, transformación y escalado de patrones de ropa interior femenina.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual de estructura corporal femenina y sistema de medidas con seis ejes: cuerpo, medidas, tallas, moda, textiles y fichas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',

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
