---
title: Lektion 6 - Funkverbindung
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 7
permalink: /microbit/makecode/lesson06_radio/
---

# Lektion 6 - Daten per Funk übertragen

Dein Micro:Bit verfügt über ein eingebautes Funkmodul, mit dem Daten zwischen zwei oder mehreren __Micro:Bit__ übertragen werden können.

Nutze das Funkmodul um den Text "boom" von einem __Micro:Bit__ an einen anderen zu übertragen sobald Deinen __Micro:Bit__ schüttelst. Auf dem anderen __Micro:Bit__ soll daraufhin für etwa eine Sekunde das _Totenkopf_-Icon angezeigt werden.

## Anleitung

Nutze aus dem Block _Eingabe_ das Ereignis _wenn geschüttelt_ und aus dem Block _Funk_ den Block _sende Zeichenfolge_ um den Code für den sendenden __Micro:Bit__ zu erstellen.

Verwende zusätzlich aus dem Block _Funk_ den Block _wenn Datenpaket Empfangen_ um auf dem empfangenden __Micro:Bit__ auf ein Datenpaket zu reagieren.

__ACHTUNG:__ In dieser Lektion werden zwei __Micro:Bits__ mit demselben Code programmiert. D.h. beide können Datenpakete senden und empfangen.

## Blocks

So könnte Dein Programm aussehen.

![Screenshot](./screenshot.png "Screenshot")
