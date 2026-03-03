Extrahiert das erste Wort oder den ersten Ausdruck, der direkt vor einem bestimmten Text
in der Eingabe steht. Gibt einen leeren String zurück, wenn der Text nicht gefunden wird.

##### Parameter
* `value` - Der Eingabetext, in dem gesucht werden soll.
* `text` - Der Text, nach dem gesucht werden soll.

##### Beispiele
* `extrahiereAusdruckVorText("2 mm Spalttiefe", "Spalttiefe")` Ausgabe: `mm`
* `extrahiereAusdruckVorText("2mm Spalttiefe", "Spalttiefe")` Ausgabe: `2mm`
* `extrahiereAusdruckVorText("hello guys", "guys")` Ausgabe: `hello`
* `extrahiereAusdruckVorText($("dimensions"), "cm")` — extrahiert den Ausdruck vor "cm" aus dem Quellfeld
