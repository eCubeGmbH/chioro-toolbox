Diese Funktion prüft, ob ein bestimmter Text innerhalb eines anderen Textes vorhanden ist. Sie kann auch mit regulären Ausdrücken verwendet werden, um komplexere Suchmuster zu erstellen.

##### Parameter
* `text` - Der Text, in dem gesucht werden soll.
* `textToSearch` - Der Text oder reguläre Ausdruck, nach dem gesucht werden soll.

##### Beispiele
* `beinhaltetText("Hallo Welt", "Welt")` Ausgabe: `true`
* `beinhaltetText("Hallo Welt", "hallo")` Ausgabe: `true`
* `beinhaltetText("Hallo Welt", /.*el.*/)` Ausgabe: `true`
