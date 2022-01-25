Sucht im übergebenen `text` nach `suchtext` und ersetzt alle Fundstellen durch `ersetzeDurch`.

Als `suchtext` kann auch ein Regulärer Ausdruck ("Regex") übergeben werden.
In diesem Fall kann in `ersetzeDurch` mit $1, $2, ... auf Klammerausdrücke in der Regex verwiesen werden.

Achtung: Bei Verwendung einer Regex muss der Modifikator "g" verwendet werden, um *alle* Fundstellen zu ersetzen.
Andernfalls wird nur die erste Fundstelle ersetzt.

**Beispiele**
- (ohne Regex):    `ersetzeInText("ene mene muh", "en", "AAA")` &#8594; `"AAAe mAAAe muh"`
- (mit Regex):    `ersetzeInText("ene mene muh", /m(.)/g, "A$1A")` &#8594; `"AAAe mAAAe muh"`
