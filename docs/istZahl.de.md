Diese Funktion prüft, ob ein gegebener Text eine gültige Zahl darstellt. Dabei werden verschiedene Zahlenformate wie Ganzzahlen, Dezimalzahlen und wissenschaftliche Notation berücksichtigt.

##### Parameter
* `text` - Der Text, der auf numerische Gültigkeit geprüft werden soll.

##### Beispiele
* `istZahl('123')` Ausgabe: `true`
* `istZahl('123.45')` Ausgabe: `true`
* `istZahl('1.23e+5')` Ausgabe: `true`
* `istZahl('abc')` Ausgabe: `false`
