---
id: intro_introduccion
title: Conceptos de GTFS
sidebar_label: Conceptos de GTFS
slug: /
---

General Transit Feed Specification (GTFS) define un formato común para la planificación de servicio de transporte público ademas de la información geográfica.

Los archivos conocidos como _GTFS Feed_ se componen normalmente de un único archivo tipo _ZIP_ o archivo comprimido, el cual a su vez contiene una serie de tablas CSV (_comma separated values_) estas tablas son editables por medio de programas de tipo Calc-Sheet como por ejemplo _Microsoft Excel_.

Un ejemplo de tabla CSV puede ser el siguiente:

    agency_id, agency_name, agency_phone, agency_url
    123,"Transportes diversión", "+8 8888 8888", "http://transportesdiversion.com"

De el ejemplo anterior se observan dos líneas, la primera indica que elementos contiene la columna, la segunda y posteriores serán datos correspondientes a cada una de las empresas que se incluyan en el _GTFS Feed_.

Cada elemento recopilado en estas tablas modelan un aspecto específico de la información de transporte: paradas, rutas, viajes entre otros datos relacionados con el servicio.

Este documento procura aclarar ciertos conceptos básicos y procedimientos para utilizar de manera sencilla la herramienta y agilizar el proceso de empaquetado de la información.

