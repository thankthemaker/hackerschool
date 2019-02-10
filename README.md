# Vorwort

In Vorbereitung auf eine [Hackerschool Veranstaltung](https://www.hacker-school.de) zum Thema __Let's Code with Micro:Bit__ habe ich mich erneut intensiv mit Einplatinencomputern, Sensoren und Hardwareerweiterungen im allgemeinen beschäftigt. Als Ergebnis meiner Vorbereitungen habe ich dieses kleine Tutorial geschrieben.  

__[Besuch die zugehörigen Github Pages](https://thankthemaker.github.io/hackerschool)__ um eine optimierte Darstellung des Tutorial zu erhalten.

# Themen

## Micro:Bit
Der BBC __micro:bit__ hat sich zu einem der verbreitetsten Einplatinencomputer im Lehrbetrieb entwickelt. Neben dem Raspberry PI findet man kaum einen anderen Einplatinencomputer so oft an Schulen und anderen Lehreinrichtungen, wie den BBC __micro:bit__. Er stellt damit eine guten und einigermaßen günstigen Einstieg in die Welt der Microcontroller-Programmierung dar, was nicht zuletzt an den vielen Beispielen und der guten Unterstützung liegt.

Die Beispiele in dem entsprechenden Abschnitt zielen teilweise auf den Einstieg in die Entwicklung mit der visuellen Entwicklungsumgebung [MakeCode](https://www.microsoft.com/en-us/makecode "MakeCode") und zum Anderen auf die Entwicklung mit [Micropython](http://micropython.org "Micropython").

Die Lektionen beider Beispielreihen sind so aufgebaut, dass zunächst Grundlagen erlernt werden und dann an Beispielen mit zunehmenden Schwierigkeitsgrad das neue Wissen angewendet werden kann.

Darüber hinaus gibt es weitere Beispiele für bereits etwas erfahrenere _junge Hacker_. 

## Mindstorms 

Ebenfalls weit verbreitetet und aus kaum einer Robotik-AG in den Schulen wegzudenken, ist die Lego Mindstorms-Serie. Insbesondere mit dem _EV3_-Education-Kit hat Mindstorms Einzug in Schule und Hochschulen erweicht. Im Bereich __Mindstorms__ sind Beispiele zu finden, wie als Alternative zu Labview mittels MakeCode der _EV3_ von _Lego Mindstorms_ programmiert werden kann.

## NodeMCU

Unter dem Namen NodeMCU wird eine Reihe von Microcontrollern und Entwicklerboards vertrieben, die auf einen [Open-Source Hardwareentwurf](https://www.nodemcu.com/index_en.html) rund um den Espressif ESP8266 Chipsatz und eine Open-Source Firmware zurückgehen. Die original Firmware unterstützt die Entwicklung mit Lua. Inzwischen gibt es viele andere unterstütze Firmware-Images und Entwicklungsmöglichkeiten, u.a. auch Arduino und Micropython.

NodeMCU hat sich als insbesondere als günstiger Einstieg in die IoT-Welt und für andere Internet-basierte Anwendungen bewährt. In dem Bereich __NodeMCU__ finden sich Beispiele für die Entwicklung mittels Arduino und Micropython. Zusätzlich sind Beispiele für das Zusammenspiel mit Blynk enthalten.

## Rasperry PI

Kein anderer Einplatinencomputer hat den Bildungsbereich und die Makerscene so sehr beeinflusst und inspiriert wie der Raspberry PI in seinen diversen Ausprägungen. Für viele kleinere Projekte verwenden Maker inzwischen den deutlich günstigeren Espresif Chipsatz (z.B. NodeMCU), der Raspberry Pi ist aber weiterhin sehr beliebt bei Einsteigern und Bildungsprojekten.

Da im Internet schon genügend Informationen existieren, wie bspw. eine LED mit dem RasPI zum blinken gebracht werden kann, konzentriert sich dieses Tutorial eher auf speziellen Einsatzzwecken für den Raspberry PI. Z.B. lassen sich mit __Balena Cloud__ und der _Firmware_ __Node-RED__ auf einfache Weise tolle Projekte erstellen.

## ODROID-GO

[Hardkernel](https://www.hardkernel.com) bietet seit einigen Jahren interessante Alternativen zu den üblichen Einplatinencomputern. Zum 10-jahrigen Jubiläum haben die Koreaner mit dem [ODROID-GO](https://www.hardkernel.com/shop/odroid-go/) ein selbstbau Game-Kit auf den Markt gebracht, das sich in der Makerscene großer Beliebtheit erfreut.

Der ODROID-GO bietet nicht nur eine spezielle Firmware mit Emulatoren für diverse Systeme (Nintendo Entertainment System, GameBoy, u.a.), seine Chipsatz auf Basis des Espressif ESP32 lädt zum Hacken und Modding ein. Nichts anderes müssen die _Guys_ von Hardkernel im Sinn gehabt haben, als sie den ODROID-GO entwarfen, verfügt er doch schon von Haus aus über nach außen gelegte GPIOs.
