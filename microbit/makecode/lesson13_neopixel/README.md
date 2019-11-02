---
title: Lektion 13 - Neopixel
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 14
permalink: /microbit/makecode/lesson13_neopixel/
---

# Lektion 13 - Neopixel 

Hardware
{: .label .label-green }

MakeCode Erweiterung
{: .label .label-yellow }

In dieser Lektion wollen wir spezielle LEDs zum leuchten bringen. Das Spezielle an diesen LEDs ist, dass eine einzelne LED sowohl rot als auch grün als auch blau leuchten kann. Durch Mischung der drei Grundfarben kann jede beliebige Farbe erzeugt werden, ähnlich wie bei einem Farbmalkasten. Diese LED sind unter dem Namen Neopixel bekannt. 

<img src="./neopixel_stick.jpg" width="200px"/>

<img src="./neopixel_single.jpg" width="200px"/>

Ziel der Lektion ist es ein einzelnes Neopixel oder einen Streifen von mehreren Neopixeln in den Regenbogenfarben leuchten zu lassen. Dazu wird jedes Pixel nach und nach mit einer anderen Farbe zum leuchten gebracht. Hat ein Pixel alle Farben einmal angezeigt, beginnen wir von vorne.

## MakeCode-Erweiterung

Um Neopixel verwenden zu können, musst Du zunächst Deinen Makecode Editor um die Neopixel Bibliothek erweitern.

Wähle dazu unter dem Block _Fortgeschritten_ den Punkt _Erweiterungen_ und suche anschließend nach der `Adafruit Neopixel` Bibliothek. Füge diese dem Makecode Editor hinzu. Dadurch erhälst Du einen weiteren Block.

<img src="./neopixel.png" width="150px"/>

Über diesen neuen Block kannst Du nun Neopixel-LEDs steuern.

## Anschlüsse

Schließe nun eine Neopixel-LED mit drei Krokodilklemmen an Deinen __Micro:Bit__ an. Dabei ist es egal, ob es sich um einen Neopixel-Stick oder eine einzelne Neopixel-LED handelt, die Anschlussart ist gleich.

<img src="./neopixel_single_pins.jpg" width="200px"/>

Für diese Lektion benötigen wir nur drei _"Beinchen"_, die wie folgt angeschlossen werden.

| Neopixel | Micro:Bit | Erklärung|
|---|:---|:---|
|DIN | P2 | Steuerleitung|
|VDD | 3V | Spannungsversorgung (3V-7V)|
|GND | GND | Masseleitung|

<img src="./wiring.png" width="450px"/>

## Anleitung

Verwende den `beim Start` Block um beim Einschalten oder Zurücksetzen des __Micro:Bit__ die Neopixel Bibliothek zu initialisieren, d.h. festzulegen, wieviele Pixel (Anzahl LED) Dein Neopixel hat, an welchem Anschluss Du diesen per Krokodilklemme angeklemmt hast und welche Farben die einzelnen LEDs verwenden können.
Verwende zusätzlich den Block `zeige Regenbogen von Farbton`, der dafür sorgt dass die einzelnen Pixel mit unterschiedlichen Farben belegt werden. Damit die Anzeige aktuallisiert wird, benötigst Du zusätzlich den `anzeigen` Block. 

Erstelle zusätzlich eine Endlosschleife (Block `dauerhaft`) in der Du die Pixel um jeweils __1__ rotierst, die Anzeige aktuallisierst und dann eine Pause von __500 ms__ machst.

## Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot.png" width="450px"/>

## Simulator

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_cY8YP83X1gJW" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

## Makecode Projekt

https://makecode.microbit.org/#pub:_cY8YP83X1gJW