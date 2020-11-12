---
id: shape_editor3
title: Barra inferior
sidebar_label: Barra inferior
slug: /Guia-barrabaja
---

La barra baja se compone por siete botones los cuales agregaran información tanto de la empresa como del recorrido o las paradas del transporte.

## agency

En ese sector podremos agregar o encontrar información sobre las agencias.
En la barra superior dispondremos de una barra para agregar la información, mientras que en la parte inferior en lista encontraremos las agencias agregadas previamente.

+ agency_id

Muestra la ID de la agencia en el registro.

+ agency_name

Muestra el nombre que tiene la agencia.

+ agency_url

Muestra la url de la agencia.

+ agency_timezone

Muestra la zona horaria o el sector donde opera la agencia.

+ agency_lang

Muestra el idioma utilizado en la agencia.

+ agency_phoen

Muestra el número telefónico de la agencia.

+ agency_fare_url

Url de la tarifa de la agencia.

+ agency_email

Muestra el correo de la agencia.

+ add

Este botón se encuentra en la barra de agregados junto a la información recién agregada, su función es guardar la información anteriormente añadida

+ remove

Este botón estará al final de la información de cada agencia, funciona para retirar una agencia de la lista.

## shapes

Los shapes son las rutas creadas, para crear una ruta primero se le asignara un nombre que pueda identificar fácilmente como esa ruta, luego en una barra de selección ubicada al lado derecho de esta se seleccionaran el punto de salida, las desviaciones y por último el punto de llegada o final de ruta, una vez creada la ruta solo se tendrá que guardar.

## Stops

En este recuadro encontraremos información sobre los puntos de parada que tenga la ruta, podremos observar su ID, nombre, descripción además de información de su URL.

+ Stop ID

En este cuadro se podrán poner ID para los puntos de parada, por defaut traerán el número de nodo generado, pueden ser nombrados como el administrador mejor lo prefiera, tanto como un listado de paradas como un número de paradas por sección.

+ Name

Aquí se ubicará el nombre de la parada, algún nombre corto que sea fácil de identificar.

+ Description

Descripción mostrará mucha más información sobre el punto de parada.

+ Informacion URL

Información mostrada desde la web con imágenes o información.

Una vez terminado de editar cada punto solo deberá ser guardado con el botón de la derecha.

## Routes

Routes mostrará información sobre las rutas.

+ Route ID

Le podra un id a la ruta, se puede usar el nombre de la calle principal por ejemplo.

+ Agency

Nombre de la agencia que dispone de la ruta.

+ Short name

Nombre corto para la ruta.

+ Long name

Nombre largo o descripción para la ruta.

+ Type

Tipo de trasporte usado en la ruta, esta puede ser tanto de tren como de metro o autobús

Para agregar o remover una ruta previamente agregada solo debe presionar el botón de la derecha de guardar o remover según lo que esté buscando.

## Calendar

En este bloque encontraremos información sobre la agenda de actividad.

+ Servis ID

Sirve para poner un nombre o una ID a la jornada.

+ Tabla de dias

Servirá para mostrar que días estará activo el servicio, un servicio puede estar disponible tanto por meses por un solo día.

+ Start day / End day

Mostrará el día en el que el servicio dará inicio y el final de este.

Los botones a la derecha guardaran o borraran horarios según lo quiera el administrador.

## Trips

+ Route

Una ruta previamente creada y nombrada en el apartado de rutas sera colocada en este recuadro

+ Trip ID

En este espacio el administrador le dara una ID a la ruta

+ Direction

Esta opcion es para definir la direccion de la ruta, si sale del punto seleccionado o si este es el lugar donde finaliza su ruta

+ Shape

En este lugar se le asigna alguno de los recorridos generados en Shapes

## Stop times

+ Trip

Selecciona el viaje al que se le quiera agregar la informacion, Esta informacion se mostrara con el nombre asignado en Trips

+ Stop

Seleccionara la parada, esta informacion se mostrara con el ID o nombre dado a la parada en Stops

+ Arrival times

Esta funcion es para asignar el horario  en el que una unidad llega a la parada

+ Departure time

Esta funcion es para asignar el horario  en el que una unidad sale de la parada

## Calendar

Esta funcion es para agregar dias en los que esta activo un servicio, puede tener un horario de semana, fines de semana, dias festivos o incluso por algun inprevisto en la ruta

Esta funcion mostrara que dia un servicio se comensara a utilizar

+ Service ID

El administrador asignara un ID o un nombre para el servicio que se dara

+ Días

Se seleccionaran los dias que sel servicio estara funcionando

+ Día inicial y final

Aqui se pondra la fecha en la que el servicio inicia y el dia en que termina

## Scheme

Esta funcion es para asignar un horario o servicio a una viaje o ruta

+ Service ID

Seleccione el servicio u horario previamente creado en Calendar

+ Trip ID

Seleccione la ruta o viaje previamente creado en Trips
