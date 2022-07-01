<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-left") Contingencias 
    .row.bg01.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-5
        p.mb-0 #[b Las contingencias hacen referencia a aquellas situaciones o eventos que podrían suceder en la producción y que acarrearían consecuencias negativas o positivas para la empresa ganadera. Si este hecho llegara a ocurrir o materializarse, mejoraría o empeoraría las condiciones productivas de la empresa. Aunque no se tiene certeza de su ocurrencia, es posible que pase, y por esto, es muy importante que se diseñen planes de contingencia, para así poder enfrentarse a algunas situaciones que puedan suceder.] 
      .col-lg-5.mb-4.mb-lg-0
        figure.mt-0.mt-lg-4
         img(src='@/assets/curso/tema1/img01.png', style="width: 500px").m-auto(data-aos="fade-right")
    P.mb-5 Un plan de contingencia es el conjunto de medidas que se articulan con la parte técnica, operativa y humana, con el fin de explicar cómo actuar en el momento en que ocurra la situación o evento extraordinario. Es decir, suministra minuciosamente cuáles son las medidas y acciones que se tienen que implementar para que la empresa ganadera pueda seguir funcionando ante una emergencia. En las ganaderías, existen diferentes planes de contingencia, como los enfocados a la parte sanitaria, alimentaria, riesgos, desastres, entre otros. 
    p.mb-5 #[b Para poder realizar el plan de contingencia e implementar sus respectivas acciones, es importante entender y diferenciar los siguientes aspectos:]
    
    .tarjeta.tarjeta--amarilla2.p-3
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-7
            h4 Urgencia:
            p Es la inminente presentación de un problema no previsto, en cualquier sitio o situación, por diferentes causas y con diferentes niveles de gravedad, que causa una reacción de forma inmediata, reclamando atención por parte de la persona afectada o su familia.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img02.svg', style="width: 250px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7
            h4 Emergencia:
            p Es un  evento adverso de similares características a los desastres, con la diferencia de que la comunidad afectada está en la capacidad de controlarlo por sus propios medios.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img03.svg', style="width: 250px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7
            h4 Vulnerabilidad: 
            p Son las particularidades y situaciones de una población, sistema o propiedades que les hacen susceptibles a los resultados dañinos.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img04.svg', style="width: 250px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7
            h4 Amenaza: 
            p Es un fenómeno, sustancia, actividad humana o condición peligrosa que puede ocasionar la muerte, lesiones u otros impactos a la salud, al igual que daños a la propiedad, la pérdida de medios de sustento y de servicios, trastornos sociales y económicos, o daños ambientales.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img05.svg', style="width: 250px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7
            h4 Riesgo: 
            p Se describe como una mezcla entre la posibilidad de la presentación de un evento y las posibles secuelas negativas. La amenaza y la vulnerabilidad son los factores de los que se compone.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img06.svg', style="width: 250px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-7
            h4 Desastre: 
            p Son perturbaciones fuertes en los bienes, medio ambiente, personas y servicios, producidas por un acontecimiento natural o por la actividad antrópica, que exceden la facultad de responder de la población involucrada, por lo cual se necesita de apoyo externo.
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img07.svg', style="width: 250px").m-auto
        
    
</template>
<script>
export default {
  name: 'Tema1',
  components: {},
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
