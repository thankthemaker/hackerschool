---
title: Lektion 11 - Verkehrsampel
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 12
permalink: /microbit/makecode/lesson11_traffic_light/
---

# Lektion 12 - Verkehrsampel

Hardware 
{: .label .label-green }

In dieser Lektion wollen wir eine Verkehrsampel simulieren. Dafür benötigst Du drei LEDs (1x rot, 1x gelb, 1x grün) und drei Widerstände mit 220 Ohm.

Die Verkehrsampel soll die Farben wechseln und dazwischen jeweils Pausen einhalten. In Deutschland folgt eine Ampel dabei folgenden vier Phasen.

<img src="./traffic_lights_4_states.png" width="150px"/>

Für diese Lektion wählen wir die Länge der Pausen zwischen den Wechseln der einzelnen Phasen mit 2 Sekunden und 5 Sekunden.
Die Phasen 1 und 3 sollen 5 Sekunden dauern.
Die Phasen 2 und 4 sollen 2 Sekunden dauern.

## Anschlüsse 

Die drei LEDs und die Widerstände schließt Du, wie in dem Bild dargestellt, mit Krokodilklemmen an die drei Anschlüsse `1`, `2` und `3` an. Zwischen den Kontakt am __Micro:Bit__ und der LED muss jeweils einer der Widerstände zwischengeschaltet werden.

<img src="./wiring.png" width="450px"/>

## Anleitung

Erstelle mit den Blöcken `pausiere` aus dem `Grundlagen`-Block und dem Block `schreibe digitalen Wert` aus dem `Pins`-Block die vier Phasen einer Ampelschaltung.

## Blocks

So könnte Dein Programm aussehen.

<!--img src="./screenshot.png" width="450px"/-->

<div style="position:relative;height:calc(300px + 5em);width:100%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---codeembed#pub:_DR1d5jHCTVpX" allowfullscreen="allowfullscreen" frameborder="0" sandbox="allow-scripts allow-same-origin"></iframe></div>

## Simulator

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_DR1d5jHCTVpX" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Javascript-Code

<!--
{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}
-->

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/#pub:_DR1d5jHCTVpX" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>

# Erweiterte Variante

Möchtest Du Deine Verkehrsampel noch besser machen? Dann füge einen Countdown hinzu, der anzeigt wie lange die Grün- und Rot-Phasen jeweils noch dauern.

## Anleitung

Erstelle zunächst zwei Funktionen:

1. Erstelle die Funktion `countdown` und führe zunächst eine Variable `counter` ein, die Du auf den Wert __5__ setzt. Füge nun eine Schleife mit __5__ Schleifendurchläufen hinzu. In jedem Schleifendurchlauf (jeder _Iteration_) soll zunächst der aktuelle Wert der Variablen _counter auf dem LED-Matix-Display des __Micro:Bit__ angezeigt und dann eine Pasue von __1__ Sekunde eingehalten werden. Anschließend wird die Variable um den Wert __1__ verringert (_dekrementiert_). 

2. Erstelle die Funktion `stop`, in der Du einen schrägen Strich auf dem LED-Matrix-Display anzeigst und dann eine Pause von __2__ Sekunden einhälst.

Ersetze nun die Pausen Deines bisherigen Programms durch Aufrufe der beiden Funktionen.

## Blocks

So könnte die erweiterte Variante Deines Programms aussehen.

<!--img src="./screenshot_advanced.png" width="550px"/-->

<div style="position:relative;height:calc(300px + 5em);width:100%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---codeembed#pub:_LVoc8XH0YJRJ" allowfullscreen="allowfullscreen" frameborder="0" sandbox="allow-scripts allow-same-origin"></iframe></div>

## Simulator

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_LVoc8XH0YJRJ" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Javascript-Code

<!--
{% highlight javascript %}
    {% include_relative main_advanced.js %}
{% endhighlight %}
-->

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/#pub:_LVoc8XH0YJRJ" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>

## Ampel

- [Ampelgehäuse 3D-Druck](https://www.thingiverse.com/thing:2775818)
- [Basisset LEDs](https://www.amazon.de/dp/B00N9WEY0S/ref=pe_3044161_185740101_TE_item)