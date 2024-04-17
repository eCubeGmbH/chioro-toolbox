Diese Funktion ähnelt der Funktion `decode`, sucht jedoch nach allen möglichen Ersetzungen im Eingabetext und gibt diese als Liste zurück.

##### Parameter
* **input** - Der zu dekodierende Text.
* **...args** - Eine Folge von Paaren aus Suchmustern und Ersetzungen. Ein Suchmuster kann ein regulärer Ausdruck oder ein einfacher Text sein.
* **fallback (optional)** - Der Wert, der zur Liste hinzugefügt werden soll, falls kein Suchmuster übereinstimmt.

##### Beispiele
* `decodeAll("Damen und Herren Handschuhe", /Damen/i, "F", "/Herren/i", "H", /Kinder/i, "K")` Ausgabe: `["F", "H"]`
* `decodeAll("Damen und Herren Handschuhe", /Kinder/i, "K", /Jugendliche/, "K", "U")` Ausgabe: `["U"]`
* `decodeAll("Kein Treffer", "Suche", "Finde")` Ausgabe: `[]` 
