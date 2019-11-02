---
title: Lektion 5 - Funktionen
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 6
permalink: /microbit/makecode/lesson05_first_function/
---

# Lektion 5 - Funktionen (functions)

Oft möchte man in einem Programm an verschiedenen Stellen dieselben Blöcke ausführen. Damit man diese nicht mehrfach hinzufügen muss, können diese Schritte in eine Funktion ausgelagert  und von verschiedenen Stellen aus aufgerufen werden.

In dieser Lektion wollen wir einen Countdown in einer Funktion implementieren, die wir dann beim Druck auf die Knöpfe `A` und `B` aufrufen.

## Anleitung

Erstelle eine Funktion und rufe diese beim Druck auf Button `A` oder `B` auf.

Die Funktion soll eine Variable `counter` definiern und mit dem initialen Wert __6__ belegen.

Innerhalb einer Schleife wird die Variable `counter` pro Schleifendurchlauf um die Zahl __1__ verringert.

In jedem Schleifendurchlauf wird der aktuelle Wert der Variablen `counter` auf dem Bildschirm dargestellt.

## Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot.png" width="350px">

## Simulator

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_2riK3J611VU5" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

## Makecode Projekt

https://makecode.microbit.org/#pub:_2riK3J611VU5