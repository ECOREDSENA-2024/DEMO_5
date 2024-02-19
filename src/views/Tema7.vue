<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Control de calidad  

    .row
      .col-md-7.mb-4.mb-md-0(style="place-self:center;")
        .row
          .col-auto(style="place-self:center")
            figure
              img(src="@/assets/curso/tema7/1.svg" data-aos="fade-right")
          .col(style="place-self:center")
            p.mb-0(data-aos="fade-up") El control de calidad se debe realizar siempre para garantizar la entrega del dispositivo solicitado en óptimas condiciones, este proceso está destinado a determinar la calidad de la materia prima de los dispositivos médicos sobre medida bucal.
        .cajon.color-primario.p-5.mt-5(style="background-color:#C3F1F2;")
          p.mb-0(data-aos="fade-up") Los registros de control se deben revisar en:
          ul.lista-ul.mt-4(data-aos="fade-up")
            li(data-aos="fade-up")
              p #[i.fas.fa-circle(style="color:#0273BC;")] #[strong Impresiones y modelos:]&nbsp; burbujas, imperfecciones como rugosidades, fracturas.
            li(data-aos="fade-up")
              p #[i.fas.fa-circle(style="color:#0273BC;")] #[strong El diseño del dispositivo:]&nbsp; sobre extensión del dispositivo médico sobre medida bucal y soportes no ajustados al modelo.
            li(data-aos="fade-up")
              p #[i.fas.fa-circle(style="color:#0273BC;")] #[strong El colado de la estructura del dispositivo médico sobre medida bucal:]&nbsp; imperfecciones, rugosidades, falta de sellado, fracturas. 
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-circle(style="color:#0273BC;")] #[strong El ajuste oclusal:]&nbsp;  inadecuada relación de la oclusión en las dos arcadas en el articulador.
      .col-md-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema7/2.png" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Normalmente, en la práctica, se cumplen los criterios indicados, donde el paciente queda satisfecho con la prótesis. Revise, a continuación, un video sobre el control de calidad:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/V-Oyj3npdbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema7',
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
</style>
