<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-left") Trazabilidad 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-5 La trazabilidad se define como la posibilidad de rastrear un producto a través de todos los procesos, desde la materia prima hasta la producción, consumo y eliminación; en palabras sencillas, es la capacidad de saber cuándo y dónde se produjo y por quién. Es por eso que recientemente la trazabilidad ha tomado gran importancia, debido al aumento de la conciencia acerca de la seguridad, inocuidad y calidad de los alimentos, y aunque existen diversas formas de concebir la trazabilidad, lo más frecuente es dividirla en dos panoramas:
    .row.align-items-center.mb-2(data-aos="fade-right")
      .col-lg-7.p-5
        .dual-txt-deco
            h4.py-2(style="position: relative; z-index: 1;") Trazabilidad de cadena
            p.py-2(style="position: relative; z-index: 1;") Esta se aplica cuando se puede rastrear el producto desde la adquisición de las materias primas hasta el acopio, transformación, transporte, distribución y venta, rastreando de adelante hacia atrás o viceversa. Es decir, los productores pueden hacer seguimiento hacia dónde se entregan sus productos (rastreo hacia delante) y las empresas o consumidores pueden saber de dónde provienen los productos que adquieren (rastreo hacia atrás). Con base en este tipo de trazabilidad, es que se genera el concepto mundialmente conocido acerca del tema. A continuación, se puede visualizar una imagen que explica este proceso:
      .col-lg-4.mb-1.mb-lg-0
        figure.mt-0.mt-lg-4
          img.p-5(src='@/assets/curso/tema4/img02.png', style="width: 320px").m-auto(data-aos="fade-right")
    .col-12.col-md-12
      figure
        img(src='@/assets/curso/tema4/img03.svg')(data-aos="fade-right")
    .row.align-items-center.mb-2(data-aos="fade-right")
      .col-lg-7.p-5
        .dual-txt-deco
            h4.py-2(style="position: relative; z-index: 1;") Trazabilidad interna
            p.py-2(style="position: relative; z-index: 1;") En este tipo de trazabilidad se le hace seguimiento paso a paso al movimiento de los productos dentro de un sector localizado específicamente dentro de una sola empresa o planta; por ejemplo, la producción de leche, en cada uno de los procesos y procedimientos dentro de la unidad productiva. Observe en una imagen la explicación del funcionamiento de esta trazabilidad:
      .col-lg-4.mb-1.mb-lg-0
        figure.mt-0.mt-lg-4
          img.p-5(src='@/assets/curso/tema4/img05.png', style="width: 320px").m-auto(data-aos="fade-right")
    .col-12.col-md-12
      figure
        img.mb-5(src='@/assets/curso/tema4/img04.svg')(data-aos="fade-right")
    .row.mb-5.justify-content-center
      .col-lg-10
        p.mb-5 #[b Otra forma de clasificar la trazabilidad] es de acuerdo con el tipo de rastreo que se puede hacer teniendo en cuenta la identificación individual o por lotes de todas las piezas y los productos. En este caso, se puede decir que existen dos tipos:
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6A1jY0MzJu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    .row.justify-content-center.mb-5
      .col-lg-12
        p.mb-5 Es así como la trazabilidad es un instrumento vital en el aseguramiento de la calidad e inocuidad de los alimentos, además de la sanidad de los animales y las personas, siendo uno de los conceptos más destacados tanto en el Código Sanitario como en el Codex Alimentarius y en los anales de la salud pública.
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center
            .col-lg-12.mb-4.mb-lg-0
              p En la producción primaria coexisten varias herramientas, como, por ejemplo, el registro e identificación de los semovientes, ya sea individualmente o por lotes de acuerdo con su especie, la inscripción del predio, el registro y seguimiento del transporte del ganado a través de las guías de movilización, que de forma conjunta pueden garantizar el rastreo de los animales desde su nacimiento y de los procesos a los que están vinculados durante su vida productiva. Además, en algunos casos, los alimentos de origen animal, tales como la leche y sus derivados, tienen elementos específicos que garantizan la aplicación de la trazabilidad desde la granja hasta las empresas de transformación que los ponen en el mercado para consumo, las cuales son herramientas como bases de datos que promueven la calidad, inocuidad y trazabilidad de este tipo de productos.
    p.mb-5 Como se ha mencionado, a nivel cosmopolita existen herramientas que soportan y ayudan en la implementación de la trazabilidad en la industria alimentaria y en la producción primaria de los productos de origen animal; dichas herramientas auxiliares se describen como referencia a continuación:
    .row.mb-5
      .col-lg-12
        .tabla-c
          table(style="background-color: #EBF5E7")
            tr
              th BPM (Buenas Prácticas de Manufactura) 
              td 
                p Requisitos básicos que deben ser aplicados para producir en forma higiénica y sanitaria los alimentos y reducir los riesgos para la salud del consumidor, cumpliendo con regulaciones nacionales e internacionales.
            tr
            th(style="background-color: #E2F2DC") POES (Procedimiento de Operación Estándar de Sanitización)
            td(style="background-color: #E2F2DC")
              p Describen las tareas de saneamiento, se aplican antes, durante y después de las operaciones de elaboración.
            tr
            th HACCP (Análisis Control de Puntos Críticos) 
            td 
              p Sistema que permite identificar, evaluar y controlar peligros significativos para la inocuidad de los alimentos.
            tr
            th(style="background-color: #E2F2DC") ISO (Control de calidad)
            td(style="background-color: #E2F2DC") 
              p Su finalidad es orientar, coordinar, simplificar y unificar los usos para conseguir menores costos y efectividad.
    p.mb-5 En conclusión, la trazabilidad es fundamental en la aplicación de las políticas sanitarias, particularmente, en el caso de las enfermedades endémicas y zoonóticas, así como en los requerimientos de los mercados, tanto internos como externos, donde son de gran importancia la certificación de origen, la inocuidad y la calidad de los productos. Además de los aportes que el sistema brinda a la sanidad animal, a la salud pública y al comercio, este aumenta la probabilidad de llevar un sistema estadístico a través de las bases de datos, en cuanto a inventario de animales, parámetros productivos, manejos de procesos y sistemas productivos, mejoramiento genético, entre otros, lo cual, sin duda, constituye la trazabilidad como una herramienta excelente para la actividad ganadera tecnificada.
    figure
      img(src='@/assets/curso/tema4/img06.svg')(data-aos="fade-right")
        
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
