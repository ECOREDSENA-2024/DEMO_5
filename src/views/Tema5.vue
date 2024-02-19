<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Protocolo de elaboración prótesis total

    .row
      .col-md-5.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/1.png" data-aos="fade-left")
      .col-md-7(style="place-self:center;")
        .cajon.color-primario.p-5.mt-5(style="background-color:#C3F1F2;")
          p.mb-0(data-aos="fade-up") Los protocolos de elaboración pueden variar dependiendo del tipo de tecnología que posea cada laboratorio dental, bien sea de forma analógica o digital, y que inicia con la interpretación de la orden de trabajo, la obtención de los modelos, la preparación de estos, la elaboración de los plato bases, el montaje de los modelos en un articulador con la información que envió el odontólogo, el posicionamiento de los dientes, la elaboración de la estructura (si es una híbrida), el acrilado y el pulido y brillado de la prótesis. 

    p.mt-5(data-aos="fade-up") A continuación, se presentan los pasos del protocolo de elaboración de la prótesis total:

    SlyderF.mt-5(columnas="col-lg-4 col-md-6")
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/2.png')
        h4.text-center.mt-5(style="color:#12263F;") Toma de impresión anatómica
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/3.png')
        h4.mt-5(style="color:#12263F;") Modelos anatómicos
        p(style="color:#12263F;") Colado de la impresión y elaboración de los modelos anatómicos.
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/4.png')
        h4.text-center.mt-5(style="color:#12263F;") Impresión funcional
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/5.png')
        h4.text-center.mt-5(style="color:#12263F;") Montaje en el articulador
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/6.png')
        h4.text-center.mt-5(style="color:#12263F;") Elección de los dientes
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/7.png')
        h4.mt-5(style="color:#12263F;") Montaje de los dientes
        p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") A:] en la zona de los dientes posteriores.
        p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") B:] en la zona de los dientes anteriores.
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/8.png')
        h4.text-center.mt-5(style="color:#12263F;") Modelado
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/9.png')
        h4.text-center.mt-5(style="color:#12263F;") Revestimiento
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/10.png')
        h4.mt-5(style="color:#12263F;") Rellenado y prensado 
        p.mb-0(style="color:#12263F;") Eliminación de la cera con agua caliente.
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/11.png')
        h4.text-center.mt-5(style="color:#12263F;") Polimerización
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/12.png')
        h4.text-center.mt-5(style="color:#12263F;") Acabado
      .tarjeta.color-acento-botones.p-3(style="background-color:#9CFCFF;border-radius:25px;min-height:420px;")
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema5/13.png')
        h4.text-center.mt-5(style="color:#12263F;") Control final



</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
<style lang="sass">
.cajon.color-primario:before
  background-color: #13C6CC
.slyder-f__btn i
  font-size: 1.3rem
  background-color: #F4F4F5
  padding: 0.5rem 0.7rem
  border-radius: 200px
</style>
