Ersetzt Text innerhalb eines Strings oder Arrays von Strings. Unterstützt sowohl einfache String-Ersetzungen als auch reguläre Ausdrücke.

##### Parameter
* `text` - Der String oder das Array von Strings, in dem der Text ersetzt werden soll.
* `textToSearch` - Der String oder reguläre Ausdruck, der gesucht werden soll.
* `replaceWith` - Der String, der den gefundenen Text ersetzen soll.

##### Beispiele
* `ersetzeInText("Guten Tag", "Tag", "Abend")` Ausgabe: "Guten Abend"
* `ersetzeInText("Das ist ein Text", /ein/g, "kein")` Ausgabe: "Das ist kein Text"
* `ersetzeInText(["Apfel", "Banane", "Kirsche"], /e/g, "i")` Ausgabe: ["Apfil", "Banani", "Kirschi"] 
