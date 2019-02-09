---
title: Lektion 9 - Spiel (Stein,Schere,Papier)
parent: Microbit MakeCode
grand_parent: Microbit
has_children: false
nav_order: 10
permalink: /microbit/makecode/lesson09_game_stone_scissors_paper/
---

# Lektion 9 - Spiel (Stein,Schere,Papier)

Du hast in den vorherigen Lektionen bereits sehr viel Basiswissen erworben. Es ist nun an der Zeit mit dem Wissen ein erstes kleines Spiel zu programmieren.

Erstelle nun eine elektronische Variante von dem bekannten Spiel "Stein, Papier, Schere", das oft auch "Schnick, Schnack, Schnuck" genannt wird. Beim Schütteln Deines __Micro:Bit__ soll eine zufällige Zahl zwischen 1 und 3 ermittelt  und jeweils das zugehörige Icon angezeigt werden. Die Zuordnung von der Zahlen zu den Symbolen ist wie folgt:

#### Zahl 1 - Stein 

![Stein](./stone.png "Stein")

#### Zahl 2 - Papier 

![Papier](./paper.png "Papier")

#### Zahl 3 - Schere 

![Schere](./scissors.png "Schere")
 
## Anleitung

Wähle zunächst aus dem _Eingabe_ Block de Block _wenn geschüttelt_ und lösche innerhalb dieses Blocks zunächst das LED-Matrix Display. 

Definiere nun eine  Variable _waffe_ und ändere den Wert der Variable auf einen zufällige Wert zwischen 1 und 3. Nutze dazu den entsprechenden Block aus dem _Mathematik_-Block.

Jetzt brauchst Du aus dem _Logik_-Block einen _wenn...dann_-Block den Du über das kleine Pluszeichen um zwei weitere _sonst...wenn_-Bedingungen erweiterst. Dieser sollte dann so aussehen:

![Bedingungen](./if_elsif_elsif.png "Bedingungen")

In den drei Bedingungen musst Du nun über den Vergleich-_Logik_-Block den Wert der Variablen _waffe_ einzeln mit den Werten 1, 2 und 3 vergleichen. 

In der _wenn_-Bedingung wird also der Wert der Variablen _waffe_ mit dem Wert 1 auf Gleichheit verglichen und falls diese Bedingung zutrifft, das _Stein_-Symbol angezeigt.

In der ersten _sonst wenn_-Bedingung wird  der Wert der Variablen _waffe_ mit dem Wert 2 auf Gleichheit verglichen und falls diese Bedingung zutrifft, das _Papier_-Symbol angezeigt.

In der zweiten _sonst wenn_-Bedingung wird  der Wert der Variablen _waffe_ mit dem Wert 3 auf Gleichheit verglichen und falls diese Bedingung zutrifft, das _Schere_-Symbol angezeigt.

Wenn alles richitg ist, sollte nun beim Schütteln des __Micro:Bit__ zufällig eines der drei Symbole angezeigt werden.

Let's play ...

## Blocks

So könnte Dein Programm aussehen.

![Screenshot](./screenshot.png "Screenshot")
