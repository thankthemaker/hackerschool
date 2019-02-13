---
title: Lektion 10  - OLED
parent: Microbit Micropython
grand_parent: Microbit
has_children: false
nav_order: 11
permalink: /microbit/micropython/lesson10_adding_display/
---

# Lektion 10 - OLED anschließen 

## Hardware

In diese Lektion schließt Du an Deinen __Micro:Bit__ ein zusätzliches OLED an.

### OLED 64x128 I2C 0,96'' Monochrome Display

Das hier verwendete Display hat eine Größe von 0,96 Zoll, dies entspricht etwa 2,4 cm in der Diagonale. Das OLED kann 64x128 Bildpunkte (Pixel) in einer Farbe (monochrome) darstellen. Angeschlossen wird es über den I2C-Bus, eine Verbindungsart bei der bis zu 127 Geräte gleichzeitig über lediglich zwei Leitungen (SCL und SDA) gesteuert werden können.

<img src="./oled.png" width="250px"/>


## Anschlüsse

Schließe nun das OLED wie in dem Bild unten an. 

<img src="./wiring.png" width="250px"/>

Die Belegung in tabellarischer Form.

| OLED | Micro:bit | Beschreibung |
| --- | --- | --- |
| VCC | 3V | Spannungsversorgung |
| GND | GND | Masseleitung |
| SCL | Pin 19 (SCL) | Signal Clock |
| SDA | Pin 20 (SDA) | Signal Data |

## Anleitung

Lade zunächst die Bibliothek für das SSD1306 Display auf Deinen __Micro:Bit__.

Anschließend musst Du die Bibliothek und die `machine`-Bibliothek importieren

```js
import machine
import ssd1306
```

Als nächstes musst Du den I2C-Bus initialisieren. Aus der Tabelle können wir entnehmen, dass SCL an Pin 19 und SDA am Pin 20 anliegen. 

```js
i2c = machine.I2C(scl=machine.Pin(19), sda=machine.Pin(20))
````

Bevor wir das OLED im Programm nutzen können, muss erst noch eine Instanz der Klasse SSD1306_I2C erstellt werden. Dem Konstruktor übergeben wir die Anzahl der Pixel in der Horizontalen (128), die Anzahl der Pixel in der Vertikalen (64), das I2C-Objekt. Der letzte Parameter gibt die I2C-Adresse des Displays an. Dies ist notwendig da der I2C-Bus bis zu 127 Geräte über die zwei Leitungen ansprechen kann und daher die Adresse benötigt wird, um das jeweilige Gerät anzusprechen.

```js
oled = ssd1306.SSD1306_I2C(128, 64, i2c, 0x3c)
```

Jetzt kannst Du das Display ansprechen und z.B. Text darstellen.

```js
oled.fill(0)
oled.text("Hello World", 0, 0)
oled.show()
```

## Python-Code

{% highlight python %}
    {% include_relative main.py %}
{% endhighlight %}

## Verwendete Bibliotheken

- [SSD1306](https://github.com/fizban99/microbit_ssd1306)

## Beispiele

- [0,96'' OLED](https://www.littlebird.com.au/learn/77/0-96-oled-screen-with-micro-bit)