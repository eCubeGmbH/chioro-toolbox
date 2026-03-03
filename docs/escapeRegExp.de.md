Diese Funktion maskiert spezielle Zeichen regulärer Ausdrücke in einem Text, indem sie
Backslashes davor einfügt. Dies ist nützlich, wenn dynamischer Text als literales Muster
in Regex-basierten Funktionen verwendet werden soll.

##### Parameter
* `string` - Der Text, dessen Sonderzeichen maskiert werden sollen.

##### Beispiele
* `escapeRegExp("Preis ist $5.00")` Ausgabe: `"Preis ist \$5\.00"`
* `escapeRegExp("Datei (Kopie).txt")` Ausgabe: `"Datei \(Kopie\)\.txt"`
* `escapeRegExp($("suchbegriff"))` — maskiert den Quellwert für sichere Verwendung in Regex
