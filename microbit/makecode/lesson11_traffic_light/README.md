---
title: Lektion 11 - Verkehrsampel
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 12
permalink: /microbit/makecode/lesson11_traffic_light/
---

# Lektion 12 - Verkehrsampel

In dieser Lektion wollen wir eine Verkehrsampel simulieren. Dafür benötigst Du drei LEDs (1x rot, 1x gelb, 1x grün) und drei Widerstände mit 220 Ohm.

Die Verkehrsampel soll die Farben wechseln und dazwischen jeweils Pausen einhalten. In Deutschland folgt eine Ampel dabei folgenden vier Phasen.

![Ampelphasen](./traffic_lights_4_states.png "Ampelphasen")

Für diese Lektion wählen wir die Länge der Pausen zwischen den Wechseln der einzelnen Phasen mit 2 Sekunden und 5 Sekunden.
Die Phasen 1 und 3 sollen 5 Sekunden dauern.
Die Phasen 2 und 4 sollen 2 Sekunden dauern.

## Anschlüsse 

Die drei LEDs und die Widerstände schließt Du, wie in dem Bild dargestellt, mit Krokodilklemmen an die drei Anschlüsse __1__, __2__ und __3__ an. Zwischen den Kontakt am __Micro:Bit__ und der LED muss jeweils einer der Widerstände zwischengeschaltet werden.

![Verkehrsampel](./wiring.png "Verkehrsampel")

## Anleitung

Erstelle mit den Blöcken _pausiere_ aus dem _Grundlagen_-Block und dem Block _schreibe digitalen Wert_ aus dem _Pins_-Block die vier Phasen einer Ampelschaltung.

## Blocks

So könnte Dein Programm aussehen.

![Screenshot](./screenshot.png "Screenshot")

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

# Erweiterte Variante

Möchtest Du Deine Verkehrsampel noch besser machen? Dann füge einen Countdown hinzu, der anzeigt wie lange die Grün- und Rot-Phasen jeweils noch dauern.

## Anleitung

Erstelle zunächst zwei Funktionen:

1. Erstelle die Funktion _countdown_ und führe zunächst eine Variable _counter_ ein, die Du auf den Wert 5 setzt. Füge nun eine Schleife mit 5 Schleifendurchläufen hinzu. In jedem Schleifendurchlauf (jeder Iteration) soll zunächst der aktuelle Wert der Variablen _counter auf dem LED-Matix-Display des __Micro:Bit__ angezeigt und dann eine Pasue von 1 Sekunde eingehalten werden. Anschließend wird die Variable um den Wert 1 verringert (dekrementiert). 

2. Erstelle die Funktion _stop_, in der Du einen schrägen Strich auf dem LED-Matrix-Display anzeigst und dann eine Pause von 2 Sekunden einhälst.

Ersetze nun die Pausen Deines bisherigen Programms durch Aufrufe der beiden Funktionen.

## Blocks

So könnte die erweiterte Variante Deines Programms aussehen.

![Screenshot Advanced](./screenshot_advanced.png "Screenshot Advanced")

## Javascript-Code

{% highlight javascript %}
    {% include_relative main_advanced.js %}
{% endhighlight %}
