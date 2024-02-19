<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Diseño y elaboración de prótesis

    .row
      .col-md-7.mb-4.mb-md-0(style="place-self:center;")
        p(data-aos="fade-up") Es fundamental que el técnico dental interprete y realice  adecuadamente, sobre el modelo de trabajo, la información plasmada en la prescripción clínica hecha por el profesional odontólogo; para ello, deberá identificar. Es fundamental que el técnico dental interprete y realice  adecuadamente, sobre el modelo de trabajo, la información plasmada en la prescripción clínica hecha por el profesional odontólogo; para ello, deberá identificar apropiadamente las superficies protésicas del modelo sobre el cual realizará el dispositivo intraoral solicitado.
        .cajon.color-primario.p-5.mt-5(style="background-color:#C3F1F2;")
          p.mb-0(data-aos="fade-up") Aparato protésico removible que reemplaza artificialmente la totalidad de los dientes en un paciente edéntulo completo de uno o ambos arcos dentales. En el siguiente video, se presenta el procedimiento de fabricación:
      .col-md-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/1.png" data-aos="fade-left")
    
    LineaTiempoD.color-secundario.mt-5
      .row.p-4(numero="1" titulo="Introducción al proceso")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/maXNNDyV0Eg?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Introducción al proceso" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="2" titulo="Elaboración de plato base")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/UFooUzfiVb0?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Elaboración de plato base" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="3" titulo="Posicionamiento de dientes")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/bAj5kF-oLCM?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Posicionamiento de dientes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="4" titulo="Enmuflado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/YIKo52PW3yU?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Enmuflado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="5" titulo="Lavado de cera")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/NXuZx7IIuts?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Lavado de cera" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="6" titulo="Acrilado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/UwHmReShgh8?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Acrilado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="7" titulo="Desenmuflado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PgPX_0rGaV8?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Desenmuflado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="8" titulo="Pulido")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/i9Nq7ceGldI?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Pulido" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.p-4(numero="9" titulo="Pulido y brillado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/zLtRddglYoE?list=PLkc5n6npRWkgYuDj_V5ydcuj1TvZlwfrB" title="Pulido y brillado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      





</template>

<script>
export default {
  name: 'Tema6',
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
