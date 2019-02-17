---
title: Lektion 2  - Buttons
parent: Microbit Micropython
grand_parent: Microbit
has_children: false
nav_order: 3
permalink: /microbit/micropython/lesson02_buttons/
---

# Lektion 2 - Buttons

In dieser Lektion nutzen wir einen der beiden Knöpfe (Button) um ein Ereignis auszulösen, das wir im Code auswerten um dann ein Symbol anzuzeigen, eine kurze Pause einzulegen und dann das Display wieder zu löschen.

## Anleitung

Importiere zunächst die `machine`-Bibliothek um Zugriff auf die Funktionen des Microbit zu erhalten.

```js
from microbit import *
```

Erstelle anschließend eine Endlosschleife indem Du eine `while`-Schleife erstellst und als Bedingung `True` einsetzt, also eine Wert der immer _wahr_ ist.

```js
while True:
    # hier kommt Dein Code in der Schleife hin
```

Prüfe nun ob in dem aktuellen Schleifendurchlauf der Knopf `A` gedrückt wurde. Verwende dazu eine ìf`-Bedingung.

```js
if button_a.was_pressed():
    # hier kommt Dein Code hin, der beim Druck auf den Knopf ausgeführt wird
```

Male dann in dem `if`-Block ein Symbol auf das LED-Matrix-Display, warte 2 Sekunden und lösche dann das Display wieder.

```js
display.show(Image.TRIANGLE)
sleep(2000)
display.clear()
```

__ACHTE__ auf die korrekte Einrückung der einzelnen Code-Blöcke.

## Python-Code

{% highlight python %}
    {% include_relative main.py %}
{% endhighlight %}
