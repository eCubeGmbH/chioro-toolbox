Diese Funktion prüft, ob ein gegebener Wert leer ist. Dies umfasst verschiedene Datentypen wie Strings, Zahlen, Booleans, Arrays, Objekte und auch `null` oder `undefined`.

##### Parameter
* `text_or_object` - Der Wert, der auf Leerheit geprüft werden soll.

##### Beispiele
* `istLeer(null)` Ausgabe: `true`
* `istLeer('')` Ausgabe: `true`
* `istLeer('   ')` Ausgabe: `true`
* `istLeer([])` Ausgabe: `true`
* `istLeer({})` Ausgabe: `true`
* `istLeer(0)` Ausgabe: `false`
