# Maqueen Infrarot gesteuert

## Infrarot Codes ermitteln

Für diese Lektion benötigst Du eine Infrarot-Fernbedienung, die sogenannte Graycodes sendet. Die meisten Fernbedienungen funktionieren auf diese Weise, daher sollte in jedem Haushalt eine geeignete Fernbedienung zu finden sein.
Um den Roboter mit der IR-Fernbedienung steueren zu können, musst Du Dir zunächst 5 Tasten auf der Fernbedienung aussuchen.

<img src="./ir-remote.jpeg" width="300px"/>

Die Fernbedienung in dem Bild hat vier Pfeile und einen Kreis, die wir verwenden können. Hat Deine Fernbedienung nur Zahlen, kannst Du z.B. die Zahlen 2, 4, 5, 6 und 8 verwenden, die in der gleichen Art angeordnet sind.

Um die gesendeten Codes der jeweiligen Tasten zu ermitteln, benötigst Du aus dem Maqueen-Blöcken den Block "on IR received". In diesem Block gibst Du einfach den empfangenen Code mit dem Block "zeige Text" auf dem LED-Display des Micro:Bit aus.

Notiere Dir die Codes in einer Tabelle, etwa so wie hier für das oben abgebildete Exemplar.

| Taste | Code | Funktion  |
| :---:| :---:| :---:|
| Pfeil hoch | 66 | fahre vorwärts |
| Pfeil runter | 67 | fahre rückwärts |
| Pfeil links | 68 | drehe links |
| Pfeil rechts | 69 | drehe rechts |
| Kreis | 111 | stop |

### Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot1.png" width="450px"/>

### Javascript-Code

{% highlight javascript %}
    {% include_relative main1.js %}
{% endhighlight %}

## Maqueen per IR-Ferbedienung steuern

Wenn Du die Codes der IR-Fernbedienung ermittelt und notiert hast, kannst Du nun auf die entsprechenden Codes reagieren und die Motoren des Roboters entsprechend bewegen.

Dazu benötigst Du zunächst wieder den "on IR receiced" Block aus dem Maqueen-Blöcken. Zusätzlich benötigst Du fünf "Wenn ... dann"-Blöcke aus den Logik-Blöcken und fünf "="-Blöcke aus den Mathematik-Blöcken.

Prüfe nun jeweils in einen "wenn ... dann"-Block auf die jeweiligen Codes der Fernbedienung. In dem "wenn ... dann" Block kannst Du die Motoren des Maqueen steuern. Verwende dazu die "Motor ... dir ... speed"-Blöcke aus den Maqueen-Blöcken.

Hier ein Beispiel:

Wenn z.B. der Code "66" empfangen wird, soll der Maqueen mit maximaler Geschwindigkeit nach vorne fahren. Dazu benötigen wir den Block "Motor ... dir ... speed" und setzen die Werte wie folgt:

```
Motor "All" dir "CW" speed "255"
```

### Blocks

So könnte Dein Programm aussehen.

<img src="./screenshot2.png" width="450px"/>

### Ergebnis (Simulation)


### Javascript-Code

{% highlight javascript %}
    {% include_relative main2.js %}
{% endhighlight %}

### MakeCode Projekt

https://makecode.microbit.org/_WFTMKdAAxXat