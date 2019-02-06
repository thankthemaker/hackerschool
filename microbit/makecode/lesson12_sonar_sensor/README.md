---
title: Lektion 12 - Sonarsensor
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 13
permalink: /microbit/makecode/lesson12_sonar_sensor/
---

# Lektion 12 - Sonar Sensor 

Ein Sonar-Sensor misst die Entfernung des Sensors zu einem anderen Objekt, z.B. einer Wand. Dafür wird ein unhörbarer Sonar-Ton gesendet und die Zeit gemessen, bis dieser Ton wieder vom Sensor empfangen wird.

In dieser Lektion wollen wir die Entfernung zwischen einem Entfernungssenor und einem beliebigen Objekt (z.B. Wand oder Hand) messen und den Abstand als Balkendiagramm auf dem 5x5 LED-Matrix-Display des Micro:Bit anzeigen.

## MakeCode-Erweiterung

Um einen Sonar-Sensor verwenden zu können, musst Du zunächst Deinen Makecode Editor um die __Sonar__ Bibliothek erweitern.

Wähle dazu unter dem Block _Fortgeschritten_ den Punkt _Erweiterungen_ und suche anschließend nach der __Sonar__ Bibliothek. Füge diese dem Makecode Editor hinzu. Dadurch erhälst Du einen weiteren Block.

![Sonar](./sonar.png "Sonar")

## Anschlüsse

Schließe jetzt einen Sonar-Sensor wie im folgenden Bild an die Anschlüsse __GND__, __3V__, __1__ und __2__ an.

![Wiring](./wiring.png "Wiring")

## Anleitung

Verwende eine Endlosschleife (Block __dauerhaft__) in der Du permanent mit dem Sonar-Block über die Anschlüsse __P1__ und __P2__ den Sonar-Ton sendest und empfängst. Zeige die Distanz auf in jedem Schleifendurchlauf auf dem LED-Display Deines Micro:Bit als __plot bar__ (Balkengrafik) an.

## Blocks

So könnte Dein Programm aussehen.

![Screenshot](./screenshot.png "Screenshot")
