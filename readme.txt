# Project Title

Entrega Final Curso JavaScript

## Authors

CEREIJO, EVA

## Que es mi simulador

El presente contiene cuatro estructuras HTML, con documentos js enlazados mediante enlaces internos y externos. Externos se utilizan las librerias bootstrap, sweetalert y toastify. Internamente, se dividio los js en clases, funciones, declaracion de algunas variables globales, y un archivo js que maneja cada página HTML.

La temática que se decidió abordar es un sitio web de control del periodo menstrual. Será posible realizar el cálculo de las próximas menstruaciones cuando la persona menstruante ingrese los siguientes datos:

* Fecha de la última menstruación (formato Date).
* Duración del periodo menstrual.

Ademas, se simula una carga de datos desde un archivo json en caso de que la usuaria ya haya utilizado el sitio. El mismo se trabajó con las fechas que ya sucedieron (true), y a base de las mismas, se recalcula un promedio de duración del ciclo para calcular las fechas restantes. Se pueden modificar las fechas y duraciones del archivo json y comprobarlo.

## Que funcionalidad incluye para el usuario

- Información de la fecha del siguiente periodo menstruals
- Calculo de las siguientes 12 menstruaciones.
- Filtrado de lista de menstruaciones de un mes solicitado.
- Almacenado en JSON para mantener datos en caso de refrescar la página, y ademas, utilizarlo en otros js (como el buscador) sin que reingrese los datos.
- Actualización sencilla de datos simplemente modificando el formulario inicial.
- Simulación de uso previo con archivo.json.
- Simulación de procesos de carga con librerias toastify y sweet alert.

## Por donde se le pide información al usuario

Las interacciones se realizan por medio de formularios y buscador (select).

## Como se le devuelve la info al usuario

Las informaciones se devuelven por medio de cuadros de textos, div y card (que ademas, tiene un boton que nos lleva al buscador de periodos).