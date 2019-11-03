---
title: Lektion 10 - Lautsprecher
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 11
permalink: /microbit/makecode/lesson10_adding_speaker/
---

# Lektion 10 - Lautsprecher anschließen 

Hardware
{: .label .label-green }

Dein __Micro:Bit__ verfügt über die Möglichkeit Töne und Melodien abzuspielen. Die entsprechenden Blöcke findest Du unter dem Punkt `Musik`. Leider besitz der Micro:Bit selbst aber keinen Lautsprecher, über den die Töne ausgegeben werden können.

In dieser Lektion wollen wir deshalb einen zusätzlichen Lautsprecher an der Kontaktleiste des __Micro:Bit__ anschließen und über diesen Töne und Melodien ausgeben.

## Anschlüsse

Schließe einen Lautsprecher an Deinen __Micro:Bit__ an. Verbinde dazu, wie in dem Bild dargestellt, den Anschluß `0` und `GND` jeweils mit einer Krokodilklemme mit dem ersten und dem letzten Kontakt des Klinkensteckers Deines Lautsprechers.

<img src="./wiring.png" width="250px"/>

## Anleitung

Verwende den `beim Start` Block um beim Einschalten oder Zurücksetzen des __Micro:Bit__ die Melodie `Dadadum` abzuspielen.

Erstelle zusätzlich eine Endlosschleife (Block `dauerhaft`) in der Du abwechselnd für `einen Takt` die Note  `Mittleres C` abspielst und `einen Takt` lang eine `Pause` einlegst.

## Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot.png" width="450px"/>

## Javascript-Code

{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}

## Makecode Projekt

[Lektion 10 (Lautsprecher) als Makecode-Projekt](https://makecode.microbit.org/#pub:_gMVR0cTtb8Rx)