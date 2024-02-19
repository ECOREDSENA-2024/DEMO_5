<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tecnologías mixtas digital y analógica

    .row
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="fade-right")
      .col-lg-7(style="place-self:center;")
        .row
          .col-auto
            figure
              img(src="@/assets/curso/tema3/2.svg" data-aos="fade-right")
          .col
            p(data-aos="fade-up") Cada dispositivo intraoral puede ser confeccionado teniendo en cuenta las indicaciones de  la orden de trabajo y la tecnología con la que cuente el laboratorio dental; sin embargo, en los procesos de elaboración de las prótesis totales, se debe tener en cuenta que cada caso clínico tiene unos protocolos de elaboración distintos.
        .cajon.color-primario.p-4.mt-5(style="background-color:#C3F1F2;")
          p.mb-0(data-aos="fade-up") Para utilizar herramientas digitales, se requiere una preparación similar a la que se hace en la confección analógica, con la diferencia de que debe apoyarse en un software, un escáner y una fresadora para su realización.

    .row.mt-5.cont_tema3_1.p-5.col-lg-10.m-auto
      .col-lg-5
        p.mb-0(style="color:#0273BC;font-size:24px;" data-aos="fade-up") ¿Cómo se realizan las impresiones digitales y cuáles son sus aplicaciones?

    p.mt-5(data-aos="fade-up") Los escáneres o cámaras intraorales, de tamaño similar a un espejo dental, pueden mostrar las superficies de los dientes en imágenes fotográficas tridimensionales, en lugar de bidimensionales (2D). En el siguiente video, se muestra  cómo funcionan:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/le1IebIKc4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-up") Por otra parte, el CAD (Diseño Asistido por Ordenador) – CAM (Fabricación Asistida por Ordenador) es un sistema innovador, a través del cual se pueden diseñar y fabricar por ordenador las piezas dentales que se colocarán en la boca del paciente, gracias a un sofisticado programa informático. En la siguiente infografía, se profundiza sobre esta tecnología:

    .row.mt-5.p-5.cont_tema3_2(style="border-radius:20px;background: rgb(2,115,188);background: linear-gradient(90deg, rgba(2,115,188,1) 45%, rgba(236,248,255,1) 45%);")
      .col-lg-5.p-0.mb-4.mb-lg-0
        figure.text-center
          img(src="@/assets/curso/tema3/4.svg" data-aos="fade-up" style="display:inline;max-width:300px;")
        p.mt-5.text-white(data-aos="fade-up") Es un sistema de tecnología que ayuda al diseño y la elaboración de prótesis dentales mediante el ordenador.
        p.mt-4(style="color:#FFE000;" data-aos="fade-up") Mediante esta tecnología digital, la boca del paciente es escaneada y las restauraciones son procesadas y fabricadas mediante una mecanización asistida mediante ordenador. 
        .row
          .col-lg-7.mb-4.mb-lg-0(style="place-self:start")
            p.text-white.mt-3(data-aos="fade-up") Esto genera una mayor precisión en el diagnóstico y la preparación.
          .col-lg-5(style="place-self:center")
            figure.text-center
              img.image_3_1(src="@/assets/curso/tema3/6.svg" data-aos="fade-up" style="display:inline;max-width:300px;margin-right:-220px;")
      .col-1
      .col-lg-6
        h4(data-aos="fade-up") Esta tecnología consta de cuatro procesos:
        figure.mt-5.d-none.d-lg-block
          img(src="@/assets/curso/tema3/5.svg" data-aos="zoom-in-up")
        .d-block.d-lg-none.text-center
          figure.text-center.mt-4
            img(src="@/assets/curso/tema3/7.png" data-aos="zoom-in-up" style="display:inline;max-width:200px")
          .p-4.mt-5.col-md-8.m-auto(style="background-color:#FFE000;border-radius:30px;" data-aos="zoom-in-up")
            .text-center(style="margin-top:-40px;")
              span.text-white(style="background-color:#13C6CC;border: 2px solid rgb(2, 115, 188);padding: 0.6rem 1rem;border-radius: 200px;font-weight: bold;font-size: 20px;") 1
            p.mt-4.mb-0 El escaneo de la pieza o implante dental en el modelo.
          .p-4.mt-5.col-md-8.m-auto(style="background-color:#FFE000;border-radius:30px;" data-aos="zoom-in-up")
            .text-center(style="margin-top:-40px;")
              span.text-white(style="background-color:#13C6CC;border: 2px solid rgb(2, 115, 188);padding: 0.6rem 1rem;border-radius: 200px;font-weight: bold;font-size: 20px;") 2
            p.mt-4.mb-0 Diseño con un software tridimensional de la prótesis estética (permite calcular los ejes de inserción, la referencia del modelo antagonista, entre otros).
          .p-4.mt-5.col-md-8.m-auto(style="background-color:#FFE000;border-radius:30px;" data-aos="zoom-in-up")
            .text-center(style="margin-top:-40px;")
              span.text-white(style="background-color:#13C6CC;border: 2px solid rgb(2, 115, 188);padding: 0.6rem 1rem;border-radius: 200px;font-weight: bold;font-size: 20px;") 3
            p.mt-4.mb-0 Fabricación de las piezas a partir de la información del diseño de la prótesis en unos cuantos minutos.
          .p-4.mt-5.col-md-8.m-auto(style="background-color:#FFE000;border-radius:30px;" data-aos="zoom-in-up")
            .text-center(style="margin-top:-40px;")
              span.text-white(style="background-color:#13C6CC;border: 2px solid rgb(2, 115, 188);padding: 0.6rem 1rem;border-radius: 200px;font-weight: bold;font-size: 20px;") 4
            p.mt-4.mb-0 Colocación de la o las piezas fabricadas.




</template>

<script>
export default {
  name: 'Tema3',
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
.cont_tema3_1
  background: url(../assets/curso/tema3/3.png)
@media only screen and (max-width: 991px)
  .cont_tema3_2
    background: rgb(2,115,188)
    background: linear-gradient(180deg, rgba(2,115,188,1) 36%, rgba(236,248,255,1) 36%) !important
  .image_3_1
    margin: 0 auto !important
.cajon.color-primario:before
  background-color: #13C6CC
</style>
