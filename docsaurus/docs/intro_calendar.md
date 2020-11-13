---
id: intro_calendar
title: Service days
sidebar_label: Servicio
slug: /calendar
---
El formato GTFS requiere de una tabla llamada _calendar.txt_ la cual contiene los datos correspondiente a diferentes servicios brindados por la empresa.

Los servicios representan un conjunto de días de la semana en los cuales los viajes se realizan de manera similar y se mantiene una continuidad en cuanto a la cantidad de viajes y los horarios de paradas, por lo general las empresas suelen tener dos servicios bien definidos, el de entre semana y el servicio de fines de semana, así como el servicio de semanas especiales, y de días festivos.

## Service ID

Identifica un servicio, el identificador debe ser único, se recomienda que sea fácil de inferir el servicio a partir de esta palabra, un ejemplo de _service ID_ es: **S\_WE** (_service weekend_) o **ORDINARIO-ES** para servicio ordinario entre semana. El _service ID_ dependerá de la empresa y de que identificación sea más apropiada con base en criterios propios.

## Service days

Los días de servicio se enumeran con dos valores, un número 0 en la tabla indica que ese día el servicio no está activo, y un número 1 en la tabla indica que ese día el servicio se encuentra activo.

## Start day

El día de inicio del servicio indica la fecha en que el servicio se comenzó a dar por parte de la empresa.

## End day

Este espacio de la tabla indica cual es el último día en que se prevé que acabará el servicio.
