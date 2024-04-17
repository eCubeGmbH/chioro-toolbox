Diese Funktion prüft, ob alle übergebenen Argumente den Wert `true` haben. Falls keine Argumente übergeben werden, gibt die Funktion `false` zurück.

##### Parameter
* `...args` - Eine beliebige Anzahl von Argumenten, die geprüft werden sollen.

##### Beispiele
* `sindAlleElementeWahr(true, 1 === 1, 'test' !== '')` Ausgabe: `true`
* `sindAlleElementeWahr(true, false, 1 === 1)` Ausgabe: `false`
* `sindAlleElementeWahr()` Ausgabe: `false`