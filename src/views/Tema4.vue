<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comunicación
    .row.bg01.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-5
        p.mb-0 Un pilar fundamental en el éxito de las empresas es que exista un buen entendimiento entre todo el personal que labora allí, ya que esto facilita el establecimiento de relaciones, lazos, redes y permite que los colaboradores sean capaces de organizarse en la empresa. Es por esto que se entiende la comunicación como el proceso por el cual se intercambian datos, información, opiniones y se produce entre dos o más individuos que aportan o reciben la referencia. En este proceso intervienen un emisor y un receptor y además del mensaje que se pone de manifiesto, existen dos tipos de comunicación:
      .col-lg-5
        figure.mb-4.mb-lg-0
         img(src='@/assets/curso/tema4/img01.png', style="width: 450px").m-auto(data-aos="fade-right")
    .row.mb-5
      .col-lg-6
        .BGIMG01.p-5(data-aos="fade-right")
          .row.justify-content-center
            .col-10
              h2.text-center Comunicación interna
            .col-5
              figure.mb-4
                img(src='@/assets/curso/tema4/img05.svg')
            .col-12
              p.mb-0 Tiene que ver con la comunicación que hay entre empleados, equipos, colaboradores y líderes y es esencial para hacer que el negocio funcione de manera adecuada y eficiente. Los métodos de comunicación interna incluyen premios por desempeño, boletines informativos, reuniones, llamadas telefónicas y conversaciones formales e informales.
      .col-lg-6
        .BGIMG02.p-5(data-aos="fade-left")
          .row.justify-content-center
            .col-10
              h2.text-center Comunicación externa
            .col-5
              figure.mb-4
                img(src='@/assets/curso/tema4/img06.svg')
            .col-12
              p.mb-0 Hace referencia a que los clientes conozcan su empresa, lo que tiene para ofrecer y brindar una razón al cliente para comprar. Este tipo de comunicación incluye folletos, publicidad, cartas de contacto, correo directo, llamadas telefónicas, tarjetas de presentación, páginas web y cualquier otro medio que haga al público consciente de lo que ofrece la empresa.
    P En cuanto a las herramientas de comunicación, existe una gran variedad que son utilizadas para la comunicación externa e interna. Estas herramientas incluyen correo directo, correo electrónico, mensajes de texto, teléfonos fijos o celulares, computadores, herramientas de videoconferencias y conferencias web, redes sociales, así como plataformas de colaboración y productividad en línea.

</template>

<script>
export default {
  name: 'Tema3',
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
