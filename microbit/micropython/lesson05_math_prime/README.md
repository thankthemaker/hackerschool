---
title: Lektion 5  - Primzahlen Berechnung
parent: Microbit Micropython
grand_parent: Microbit
has_children: false
nav_order: 6
permalink: /microbit/micropython/lesson05_math_prime/
---

# Lektion 5 - Primzahlen Berechnung

In dieser Lektion berechnest Du alle Primzahlen bis 100. Die Eigenschaft einer Primzahl ist, dass sie nur durch die Zahl `1` und durch sich selbst ohne Rest teilbar ist. 

## Anleitung

Definiere zunächst eine Funktion `prim` in der Du die Prüfung auf eine Primzahl implementierst. Die Funktion nimmt als Parameter eine Zahl entgegen und gibt entweder __TRUE__ zurück wenn es sich um eine Primzahl handelt oder __FALSE__ wenn die Zahl keine Primzahl darstellt.

```python
def prim(candidate):
```
In der Funktion beginnst Du damit drei einfache Fälle abzuprüfen:

1. Die Zahl ist kleiner 2
Falls die Zahl kleiner als 1 ist, kann es sich nicht um eine Primzahl handeln. Die Zahl `1` ist per Definition keine Primzahl.

```python
if candidate < 2:
    return False
```

2. Handelt es sich um die Zahl `2`
Wenn die zu prüfende Zahl die Zahl `2` ist, handelt es sich um die erste Primzahl und wir können __TRUE__ zurückgeben.

```python
if candidate == 2:
    return True
```

3. Handelt es sich um eine gerade Zahl, die größer 3 ist
Gerde Zahlen größer `2` können niemals Prizahlen darstellen, sie sind immer auch durch die Zahl `2`teilbar.

```python
if candidate % 2 == 0:
    return False
```

Damit kannst Du bereits einen Großteil der Zahlen prüfen. Jetzt fehlen noch die ungeraden Zahlen größer oder gleich `3`. Für die Prüfung dieser Zahlen kannst Du einen sehr einfachen Algorithmus verwenden. Dieser ist zwar langsam, was jetzt aber erst einmal nicht stört.

Für jede zu prüfende ungerade Zahl schaust Du einfach, ob diese durch eine kleineren ungerade Zahl ohne Rest teilbar ist. Gerade Teiler brauchen wir nicht mehr prüfen, diese sind ja bereits im dritten einfachen Fall ausgeschlossen worden.

```python
x = 3
while True:
    if x < candidate:
        if candidate % x == 0:
            return False
        x = x + 2
    else:
        return True
```

## Python-Code

{% highlight python %}
    {% include_relative main.py %}
{% endhighlight %}

## Optimierung

Wie gesagt, die Prüfung der ungeraden Zahlen ist eine sehr langsame Methode. Schneller geht es, wenn wir nur die Zahlen Prüfen, deren Querwurzel kleiner oder gleich der zu prüfenden Zahl sind. Hier ist die optimierte Variante, probiere es aus:

```python
import math

x = 3
while True:
    if x <= math.sqrt(candidate):
        if candidate % x == 0:
            return False
        x = x + 2
    else:
        return True
```

Warum dies so ist, kannst Du Dir ja mal selbst überlegen.