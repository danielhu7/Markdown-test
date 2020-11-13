---
id: editor_mapa
title: Uso del mapa
sidebar_label: Mapa
slug: /Guia-mapa
---

El mapa cubrirá la mayor parte de la pantalla, este podrá ser ocultado presionando el botón de **Map** ubicado en la barra de herramientas (a la izquierda).
Un clic sostenido sobre el mapa permitirá desplazarse mientras que en la esquina superior izquierda haciendo uso de los botones _más_ y _menos_ se podrá alejar o acercar la vista, a su vez con la rueda del ratón se logrará el mismo efecto.

El mapa cumple dos funciones primordiales:
+ Identificar las paradas y su posición geográfica, realizar edición del ID y el nombre.
+ Dibujar el recorrido sobre el mapa, con el fin de que sea visible el desplazamiento del vehículo y así tener una mejor idea de donde se encuentra para facilitar al usuario el seguimiento.

## Dibujar un recorrido

Para dibujar un recorrido en el mapa es necesario utilizar el mouse, la herramienta debe estar preferiblemente en pantalla completa o maximizada para aprovechar de mejor forma el espacio del mapa, los recorridos se encuentran conformados por puntos y líneas rectas que unen estos puntos, conforme más puntos coloquemos la forma del recorrido será más detallada y tendrá un aspecto muy similar al del verdadero recorrido realizado por el vehículo.

Para agregar nodos (puntos) debemos ir a la barra lateral que se encuentra a la izquierda, y en la opción de _acción_ (action) es necesario seleccionar "_add_" con esto el programa interpretará cada click sobre el mapa como un sitio en el cual se debe agregar un nodo, el primer nodo suele ser el punto de partida de un viaje, es decir, la primer parada de un recorrido, es por esto que para estos casos especiales que delimitan el recorrido se utilizan el tipo de nodo llamado _endpoint_ los extremos del recorrido, un recorrido comienza en uno de estos nodos y conforme agregamos nodos nuevos estos se unirán con el último nodo que se haya seleccionado, en general el nodo selecionado es el último nodo que ha sido agregado, pero si es necesario cambiar este nodo es posible hacerlo usando el _action -> select_.

## Editar nodos

Para editar un nodo debemos utilizar la barra lateral, al definir la acción como _"select"_ es posible editar las propiedades por medio de una pequeña ventana o popup que surge en el mapa al hacer click sobre el nodo de interés, es importante que la acción esté configurada como _"select"_ ya que en casos contrarios el comportamiento al hacer click sobre el nodo será otro.

