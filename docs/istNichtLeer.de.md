Diese Funktion prüft, ob ein gegebener Wert nicht leer ist. Sie funktioniert mit verschiedenen Datentypen wie Strings, Zahlen, Booleans, Arrays und Objekten.

##### Parameter
* `text_or_object` - Der Wert, der auf Nicht-Leerheit geprüft werden soll.

##### Beispiele
* `istNichtLeer(null)` Ausgabe: `false`
* `istNichtLeer('')` Ausgabe: `false`
* `istNichtLeer('   ')` Ausgabe: `false`
* `istNichtLeer([])` Ausgabe: `false`
* `istNichtLeer({})` Ausgabe: `false`
* `istNichtLeer(0)` Ausgabe: `true`
