---
id: intro_route
title: Routes
sidebar_label: Rutas
slug: /routes
---

Las rutas son el área en el cual se brinda el servicio de transporte, junto con todos los trayectos intermedios entre los puntos extremos del recorrido, las rutas no tienen dirección, es decir, es la misma ruta tanto si se recorre en un sentido o en sentido contrario, las rutas por lo general conectan dos centros de población y las empresa puede brindar el servicio de transporte para lugares intermedios en el recorrido, de manera total o parcial, las rutas nacionales suelen ser vías de comunicación entre centros de población rural y la capital, así por ejemplo la ruta 209 comunica a San José de Costa Rica, con Acosta.

En el contexto de GTFS las rutas son definidas por la empresa que brinda el servicio, no es mandatorio el utilizar la misma identificación usada por instituciones gubernamentales, sin embargo si es una buena práctica el dar a entender de alguna forma a que ruta se refiere y que sea fácil de diferenciar por parte de los usuarios.

## Route ID

Identifica la ruta, se recomienda utilizar números y/o letras, por ejemplo 209-AC o R_ACOSTA, etc. El _route ID_ es información que se utilizará mayormente para ordenar los viajes en cuanto a su recorrido y zona de servicio.

## Agency

Este espacio indica la empresa encargada de brindar el servicio en la ruta, la empresa se indica por medio del _Agency ID_ el cual a su vez se especifica en la tabla de empresas/agencias.

## Short name

La columna _route_short_name_ permite otorgar un nombre sencillo a la ruta, este nombre se suele colocar en elementos del vehículo, como el _Display_ de ruta en la parte alta del frente a la vista de los usuarios, por ejemplo: "**San Gabriel - San José**" con esto los usuarios de otras rutas podrán descartar el transporte y aquellos que requieran moverse hacia San Gabriel podrán distinguir el vehículo.

## Long name

El nombre largo de la ruta describe de manera más detallada el área de servicio, puede presentar información más útil como los sitios intermedios o los lugares extremos del recorrido para dar al usuario una mejor idea de la cobertura del servicio.

## Type

Este elemento de la tabla permite inferir el tipo de vehículo que recorre la ruta. El formato GTFS identifica los tipos de ruta por medio de números naturales comenzando en 1. para metro, 2. tren, 3. autobús, los demás valores incluyen otro tipo de transportes que no son de interés en este momento.
