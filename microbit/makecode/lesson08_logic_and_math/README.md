---
title: Lektion 8 - Logik und Mathematik
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 9
permalink: /microbit/makecode/lesson08_logic_and_math/
---

# Lektion 8 - Logik und Mathematik

In dieser Lektion verwendest Du erste Mathematik- und Logik-Funktionen um einen einfachen Taschenrechner zu programmieren, der zwei zufällige Zahlen miteinander addiert. 

## Anleitung

Wähle beim _Druck auf den Knopf_ __A__ zwei zufällige Zahlen zwischen __1__ und __10__ und weise diese den _Variablen_ `A` und `B` zu. Zeige nun die Rechenaufgabe `A + B` auf dem LED-Matrix-Display an.
Beim _Schütteln_ des __Micro:Bit__ soll das Ergebnis der Aufgabe berechnet werden und ebenfalls auf dem Display dargestellt werden.

## Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot.png" width="350px"/>

## Simulator

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_4TJFfa5VJfPK" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

## Makecode Projekt

https://makecode.microbit.org/#pub:_4TJFfa5VJfPK