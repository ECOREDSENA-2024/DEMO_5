<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolo de trabajo digital

    .row
      .col-md-7.mb-4.mb-md-0(style="place-self:center;")
        .cajon.color-primario.p-5.mt-5(style="background-color:#C3F1F2;")
          p.mb-0(data-aos="fade-up") Los protocolos de prevención han hecho disminuir paulatinamente la edentación de la población. A pesar de ello, el edentulismo parcial y total sigue siendo un problema de salud pública. Estos pacientes se ven gravemente afectados tanto a nivel funcional como estético. Durante décadas, el tratamiento habitual para estos casos fue el uso de prótesis completas muco-soportadas. Sin embargo, la falta de retención y estabilidad de estas prótesis, especialmente en grandes reabsorciones óseas y mandíbula, ha situado a la prótesis sobre implantes como primera opción terapéutica.
      .col-md-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/1.png" data-aos="fade-left")

    br
    h3.mt-5(data-aos="fade-up" style="padding:7px;border-left:20px #0273BC solid;") Protocolo digital para la confección de una sobredentadura implanto-soportada

    p.mt-4(data-aos="fade-up") Para la rehabilitación de un paciente totalmente edéntulo con implantes, se pueden utilizar prótesis fijas o removibles.

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        .p-5.pb-4(style="border-radius:20px;height:100%;background: rgb(2,115,188);background: linear-gradient(360deg, rgba(2,115,188,1) 25%, rgba(236,248,255,1) 25%);")
          p.mb-0(data-aos="fade-up") No pueden ser retiradas de la boca por el paciente, aunque sí por el profesional, y toda la biomecánica (retención, soporte y estabilidad) es asumida por los implantes, no teniendo la mucosa ningún tipo de responsabilidad.
          .row.mt-5
            .col(style="place-self:end")
              h4.text-white.mb-0(data-aos="fade-up") Las prótesis fijas 
            .col-auto(style="place-self:start")
              figure
                img(src="@/assets/curso/tema4/2.png" data-aos="zoom-in-up")
      .col-lg-6.mb-4.mb-lg-0
        .p-5.pb-4(style="border-radius:20px;height:100%;background: rgb(255,224,0);background: linear-gradient(360deg, rgba(255,224,0,1) 25%, rgba(255,249,207,1) 25%);")
          p.mb-0(data-aos="fade-up") Conocidas como sobredentaduras, son prótesis completas en las que se describen dos tipos en función de la responsabilidad que asumen los implantes y la mucosa: sobredentaduras implanto-retenidas e implantosoportadas, que se profundizaron en el componente: Análisis de la prótesis total.
          .row.mt-5
            .col(style="place-self:end")
              h4.mb-0(data-aos="fade-up") Las soluciones con prótesis removibles
            .col-auto(style="place-self:start")
              figure
                img(src="@/assets/curso/tema4/3.png" data-aos="zoom-in-up")

    br
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema4/4.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center")
        p(data-aos="fade-up") Los rápidos avances tecnológicos en la ejecución de protocolos de digitalización CAD/CAM han abierto nuevas vías para la fabricación de este tipo de prótesis a través de procedimientos aditivos (impresión 3D) y sustractivos (mecanizado). Este tipo de recursos permite realizar, en muchos casos, flujos completos digitales traducidos en tratamientos más rápidos, sencillos y cómodos para el paciente, además de ofrecer predictibilidad y exactitud. Sin embargo, en el caso de las prótesis removibles, en ocasiones es necesario todavía combinar procedimientos analógicos y digitales, lo cual no significa que no se pueda alcanzar el 100 % de flujo digital. A continuación, se presenta un ejemplo de prótesis removible sobre implantes en las que se aprovecharon todas las ventajas disponibles de la tecnología digital, trabajado por Salido et al.  en su artículo Protocolo digital prótesis sobre implantes:

    .text-center.mt-5(data-aos="fade-up")
      span(style="background-color:#0273BC;padding:.5rem 4rem;color:white;font-size:18px;font-weight:bold;border-radius:50px;") Galería

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/5.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Diseño de la férula de verificación de pasividad, para comprobar la fiabilidad del modelo digital.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/6.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Diseño de la prótesis definitiva, para realizar la prueba en boca.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/7.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Férula de verificación de aluminio atornillada sobre los implantes. Vista frontal intraoral.

    .row.mt-5.mb-md-0
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/8.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              p.mt-5.text-center(style="color:#12263F;") La prótesis prototipada, donde se estudia el correcto soporte labial, posición de bordes incisales, tamaño de dientes, líneas medias, dentales y faciales, dimensión vertical y oclusión, tanto estática como dinámica.
              h4.text-center.mt-4(style="color:#12263F;") Prueba del diseño de prótesis: a) vista frontal en oclusión; b) vista oclusal.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/9.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Superposición de modelos virtuales y diseño definitivo de la sobredentadura, para calcular el espacio disponible para el diseño de la subestructura y la mesoestructura.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/10.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Diseño de la barra de soporte.

    .row.mt-5.mb-md-0
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/11.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center(style="color:#12263F;") Diseño mesoestructura: a) vista vestibular, donde observamos los elementos de retención para los dientes y encía de la sobredentadura; b) vista gingival con los alojamientos para las hembras de los “ataches”.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/12.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              h4.mt-5(style="color:#12263F;") Sobredentadura terminada: a) vista vestibular; b) vista de la cara interna
              p.mt-4.text-center.mb-5(style="color:#12263F;") El acrilizado de la mesoestructura (los dientes y encía rosa) se realiza con composite estratificado y posicionamiento de las hembras de teflón en sus alojamientos.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/13.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#9CFCFF")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Sobredentadura superior terminada. Vista frontal en oclusión.

    figcaption.mt-3(style="font-weight:500;word-break:break-all;") #[strong Nota.] Imagen tomada de Salido, M., Gross, E., Martínez, F. Barrendero, S. y Pradies, G. (2020). Protocolo Digital Protesis sobre Implantes. Periodoncia Clínica. #[br] www.researchgate.net/publication/347486449_Protocolo_Digital_Protesis_sobre_Implantes_Periodoncia_Clinica

    br
    h3.mt-5(data-aos="fade-up" style="padding:7px;border-left:20px #0273BC solid;") Protocolo digital para la confección de una sobredentadura implanto-retenida

    .row.mt-5
      .col-md-8.mb-4.mb-md-0(style="place-self:center")
        p(data-aos="fade-up") En las prótesis muco-soportadas en el desdentado total, cuando la mucosa es escasa, lábil y móvil, las impresiones digitales no aportan la mejor información posible sobre la topografía del reborde residual, ya que durante el registro la mucosa se mueve y el escáner pierde la referencia de dónde se encuentra, dificultando la lectura de estas, por lo que no es extraño tener que recurrir a obtener los modelos de trabajo mediante impresiones convencionales. A continuación, se presenta un ejemplo trabajado por Salido et al.  en su artículo Protocolo digital prótesis sobre implantes:
      .col-md-4
        figure
          img(src="@/assets/curso/tema4/15.png" data-aos="fade-left")

    .row.mt-5
      .col-lg-4.mb-4.mb-mlgd-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/16.png')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#FFF18E")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Impresiones definitivas convencionales con elastómeros mediante las cubetas individuales prototipadas.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/17.png')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#FFF18E")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Digitalización de los modelos.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/18.png')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#FFF18E")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Modelos definitivos de trabajo virtuales: a) modelo superior; b) modelo inferior; c) planchas base y rodillos; d) modelos de trabajo alineados, para comenzar el diseño CAD de las prótesis en el módulo.

    .row.mt-5.col-lg-8.m-auto
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/19.png')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#FFF18E")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Secuencia de diseño CAD de las maquetas protésicas: a) posicionamiento de dientes sobre rodillos; b) dientes sobre los modelos definitivos; c) dientes y bases; d) prótesis enceradas; e) ajuste de oclusión con articulador virtual del programa; f) prototipados impresos.
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/20.png')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#FFF18E")
              figure.text-center.mt-5
                img(src="@/assets/curso/tema4/14.svg" style="display:inline;max-width:80px;")
              p.mt-5.text-center.mb-5(style="color:#12263F;") Secuencia de fabricación CAM de las prótesis definitivas: a) vista oclusal del mecanizado de la base inferior; b) vista gingival del mecanizado de la base superior; c) mecanizados de los dientes de acrílico; d) prótesis terminadas.

 


</template>

<script>
export default {
  name: 'Tema4',
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
