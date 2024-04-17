Diese Funktion sucht nach einem bestimmten Text innerhalb eines gegebenen Textes. Dabei kann entweder ein regulärer Ausdruck oder ein einfacher Text als Suchbegriff verwendet werden. Die Funktion gibt die Position des ersten Treffers zurück oder -1, falls der Suchbegriff nicht gefunden wurde.

##### Parameter
* `text` - Der Text, in dem gesucht werden soll.
* `textToSearch` - Der Suchbegriff, entweder als regulärer Ausdruck oder als einfacher Text.

##### Beispiele
* `findePositionInText("Hallo Welt", "Welt")` Ausgabe: `6`
* `findePositionInText("Dies ist ein Test", /Test/)` Ausgabe: `10`
* `findePositionInText("Kein Treffer", "Suche")` Ausgabe: `-1`
