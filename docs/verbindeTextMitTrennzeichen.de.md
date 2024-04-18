Verbindet mehrere Textteile oder Arrays zu einem einzelnen String. Dabei kann ein Trennzeichen angegeben werden, das zwischen die einzelnen Elemente eingefügt wird.  
Ist ähnlich zu `verketteText()`

##### Parameter
* `...args` - Eine variable Anzahl von Textteilen oder Arrays, die miteinander verbunden werden sollen. Das erste Argument wird als Trennzeichen verwendet.

##### Beispiele
* `verbindeTextMitTrennzeichen(", ", "Hallo", "Welt")` Ausgabe: Hallo, Welt
* `verbindeTextMitTrennzeichen(" | ", "Apfel", ["Banane", "Kirsche"])` Ausgabe: Apfel | Banane, Kirsche
