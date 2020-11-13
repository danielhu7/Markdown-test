---
id: intro_trip
title: Trips
sidebar_label: Viajes
slug: /trips
---

La tabla de _trips_ nos indica cada uno de los viajes realizados en uno o más rutas. Los viajes comienzan en alguno de los puntos extremos del recorrido, suelen ser estaciones de salida o de llegada desde los cuales se hace la última parada o la primer parada para transportar pasajeros.

Los viajes tienen varias características:

+ Tienen un horario de vigencia, un viaje está vigente siempre y cuando se encuentre en un día de servicio y el vehículo se encuentre en curso o en espera para comenzar el recorrido.
+ Cada viaje tiene un identificador único durante el día, y los diferencia principalmente el sentido en el cual se recorre la ruta, así como el Shape (_recorrido_) y la hora sale de la estación y a la cual llega a la última parada, un ejemplo de un viaje es el siguiente:

    trip_id, route\_id, direction\_id, shape\_id
    sj1130cg, CG-SJ, 1, shp\_SJ_CG
El _trip ID_ nos permite identificar el viaje, suponemos un viaje que sale a las 11:30 AM de San José, Costa Rica hacia Cartago, este atraviesa una ruta, la ruta **Cartago - San José** cuyo ID de ruta es CG-SJ, la direción de recorrido nos permite diferenciar cuando el viaje es un viaje entrante o saliente, en este caso de Cartago, por último el _Shape ID_ ayudará a asignar una forma geo-espacial al movimiento del vehículo entre ambas ciudades.

## Trip ID

Identifica el viaje con respecto a otros viajes realizados durante el mismo servicio, variando por hora de viaje y dirección del recorrido, así como forma del recorrido.

Se recomienda que el _trip ID_ ayude a inferir fácilmente el viaje para diferenciarlo de los demás ya sea por la hora o la dirección, un ejemplo de _trip ID_ es el siguiente:

    MANGOS0650SJ
El viaje anterior sale de _Los Mangos_ a las 6:50 AM en dirección hacia San José, así podemos diferenciarlo de:

    SJ0650MANGOS
El cual sale de _San José_ a la misma hora.

Nuevamente es necesario decir que esto es únicamente una sugerencia, ya que es posible identificar los trips únicamente por identificadores tan sencillos como "**T42**" para un trip en específico cuyas elementos se encuentra almacenados en una base de datos diferente o en una hoja de cálculo, como _MS Excel_, pero esto dependerá de la empresa y como esta administre la información.

## Trip direction

Dirección en la cual se da el viaje, la ruta por lo general da servicio principalmente a un poblado exterior a la capital, por ende, puede definirse una dirección _saliente, (ida)_ al viajar hacia la capital, y _entrante, (regreso)_ al volver de la misma.

## Shape

Este elemento de la tabla de viajes asigna un recorrido o una forma de recorrido al viaje, este recorrido debe ajustarse al recorrido real que realiza el vehículo durante todo el trayecto de la primer parada del viaje hacia la última estación o parada.
