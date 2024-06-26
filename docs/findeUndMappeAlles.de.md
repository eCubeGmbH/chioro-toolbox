Diese Funktion ähnelt der Funktion `findeUndMappe`, sucht jedoch nach allen möglichen Ersetzungen im Eingabetext und gibt diese als Liste zurück.

##### Parameter
* `input` - Der zu dekodierende Text.
* `...args` - Eine Folge von Paaren aus Suchmustern und Ersetzungen. Ein Suchmuster kann ein regulärer Ausdruck oder ein einfacher Text sein.
* `fallback (optional)` - Der Wert, der zur Liste hinzugefügt werden soll, falls kein Suchmuster übereinstimmt.

##### Beispiele
* `findeUndMappeAlles("Damen und Herren Handschuhe", /Damen/i, "F", "/Herren/i", "H", /Kinder/i, "K")` Ausgabe: `["F", "H"]`
* `findeUndMappeAlles("Damen und Herren Handschuhe", /Kinder/i, "K", /Jugendliche/, "K", "U")` Ausgabe: `["U"]`
* `findeUndMappeAlles("Kein Treffer", "Suche", "Finde")` Ausgabe: `[]` 
