---
title: Maqueen Lektion 4 -  Neopixel
parent: Microbit Maqueen Roboter
grand_parent: Microbit
has_children: false
nav_order: 4
permalink: /microbit/maqueen/lesson04_neopixel/
---

# Maqueen - Neopixel LEDs

Neopixel sind kleine LEDs, die in allen Farben leuchten können. Der Maqueen-Roboter verfügt über vier solcher Neopixel an seiner Unterseite. In dieser Lektion sollen die Neopixel zum Leuchten gebracht werden.

## Anleitung

Um die Neopixel verwenden zu können, musst Du zunächst Deinen Makecode Editor um die Neopixel Bibliothek erweitern.

Wähle dazu unter dem Block _Fortgeschritten_ den Punkt _Erweiterungen_ und suche anschließend nach der `Neopixel` Bibliothek. Füge diese dem Makecode Editor hinzu. Dadurch erhälst Du einen weiteren Block.

<img src="./neopixel.png" width="150px"/>

Über diesen neuen Block kannst Du nun Neopixel-LEDs steuern.

Der Maqueen-Roboter hat vier Neopixel LEDs, die über den PIN `P15` angesprochen werden können. Damit Du die Neopixel verwenden kannst, musst Du diese beim Start des Programms einer Variablen zuweien. Bei den Neopixel-Blöcken findest Du dazu den speziellen Block `ändere ... auf Neopixel am Pin ... mit ... Pixeln`.

Füge diesen Block dem Start-Block hinzu und ändere den PIN auf `P15` und den Wert für die Anzahl der Pixel auf `4`. Den Modus kannst Du auf dem Wert `RGB (GRB Format)` lassen.

Setze danach, innerhalb des Start-Blocks, zunächst die Helligkeit auf `50` und zeige auf den Neopixel einen Regenbogen von den Farbtönen `1` bis `360`.

Die Neopixel sollten nun in unterschiedlichen Farben leuchten.

Nutze jetzt den Block `... rotiere Neopixel um ...` in einer Dauerschleife  mit dem Wert `1`und füge danach in jedem Schleifendurchgang eine Pause von `1` Sekunde hinzu. Die Neopixel sollten nun im Sekundentakt ihre Farbe wechseln.

## Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot.png" width="450px"/>

<!--
## Ergebnis (Simulation)

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_48s8eui0Y0d7" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>
-->

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

## MakeCode Projekt

[Maqueen Lektion 4 - Neopixel LEDs](https://makecode.microbit.org/_48s8eui0Y0d7)