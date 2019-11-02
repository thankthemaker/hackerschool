---
title: Lektion 7 - Bewegung per Funk übertragen
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 8
permalink: /microbit/makecode/lesson07_radio_gravity/
---

# Lektion 7 - Bewegungen per Funk übertragen

In der vorherigen Lektion hast Du bereits gelernt, dass Dein __Micro:Bit__ über ein eingebautes Funkmodul verfügt, mit dem Daten zwischen zwei oder mehreren __Micro:Bit__ übertragen werden können.

In dieser Lektion wollen wir zusätzlich den Beschleunigungssensor verwenden und den gemessenen Wert per Funk übertragen.

## Anleitung

Nutze den Block `wenn nach links neigen` aus dem `Eingabe`-Block um ein Datenpaket zu senden, wenn der __Micro:Bit__ nach links geneigt wird. Miss mit dem Block `Beschleunigung (mg) y` den vertikalen Beschleunigungwert und sende ihn mit dem Block `schicke Wert "name" = 0 über Funk`. Verwende dabei den Text __L__ als _Name_.

Nutze einen weitern Block `wenn nach rechts neigen` aus dem `Eingabe`-Block um auf die gleiche Weise den Bechleunigungswert zu senden. Verwende dabei den Text __R__ als _Name_. __L__ und __R__ dienen dabei als Abkürzungen für recht bzw. links.

## Blocks

So könnte Dein Programm aussehen.

<!--img src="./screenshot.png" width="450px"/-->

<div style="position:relative;height:calc(300px + 5em);width:100%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---codeembed#pub:_F8ha4KFf4aPD" allowfullscreen="allowfullscreen" frameborder="0" sandbox="allow-scripts allow-same-origin"></iframe></div>

## Simulator

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_F8ha4KFf4aPD" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Javascript-Code

<!--
{% highlight javascript %}
    {% include_relative main.js %}
{% endhighlight %}
-->

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/#pub:_F8ha4KFf4aPD" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>