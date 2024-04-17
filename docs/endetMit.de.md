Diese Funktion prüft, ob ein Text mit einer bestimmten Zeichenkette oder einem regulären Ausdruck endet.

##### Parameter
* `text` - Der Text, der überprüft werden soll.
* `search` - Die Zeichenkette oder der reguläre Ausdruck, mit dem der Text enden soll.

##### Beispiele
* `endetMit("Hallo Welt", "Welt")` Ausgabe: `true`
* `endetMit("Hallo Welt", /Welt$/)` Ausgabe: `true`
* `endetMit("Hallo Welt", /welt$/i)` Ausgabe: `true`
* `endetMit("Hallo Welt", "Hallo")` Ausgabe: `false`
