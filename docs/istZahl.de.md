Diese Funktion prüft, ob ein gegebener Text eine gültige Zahl darstellt. Dabei werden verschiedene Zahlenformate wie Ganzzahlen, Dezimalzahlen und wissenschaftliche Notation berücksichtigt.

##### Parameter
* `text` - Der Text, der auf numerische Gültigkeit geprüft werden soll.

##### Beispiele
* `isNumeric('123')` Ausgabe: `true`
* `isNumeric('123.45')` Ausgabe: `true`
* `isNumeric('1.23e+5')` Ausgabe: `true`
* `isNumeric('abc')` Ausgabe: `false`
