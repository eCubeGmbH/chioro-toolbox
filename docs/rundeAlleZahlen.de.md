Die Funktion rundet alle numerischen Werte in einem gegebenen Wert. 
Sie kann Zahlen, Strings mit Zahlen, Arrays von Zahlen oder Objekten mit numerischen Werten verarbeiten. 
Die Funktion erkennt Zahlen in Strings und rundet sie einzeln.

##### Parameter
* `value` - Der Wert, in dem alle Zahlen gerundet werden sollen. Dies kann eine Zahl, ein String, ein Array oder ein Objekt sein.

##### Beispiele
* `roundAllNumbers(3.14159)` Ausgabe: `3`
* `roundAllNumbers('Die Temperatur beträgt 26.5 Grad.')` Ausgabe: `Die Temperatur beträgt 27 Grad.`
* `roundAllNumbers([1.2, 3.7, 5.9])` Ausgabe: `[1, 4, 6]`
* `roundAllNumbers({x: 10.2, y: 20.8})` Ausgabe: `{x: 10, y: 21}` 
