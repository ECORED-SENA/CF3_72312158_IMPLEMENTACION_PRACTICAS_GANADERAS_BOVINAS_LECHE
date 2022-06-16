<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-left") Acciones correctivas
    p Las acciones correctivas son todas aquellas decisiones, medidas, actividades y soluciones orientadas a eliminar o corregir la causa de no conformidades en la empresa derivadas de:
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row
            .col-lg-2.mb-4.mb-lg-0
              figure
                img.imgt(src='@/assets/curso/tema2/img02.svg', style="width: 107px")
            .col-lg-8.mb-4.mb-lg-0
              ul.lista-ul.ms-3
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Servicios no conformes.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Quejas y sugerencias de los usuarios.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Fallas en los procesos que afecten la calidad del servicio prestado.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | No conformidades, mayores o menores, detectadas en auditorías internas o externas del SGI.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Incumplimiento de requisitos legales.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Análisis de datos.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Mediciones de satisfacción.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Accidentes graves.
                li 
                  i.fas.fa-check(style="color: #FF854E")
                  | Análisis de indicadores del proceso y retroalimentación.
    p.mb-5 Es muy importante lograr identificar cuáles son las causas que están generando la no conformidad y, de esta manera, lograr definir si con la implementación de una sola acción correctiva se eliminan la o las causas o si se deberán implementar acciones para cada una. 
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos
    p.mb-5 Las acciones correctivas pueden ser de dos tipos: inmediatas y preventivas; las primeras son reactivas, mientras las segundas son proactivas. En el siguiente recurso, se detallan cada una de ellas:
    .row.justify-content-center.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          .tarjeta.BGIMG01
            .text-black.p-4.mb-5
              h2.mb-5.mt-5.text-center Acciones correctivas inmediatas
              p.mb-5 Rectifican un problema existente o una distorsión de algún límite crítico, haciendo la detección de algún proceso o procedimiento mal ejecutado, proyectado o realizado. Algunos ejemplos de este tipo de acciones serían: el rechazo de leche contaminada con pasto o barro, insectos, etc.; impedir el ordeño de animales con signos de mastitis; no permitir que un operador realice el ordeño sin el correcto lavado de manos.
      .col-md-6.col-lg.mb-5.mb-lg-0.mt-5.mt-lg-0
        .tarjeta-avatar.mg1
          img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
          .tarjeta.BGIMG02
            .text-black.p-4.mb-5
              h2.mb-5.mt-5.text-center Acciones correctivas preventivas
              p Impiden que ocurra un potencial problema. Previenen que suceda un error en la implementación del plan en el futuro. Algunos ejemplos de este tipo de acciones serían: realizar reparaciones locativas en la sala de ordeño y corrales; hacer mantenimiento al equipo y elementos utilizados en el ordeño; aplicar la correcta limpieza y desinfección en las instalaciones y los equipos de la unidad productiva.
   
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Metodología
    p.mb-5 Para implementar las #[span.etiqueta #[b acciones correctivas, ]] es necesario diseñar un plan en el que se describa el paso a paso para corregir la no conformidad, identificando la raíz, responsables y tiempos de ejecución del plan, tal como se muestra a continuación:
    .tarjeta.tarjeta--verde.p-5.mb-5(data-aos="fade-right")
      LineaTiempoC.color-acento-botones(text-small)
        .row.p-5(titulo="Paso 1").align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p #[b Reconocer la inconformidad en potencia o real]
            p Indagar y encontrar el motivo original que, al erradicarse, garantice que no ocurra. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img07.svg', style="width: 395px")
        .row.p-5(titulo="Paso 2").align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p #[b Analizar las causas]
            p Se deben determinar los límites y alcances del problema. Una forma de hacerlo es usando la metodología de los 5 ¿Por qué?, que consiste en tomar decisiones con base en lo que realmente está sucediendo.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img08.svg', style="width: 395px")
        .row.p-5(titulo="Paso 3").align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p #[b Formular acciones correctivas]
            p Se necesita diseñar más de una acción encaminada a erradicar múltiples hallazgos, por lo cual el plan de mejoras se debe abordar de forma holística, con el fin de que no se produzcan duplicidades ni reprocesos en la administración.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img09.svg', style="width: 395px")
        .row.p-5(titulo="Paso 4").align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p #[b Determinar el plan de acción]
            p Se formula un plan donde se definan las actividades requeridas para erradicar la causa principal. Lo anterior podría requerir la modificación o eliminación de un proceso, evitando producir un nuevo riesgo o problema.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img10.svg', style="width: 395px")
        .row.p-5(titulo="Paso 5").align-items-center.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p #[b Comprobar el cumplimiento del plan de acción y la eficacia]
            p Se debe comprobar la operatividad de la acción que se propuso.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img11.svg', style="width: 395px")
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Aplicación y métodos
    p.mb-5 Para la aplicación de las acciones correctivas, se deben evaluar los criterios mencionados a continuación, los cuales permitirán saber si se está ante un problema sistémico que justifique una acción correctiva: 
    .row.justify-content-center
      .col.col-12.d-flex.justify-content-center
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img12.svg')
          .tarjeta.color-acento-botones.p-3(x="9.3%" y="63%" numero="1")
            h5.mb-2 KPI de rendimiento:
            p.text-small Cuando los indicadores muestran problemas rutinarios. Si los indicadores muestran que los procesos funcionan de forma correcta, no es preciso emprender acciones correctivas.
          .tarjeta.color-acento-botones.p-3(x="36%" y="63%" numero="2")
            h5.mb-2 Registros:
            p.text-small Los registros pueden evidenciar problemas que se presentan de forma recurrente y que deben ser investigados.
          .tarjeta.color-acento-botones.p-3(x="62.5%" y="63%" numero="3")
            h5.mb-2 Informes de los empleados:
            p.text-small Informes, quejas, comentarios de los empleados sobre problemas repetitivos son un signo claro de que es preciso implementar acciones correctivas.
          .tarjeta.color-acento-botones.p-3(x="89.3%" y="64%" numero="4")
            h5.mb-2 Resultados de auditorías o inspecciones al sistema: 
            p.text-small Cuando los auditores internos o externos incluyen en sus informes las recomendaciones para la implementación de acciones correctivas en ISO 9001.

</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
