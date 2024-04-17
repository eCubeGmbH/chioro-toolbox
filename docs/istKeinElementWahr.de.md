Diese Funktion prüft, ob alle übergebenen Argumente den Wert `false` haben.

##### Parameter
* `...args` - Eine Liste von Werten, die geprüft werden sollen.

##### Beispiele
* `noneOf(false, false, false)` Ausgabe: `true`
* `noneOf(false, true, false)` Ausgabe: `false`
* `noneOf(true)` Ausgabe: `false`
