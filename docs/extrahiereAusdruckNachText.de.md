Extrahiert das erste Wort oder den ersten Ausdruck, der direkt nach einem bestimmten Text
in der Eingabe steht. Gibt einen leeren String zurück, wenn der Text nicht gefunden wird.

##### Parameter
* `value` - Der Eingabetext, in dem gesucht werden soll.
* `text` - Der Text, nach dem gesucht werden soll.

##### Beispiele
* `extrahiereAusdruckNachText("some mangos and some apples", "some")` Ausgabe: `mangos`
* `extrahiereAusdruckNachText("red 2mm thing", "red")` Ausgabe: `2mm`
* `extrahiereAusdruckNachText("red things", "blue")` Ausgabe: ``
* `extrahiereAusdruckNachText($("description"), "color:")` — extrahiert den Ausdruck nach "color:" aus dem Quellfeld
