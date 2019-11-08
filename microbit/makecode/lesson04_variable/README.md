---
title: Lektion 4 - Variablen
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 5
permalink: /microbit/makecode/lesson04_variable/
---

# Lektion 4 - Variablen (variables)

In dieser Lektion beschäftigen wir uns damit, wie wir uns im Programm Werte temporär merken können. Wollen wir z.B. in einer Schleife wissen im wie vieltem Schleifendurchgang (welcher _Iteration_) wir uns befinden, so müssen wir uns diesen Wert merken. 

## Anleitung 

Definiere eine Variable mit dem Namen `counter`. Setze den Anfangswert der Variablen `counter` auf __0__.

Erstelle eine Schleife mit __10__ Durchgängen und erhöhe die Variable `counter` in jedem Durchgang um den Wert __1__.

Stelle bei jedem der __10__ Schleifendurchgänge den Wert der Variablen `counter` auf dem LED-Bildschirm dar.

## Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot.png" width="250px"/>

## Ergebnis (Simulation)

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_Ur6HyViaCY8E" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

## Makecode Projekt

[Lektion 4 (Variablen) als Makecode-Projekt](https://makecode.microbit.org/#pub:_Ur6HyViaCY8E)