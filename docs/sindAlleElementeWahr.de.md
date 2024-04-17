Diese Funktion prüft, ob alle übergebenen Argumente den Wert `true` haben. Falls keine Argumente übergeben werden, gibt die Funktion `false` zurück.

##### Parameter
* `...args` - Eine beliebige Anzahl von Argumenten, die geprüft werden sollen.

##### Beispiele
* `allOf(true, 1 === 1, 'test' !== '')` Ausgabe: `true`
* `allOf(true, false, 1 === 1)` Ausgabe: `false`
* `allOf()` Ausgabe: `false`