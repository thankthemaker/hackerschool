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

In dieser Lektion wollen wir einen Countdown in einer Funktion implementieren, die wir dann beim Druck auf einen Knopf aufrufen.

## Anleitung

Erstelle eine Funktion und rufe diese beim Druck auf Button __A__ auf.

Die Funktion soll eine Variable _counter_ definiern und mit dem initialen Wert 6 belegen.

Innerhalb einer Schleife wird die Variable _counter_ pro Schleifendurchlauf um die Zahl 1 verringert.

In jedem Schleifendurchlauf wird der aktuelle Wert der Variablen _counter_ auf dem Bildschirm dargestellt.

## Blocks

So könnte Dein Programm aussehen.

![Screenshot](./screenshot.png "Screenshot")

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}
