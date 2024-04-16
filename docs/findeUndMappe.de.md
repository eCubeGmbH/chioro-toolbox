Diese Funktion dekodiert einen Eingabetext anhand einer Reihe von Regeln. Die Regeln werden als Paare von Suchmustern und Ersetzungen angegeben. Das erste Suchmuster, das mit dem Eingabetext übereinstimmt, bestimmt die Ersetzung, die zurückgegeben wird. Falls kein Suchmuster übereinstimmt, wird ein optionaler Fallback-Wert zurückgegeben oder ein leerer String.

##### Parameter
* **input** - Der zu dekodierende Text.
* **...args** - Eine Folge von Paaren aus Suchmustern und Ersetzungen. Ein Suchmuster kann ein regulärer Ausdruck oder ein einfacher Text sein.
* **fallback (optional)** - Der Wert, der zurückgegeben werden soll, falls kein Suchmuster übereinstimmt.

##### Beispiele
* `decode("Damenoberteil in rot", /Herren/i, "H", /Damen/i, "F", /Kinder/i, "K")` Ausgabe: `F`
* `decode("Kindershirt in blau", /Herren/i, "H", /Damen/i, "F", /Kinder/i, "K")` Ausgabe: `K`
* `decode("Unisexmantel in grün", /Herren/i, "H", /Damen/i, "F", /Kinder/i, "K", "U")` Ausgabe: `U`
* `decode("Kein Treffer")` Ausgabe: `""` 
