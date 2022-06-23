<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-left") Seguimiento y evaluación 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-12.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-5 El seguimiento y la evaluación tienen como fin examinar el avance y el alcance de la implementación, instaurar la viabilidad de los objetivos, y descubrir y proveer los posibles problemas, para poder tomar las decisiones y medidas necesarias con el fin de prevenirlos o subsanarlos a tiempo. Para esto, existe un grupo de herramientas, acciones y prácticas que permiten monitorear el progreso de los procesos, procedimientos, planes o manejos en la implementación de las Buenas Prácticas Ganaderas en Bovinos de Leche. Todo lo anterior es llevado a cabo de manera sistemática, valorando cada paso, teniendo en cuenta la normatividad y dando claramente un concepto al respecto. 
    h4.mb-5.text-center ¿Desea profundizar en este tema? En el siguiente video, lo puede hacer:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6A1jY0MzJu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
        
    separador
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2(data-aos="fade-right") 3.1 Tipos y técnicas
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-5
        .dual-txt-deco2
            p.py-5(style="position: relative; z-index: 1;") El seguimiento involucra el establecimiento de indicadores, tanto de efectividad como de eficacia, el alcance y el impacto, la elaboración de sistemas que permitan la recolección de la información para elaborar los indicadores, con el fin de mantener actualizada la administración a través de la aplicación del mismo. Además, se considera que el seguimiento es una función interna de cualquier proceso, plan, procedimiento o proyecto de una unidad productiva. Ahora bien, cuando se habla de seguimiento, en realidad se está haciendo referencia a dos tipos:
      .col-lg-3.mb-4.mb-lg-0
        figure.mt-0.mt-lg-4
         img.mb-5.mb-lg-0(src='@/assets/curso/tema3/img02.png')(data-aos="fade-right")
      .bg4
        .row.mb-5.justify-content-center
          .col-lg-5.mb-4.mb-lg-0.py-3
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img04.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  h4.text-center.mt-5 Buenas Prácticas Ganaderas aplicadas a la Producción de Leche:
                  p Su principal objetivo es la producción de leche inocua y de calidad y se implementan en los procesos de producción, ordeño y conservación de la leche en las producciones ganaderas. Normativamente, están reglamentadas por el Decreto 616 del 2006, expedido por el Ministerio de Protección Social y el Ministerio de Agricultura y Desarrollo Rural y por la Resolución 3585 del 2008 del Instituto Colombiano Agropecuario ICA.
          .col-lg-5.py-3
            .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img05.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  h4.text-center.mt-5 Seguimiento del trabajo a nivel de proyecto
                  p Este se realiza para ofrecer a los grupos de trabajo, en general, el avance por actividades y grupo de trabajo viéndolos en conjunto. En este caso, las actualizaciones son más precisas y fáciles, con el fin de que se puedan interpretar de inmediato, priorizando los datos más relevantes en vez de recibir notificaciones sobre actualizaciones diarias o semanales, o sea, toda la información que se obtiene es en tiempo real.
  
    p.mb-4 Finalmente, es importante destacar que, para hacer uso de cada una de estas herramientas, se debe realizar la actualización de estado del plan en general, para que se compare el avance por actividades, por grupo y en totalidad.
    .row
      .col-lg-12
          .dual-txt-deco2
            p.py-5(style="position: relative; z-index: 1;") En cuanto a la evaluación, esta involucra el estudio sistemático del plan pensando en el cumplimiento de las metas, qué se quiere lograr, de qué forma, en qué tiempo, qué estrategia se aplica y si esta es efectiva, los impactos y si estos son efectivos y eficaces. #[b Una evaluación se puede realizar de diferentes formas y algunas de las más comunes son:]
    TabsB.color-acento-contenido(data-aos="fade-right")
      .py-4.py-md-5(titulo="Según quienes evalúan")
        .row.alging-items-center 
          .col-lg-8.mb-4.mb-lg-0
            p #[b Según quienes evalúan]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Autoevaluación:</span> se considera una práctica de aprendizaje y mejora.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Evaluación participativa:</span> es una clase de evaluación interna que tiene como objeto involucrar un número considerable de personas con el plan de implementación. 
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Evaluación participativa rápida:</span> esta evaluación utiliza una metodología cualitativa.
              li
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Evaluación externa:</span> es realizada por una persona externa a la unidad productiva.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Evaluación interactiva:</span> implica una interacción muy activa entre un evaluador o equipo de evaluación exterior y la unidad productiva o los grupos de trabajo en la implementación del plan.
          .col-lg-4
            figure
              img.imgt1(src='@/assets/curso/tema3/img06.svg', style="width: 200px")
      .py-4.py-md-5(titulo="Según la etapa en el ciclo del proyecto")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p #[b Según la etapa en el ciclo del proyecto]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Evaluación inicial:</span> es un análisis que permite valorar la viabilidad del plan o proyecto que se desea implementar a través del contexto, los estudios anteriores y las intervenciones preliminares.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Evaluación intermedia:</span> se hace en la implementación o ejecución del plan o proyecto, con el objetivo de evaluar los procesos de los procedimientos y las actividades que se llevan a cabo, reconociendo errores, dificultades y formulando mejoras o recomendaciones para ajustar.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0 <span style="color: #FF854E !important; font-weigth: bold;">Evaluación final:</span> se lleva a cabo al finalizar la implementación del plan o el proyecto, para considerar y documentar los resultados e impacto temprano de la implementación y las recomendaciones para mejoras futuras.
          .col-lg-2
            figure
              img.imgt1(src='@/assets/curso/tema3/img07.svg')
      .py-4.py-md-5(titulo="Según su función")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p #[b Según su función]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0  <span style="color: #FF854E !important; font-weigth: bold;">La evaluación formativa:</span> este tipo de evaluación es intermedia y periódica, se hace para valorar el desempeño del plan o proyecto, tiene como fin mejorar básicamente la performance del plan o proyecto, teniendo como apoyo el monitoreo.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0  <span style="color: #FF854E !important; font-weigth: bold;">La evaluación sumativa:</span> evalúa el alcance del plan o proyecto una vez concluido. Además, están las evaluaciones de impacto, que estiman los efectos tanto positivos como negativos de un proyecto, plan o programa, y se hacen tiempo después de finalizado el mismo.
          .col-lg-2
            figure
              img.imgt1(src='@/assets/curso/tema3/img08.svg')
      .py-4.py-md-5(titulo="Según el tipo de análisis e instrumentos")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p #[b Según el tipo de análisis e instrumentos]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0  <span style="color: #FF854E !important; font-weigth: bold;">Evaluación cuantitativa:</span>  en esta se lleva a cabo la recolección metódica de datos o elementos que se puedan contar y codificar numéricamente. Por lo general, las técnicas cuantitativas utilizan herramientas de investigación que permiten observar datos estadísticos que suministran información de diversas fuentes.
              li 
                i.fas.fa-angle-right(style="color: #FF854E")
                p.mb-0  <span style="color: #FF854E !important; font-weigth: bold;">La evaluación sumativa:</span> evalúa el alcance del plan o proyecto una vez concluido. Además, están las evaluaciones de impacto, que estiman los efectos tanto positivos como negativos de un proyecto, plan o programa, y se hacen tiempo después de finalizado el mismo.
          .col-lg-2
            figure
              img.imgt1(src='@/assets/curso/tema3/img09.svg')

    separador
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2(data-aos="fade-right") 3.2 Metodología
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-7
        .dual-txt-deco2
            p.py-5(style="position: relative; z-index: 1;") La metodología para hacer seguimiento de programas, planes y proyectos tiene un marco referencial, el cual se debe seguir, con el fin de recolectar la información en los diversos formatos, registros, listas de chequeo y propuestas que permitan evaluar e interpretar de forma coherente, eficiente, efectiva y oportuna. Además, se sugiere consultar los procesos, procedimientos, guías, manuales y demás herramientas que permitan realizar las labores de seguimiento y evaluación más adecuadamente.
      .col-lg-3.mb-4.mb-lg-0
        figure.mt-0.mt-lg-4.justify-content-end
         img(src='@/assets/curso/tema3/img10.png', style="width: 320px").m-auto(data-aos="fade-right")
    p.mb-5 Por otra parte, al evaluar, se pueden identificar varias características. Se pueden establecer diferentes metodologías de evaluación que pertenecen a un amplio tipo, que a su vez son de diversas disciplinas. La evaluación confronta la información para poder tomar decisiones, por lo cual se hacen necesarias la investigación, la medición y la discusión a través de la comparación. Sin embargo, se pueden encontrar diferencias teórico-metodológicas entre los análisis y las variables, así como entre los indicadores y los instrumentos de medición usados, debido al gran universo que existe para estos. 
    separador
    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2(data-aos="fade-right") 3.3 Indicadores de gestión
    .row.align-items-center
      .col-lg-7
        .bloque-texto-b.color-secundario
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4 Los indicadores de gestión son la expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas, según el caso.<br>
            p.text-center (Da Silva, 2021) 
            i.fas.fa-quote-right
      .col-lg-3.col-md-5
        figure
         img.mb-5(src='@/assets/curso/tema3/img11.svg', style="width: 320px")
    p.mb-5 Es decir, un indicador de gestión es un valor que se puede medir y que muestra la eficacia y efectividad para lograr los objetivos claves propuestos.
    h4.mb-3.text-center ¿Cuáles indicadores se tienen? 
    .row.justify-content-center(data-aos="fade-right").mb-5
      .col-lg-4.py-5.bg11.my-3.me-3.ms-3(data-aos="fade-right")
        h4.mt-3.px-4 Aislado
        p.px-4 Indicador que revela la condición o estado de un proceso especifico.
      .col-lg-4.py-5.bg16.my-3.me-3.ms-3(data-aos="fade-left")
        h4.mt-3.px-4.text-white Definido
        p.px-4.text-white Indicador que revela la situación general de la organización y permite predecir su futura proyección.
    p.mb-5 La principal función de los indicadores de gestión es medir el éxito de la implementación del plan o proyecto, permitiendo mostrar los avances del mismo y el porcentaje o totalidad del cumplimiento de los objetivos y metas individuales. Otra de estas funciones es medir a través de la realidad en que se actúa, que es multidimensional, pero que un indicador solo puede considerar una de estas dimensiones, ya sea la económica, la social, la ambiental, la política, etc., además, permite comparar la situación actual de una dimensión de estudio en el tiempo respecto a patrones establecidos; y finalmente, todo indicador debe transmitir información relevante sobre un tema en particular para la toma de decisiones. (Castulina y Martínez, 2013)
    separador
    #t_3_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2(data-aos="fade-right") 3.4 Indicadores de gestión
    p.mb-4 Es importante tener en cuenta los objetivos, la disponibilidad de recursos y el lapso de tiempo formulado para la ejecución del seguimiento y la evaluación, con el fin de definir la metodología, el procedimiento, la técnica y el instrumento a aplicar, además de cuestionarse: #[span.etiqueta #[b ¿qué quiero evaluar?, ¿qué tipo de información o datos espero obtener como resultado de la evaluación?,]] puesto que son las respuestas a estas cuestiones las que permitirán establecer cómo y con qué tipo de instrumentos se realizará el seguimiento y la evaluación del plan o proyecto. 
    p.mb-3 Existe un amplio abanico de instrumentos y técnicas para recolectar información cuando se trata de aplicar un seguimiento o evaluación a un proyecto o plan, siendo lo fundamental el reconocer cuáles son los más apropiados según lo que se pretende medir. En este sentido, los más comunes son:
    .row.justify-content-center.align-itmes-center 
      .col-lg-10.BGIMG03.py-5
        .row.mb-3.justify-content-center.align-itmes-center 
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img29.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Encuestas 
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img30.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Reflexión personal
        .row.mb-3.justify-content-center.align-itmes-center 
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img31.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Cuestionarios
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img32.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Observación externa
        .row.mb-3.justify-content-center.align-itmes-center 
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img36.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Fichas de indagación
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img33.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Contraste de experiencias
        .row.justify-content-center.align-itmes-center 
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img34.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Fichas gráficas
          .col-3.col-lg-1
            img.img150(src='@/assets/curso/tema3/img35.svg', alt='Texto que describa la imagen')
          .col-lg-3
            h.py-3 Lista de chequeo
          
    separador
    #t_3_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2(data-aos="fade-right") 3.5 Diagramación y aplicación
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-5
        p.mb-4 La diagramación es una herramienta que se utiliza para presentar de manera gráfica los procesos de una empresa. Esta, además, facilita la observación de todas las actividades, la relación que tienen entre sí, y permite identificar posibles incompatibilidades o “cuellos de botella” que se presenten en los procesos. 
        p.mb-0 Para realizar la diagramación, primero se deben determinar los límites del proceso que se va a analizar, y posterior a esto, se deben determinar los productos que salen del proceso y los insumos que ingresan. Es recomendable mantener el mismo nivel de detalle en todo el diagrama, ya que, si se mezclan actividades muy detalladas con actividades resumidas, se podrían estar generando confusiones. Finalmente, se debe verificar el diagrama con la realidad, para poder corregir posibles malas interpretaciones u omisiones.
      .col-lg-5.mb-5.mb-lg-0
        figure.mt-0.mt-lg-4
         img(src='@/assets/curso/tema3/img13.svg', style="width: 400px").m-auto(data-aos="fade-right")
    p.mb-3 Es importante mencionar que cada cuadro de actividad se puede considerar como un proceso y los diagramas de dichos cuadros constituyen el siguiente nivel de detalle; es de esta manera que se debe ir adentrando en detalle, hasta donde el proceso lo permita. La simbología utilizada y su significado se muestran en la siguiente tabla:
    .row.justify-content-center.mb-2
      .col-md-5
        SlyderF(columnas="col-12")
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img14.svg', style="width: 135px").m-auto
            h3.text-center Terminal
            p Se utiliza para indicar el inicio y final del proceso, utilizando la palabra inicio o fin, según sea el caso.
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img15.svg' , style="width: 80px").m-auto
            h3.text-center Decisión
            p Permite cambiar la continuidad de un proceso, y se hace de acuerdo con la pregunta escrita en el interior del rombo. Esta pregunta siempre debe redactarse de manera que la respuesta siempre sea positiva y se pueda continuar el flujo del proceso.
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img16.svg' , style="width: 135px").m-auto
            h3.text-center Actividades
            p Se usa para especificar las actividades que constituyen el proceso. Dicha descripción siempre se debe realizar con un verbo activo y ser lo más sintetizada y clara que se pueda, ya que este es un paso decisivo en la diagramación y análisis de un proceso.
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img17.svg' , style="width: 135px").m-auto
            h3.text-center Dirección de Flujo
            p Se utiliza cuando se quiere mostrar interconexión entre dos símbolos secuenciales e indicar la dirección del flujo del proceso.
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img18.svg' , style="width: 70px").m-auto
            h3.text-center Conector(Circulo pequeño Con flecha)
            p Sirve para conectar dos símbolos que están en secuencia y en la misma hoja del diagrama.
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img19.svg' , style="width: 135px").m-auto
            h3.text-center Movimiento 
            p En su interior se describe una acción que tenga que ver con el movimiento físico de cosas. Por ejemplo, transporte de algo de un lugar a otro.
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img20.svg' , style="width: 90px").m-auto
            h3.text-center Documentación
            p Indica algún tipo de dato o información impreso, como, por ejemplo, un informe. 
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img21.svg' , style="width: 60px").m-auto
            h3.text-center Retardo
            p Se utiliza para indicar que el proceso debe detenerse, bien sea por cuestiones de trámite o logística. 
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img22.svg' , style="width: 70px").m-auto
            h3.text-center Almacenaje O guardar
            p Representa que se va a almacenar o guardar alguna cosa o documento. 
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-5
                img(src='@/assets/curso/tema3/img23.svg' , style="width: 110px").m-auto
            h3.text-center Anotación
            p Este no forma parte del proceso y se usa para aclarar o dar explicación sobre alguna actividad en específico. La aclaración debe ir al interior del rectángulo y la línea punteada debe ir sobre la parte del diagrama que requiere la instrucción especial o aclaración.
          .tarjeta.color-acento-botones-1.p-4
            .row.justify-content-center.mb-3
              .col-5.py-3
                img(src='@/assets/curso/tema3/img24.svg' , style="width: 80px").m-auto
            h3.text-center Salto de Página
            p Se usa para dar conexión a lo que se está diagramando entre una hoja que termina y una hoja nueva.
    .row.justify-content-center
      .col-lg-4.mb-2.mb-lg-0.py-3
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img25.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Diagrama de bloques
              p  Se realiza con el fin de conseguir una visión general y está constituido por tareas organizadas de manera secuencial que muestran claramente el orden de lo que ocurre en el proceso y su descripción. Casi siempre tiene pocos detalles y muestra cómo suceden las cosas cuando todo funciona correctamente, omitiendo alternativas. Este tipo de diagrama se elabora determinando las entradas y salidas del proceso, y luego de ello, se establece cuál es la actividad inicial y se continúa la secuencia hasta llegar al final del proceso.
      .col-lg-4.py-3
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img26.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Diagrama de flujo
              p A diferencia del anterior, este diagrama muestra un mayor grado de detalle, lo que permite visualizar los pasos del proceso, organizar el trabajo y tomar decisiones de importancia. Lo anterior aporta la información mínima para entender el comportamiento del proceso y poder planear adecuadamente las etapas posteriores de análisis con mayor detalle. Este tipo de diagrama se elabora determinando las entradas y salidas del proceso y estableciendo cuál es la actividad inicial, para luego describir, con los símbolos adecuados, las actividades y el flujo del proceso.
      .col-lg-4.py-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img27.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Diagrama de flujo y participantes
              p Describe el flujo de actividades y sus secuencias, teniendo en cuenta a los participantes en los procesos. Queda escrito con mayor detalle que los anteriores diagramas y es el indicado para documentar la situación actual de los procesos. Para realizarlo, se deben determinar las entradas y salidas del proceso y establecer los responsables de estos. Posteriormente, se establece la primera actividad, con sus responsables, y se sigue estableciendo la secuencia, hasta finalizar el proceso. 

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
