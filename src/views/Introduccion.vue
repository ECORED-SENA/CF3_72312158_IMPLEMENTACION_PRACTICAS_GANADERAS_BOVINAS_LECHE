<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
    .col-lg-12
        .dual-txt-deco2
          p.py-5(style="position: relative; z-index: 1;") Implementar un plan no es solo ejecutar los procesos y procedimientos, sino corregir paso a paso los errores procedimentales o fallas en las actividades, las malas prácticas o manejos por parte del personal ejecutor, entre otras cosas. Es por eso que debe existir un monitoreo, lo que tácitamente implica una evaluación y un plan de mejoras, con el fin de que la implementación de las BPG sea exitosa en la unidad pecuaria, asegurando, a través de esta, la inocuidad, calidad y trazabilidad de los alimentos de origen animal. Partiendo de esto, para comenzar, se invita a explorar el video introductorio que se presenta a continuación:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OJcZxUGqock" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
