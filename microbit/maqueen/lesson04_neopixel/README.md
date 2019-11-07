---
title: Maqueen Lektion 4 -  Neopixel
parent: Microbit Maqueen Roboter
grand_parent: Microbit
has_children: false
nav_order: 4
permalink: /microbit/maqueen/lesson04_neopixel/
---

# Maqueen - Neopixel LEDs

## Anleitung

Um Neopixel verwenden zu können, musst Du zunächst Deinen Makecode Editor um die Neopixel Bibliothek erweitern.

Wähle dazu unter dem Block _Fortgeschritten_ den Punkt _Erweiterungen_ und suche anschließend nach der `Adafruit Neopixel` Bibliothek. Füge diese dem Makecode Editor hinzu. Dadurch erhälst Du einen weiteren Block.

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

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

## MakeCode Projekt

https://makecode.microbit.org/_9Ys0MV27Wc0f