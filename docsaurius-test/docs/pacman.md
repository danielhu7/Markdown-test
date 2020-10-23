---
id: pacman
title: Uso del manejador del paquetes pacman
sidebar_label: Como usar
slug: /pacman
---

## Actualizar las firmas

Esto es para: Inicializar el contenedor de llaves

    sudo pacman-key --init

Esto es para: Decir que rellene la tabla de llaves de arch linux

    sudo pacman-key --populate archlinux

Esto es para: Ver el estado de las llaves actuales

    sudo pacman -Qi pacman gpgme  

Esto es para: Cambia las llaves viejas por las nuevas

    sudo pacman-key --refresh-keys

## Actualizar el menu de software

    sudo pacman -Sy

## Actualizar el sistema

    sudo pacman -Su

## Instalar un paquete en el sistema

    sudo pacman -S <nombre del paquete>