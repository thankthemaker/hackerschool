---
title: NodeMCU mit Ultraschallsensor und OLED
parent: NodeMCU mit Micropython
has_children: false
nav_order: 2
permalink: /nodemcu/micropython/ultrasonic_sensor/
---

# NodeMCU mit Ultraschallsensor und OLED

## Anschlüsse

Schließe nun das OLED wie in dem Bild unten an. 

<img src="./wiring.png" width="250px"/>

Die Belegung in tabellarischer Form.

| OLED | NodeMCU | Beschreibung |
| --- | --- | --- |
| VCC | 3,3V | Spannungsversorgung |
| GND | GND | Masseleitung |
| SCL | Pin 5 (SCL) | Signal Clock |
| SDA | Pin 4 (SDA) | Signal Data |

## Anleitung

Lade zunächst die Bibliothek für das SSD1306 Display auf Deinen __NodeMCU__.

Anschließend musst Du die Bibliothek und die `machine`-Bibliothek importieren

```js
import machine
import ssd1306
```

Als nächstes musst Du den I2C-Bus initialisieren. Aus der Tabelle können wir entnehmen, dass SCL an Pin 5 und SDA am Pin 4 anliegen. 

```js
i2c = machine.I2C(scl=machine.Pin(5), sda=machine.Pin(4))
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

## Verwendete Bibliotheken

- OLED https://github.com/micropython/micropython/blob/master/drivers/display/ssd1306.py
