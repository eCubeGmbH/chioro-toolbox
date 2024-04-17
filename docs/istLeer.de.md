Diese Funktion prüft, ob ein gegebener Wert leer ist. Dies umfasst verschiedene Datentypen wie Strings, Zahlen, Booleans, Arrays, Objekte und auch `null` oder `undefined`.

##### Parameter
* `text_or_object` - Der Wert, der auf Leerheit geprüft werden soll.

##### Beispiele
* `isBlank(null)` Ausgabe: `true`
* `isBlank('')` Ausgabe: `true`
* `isBlank('   ')` Ausgabe: `true`
* `isBlank([])` Ausgabe: `true`
* `isBlank({})` Ausgabe: `true`
* `isBlank(0)` Ausgabe: `false`
