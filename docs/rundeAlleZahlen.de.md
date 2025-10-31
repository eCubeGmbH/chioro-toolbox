Die Funktion rundet alle numerischen Werte in einem gegebenen Wert. 
Sie kann Zahlen, Strings mit Zahlen, Arrays von Zahlen oder Objekten mit numerischen Werten verarbeiten. 
Die Funktion erkennt Zahlen in Strings und rundet sie einzeln. Wenn mehr als ein Argument übergeben wird, gilt das letzte Argument als Präzision (Anzahl der Dezimalstellen), und alle vorherigen Argumente werden verarbeitet und als Array zurückgegeben.

##### Parameter
* `value` - Der Wert, in dem alle Zahlen gerundet werden sollen. Dies kann eine Zahl, ein String, ein Array oder ein Objekt sein. Es können auch mehrere Werte übergeben werden; in diesem Fall ist das letzte Argument die Präzision (Ganzzahl >= 0), und die Funktion gibt ein Array der verarbeiteten Werte zurück.

##### Beispiele
* `rundeAlleZahlen(3.64159)` Ausgabe: `4`
* `rundeAlleZahlen(3.16759, 2)` Ausgabe: `3.17`
* `rundeAlleZahlen('Die Temperatur beträgt 26.5 Grad.')` Ausgabe: `Die Temperatur beträgt 27 Grad.`
* `rundeAlleZahlen([1.2, 3.7, 5.9])` Ausgabe: `[1, 4, 6]`
* `rundeAlleZahlen({x: 10.2, y: 20.8})` Ausgabe: `{x: 10, y: 21}` 
* `rundeAlleZahlen(1.2333, 1.3333, 2)` Ausgabe: `[1.23, 1.33]`
* `rundeAlleZahlen({x: 10.234, y: 20.8}, 1)` Ausgabe: `{x: 10.2, y: 20.8}`
