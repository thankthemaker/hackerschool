---
title: Einleitung
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 1
permalink: /microbit/makecode/lesson00_introduction/
---

# Einleitung

## Einführung in Micro:Bit und den MakeCode Editor

### MakeCode Editor

Der MakeCode Editor ermöglicht die visuelle Programmierung des Micro:Bit über grafische Blöcke. Die einzelnen Blöcke können kontextabhängig inneinander verschachtelt werden um einen Programmablaufplan zu erstellen. 

![MakeCode Editor](../makecode_editor.png "MakeCode Editor")

Der MakeCode Editor enthält eine Vorschau die es ermöglicht die meisten Änderungen direkt in einem virtuellen Micro:Bit nachverfolgen zu können. 

Im Hintergrund erstellt der MakeCode Editor JavaScript-Code, der durch Umschalten des Modus direkt im MakeCode Editor eingesehen werden kann. Darüber hinaus ist es auch möglich, direkt Javascript Code zu schreiben und sich diesen in der visuellen Blockdarstelung anzeigen zu lassen.

#### Blöcke (Blocks)

Im MakeCode Editor gibt es verschiedene Blöcke.

##### Grundlagen (hell blau)

<img src="./basic.png" width="150px"/>

Unter diesem Punkt finden sich einige grundlegende Blöcke, z.B. die Hauptschleife oder der Zugriff auf das LED-Display.

Zwei besonder Blöcke sind die Blöcke __beim Start__  und __dauerhaft__. Beim Micro:Bit wird der Block __beim Start__ automatisch einmalig beim Starten oder Zurücksetzen ausgeführt. Daher eignet sich dieser Block um Aufgaben zu erledigen, die exakt einmal beim Programmstart ausgeführt werden sollen.
Alles Blöcke im Block __dauerhaft__ werden ständig und nacheinande wiederholt, er stellt also einen endlose Widerholung (siehe Schleifen) dar. Der Block eignet sich daher um Programmteile darin zu platzieren, die regelmäßig immer wieder ausgeführt werden müssen, z.B. das regelmäßige Abfragen eines Sensors.

##### Eingabe (pink)

<img src="./input.png" width="150px"/>

In diesem Abschnitt finden sich Blöcke um auf Bewegungen oder Knopfdrücke zu reagieren.

##### Musik (hell rot)

<img src="./music.png" width="150px"/>

Mit den Blöcken aus dem Bereich Musik können Töne und Melodien auf einen separat anschließbaren Lautsprecher ausgegeben werden.

##### LED (dunkel blau)

<img src="./led.png" width="150px"/>

##### Funk (magenta)

<img src="./radio.png" width="150px"/>

Hinter dem Punkt verbergen sich Blöcke um mit dem Funkmodulen des nRF51 Daten senden und empfangen zu können.

##### Schleifen (grün)

<img src="./loops.png" width="150px"/>

Programme beinhalten oft wiederkehrende Aufgaben. Um solche programmieren zu können, beinhaltet dieses Menü Blöcke um unterschiedliche Schleifen zu entwickeln. 

##### Logik (türkis)

<img src="./logic.png" width="150px"/>

##### Variablen (dunkel rot)

<img src="./variables.png" width="150px"/>

##### Mathematik (lila)

<img src="./math.png" width="150px"/>

##### Fortgeschritten (schwarz)

<img src="./advanced.png" width="150px"/>

### Micro:Bit programmieren (flashen)

#### Allgemein (alle Browser)

Nachdem Du Dein Programm geschrieben hast, muss Du dieses auf den __Micro:Bit__ übertragen, was beim __Micro:Bit__ sehr einfach ist da dieser sich als USB-Speichergerät am Betreibssystem meldet. Im Makecode-Editor musst Du zunächst Dein Programm als Programmcode (Hex-Datei)herunterladen, indem Du auf den Knopf `Herunterladen` drückst. 

<img src="./download.png" width="150px"/>

Die heruntergeladene Datei kannst Du dann einfach auf den Datenträger mit der Bezeichnung `MICROBIT` kopieren. Eine LED auf der Rückseite des __Micro:Bit__ blinkt während des Aufpielen des Programms (_flashen_). Sobald das _flashen_ abgeschlossen ist, startet der __Micro:Bit__ neu und führt Dein Programm aus.

#### Google Chrome

Mit dem Google Chrome Browser ist es möglich, Programme direkt auf den Micro:Bit zu übertragen. 