Verbindet mehrere Textteile zu einem einzelnen String. Nicht-Text-Elemente werden ignoriert.  
Ist identisch zu `verbindeTextMitTrennzeichen()`

##### Parameter
* `...args` - Eine variable Anzahl von Textteilen, die miteinander verbunden werden sollen.

##### Beispiele
* `verketteText("Hallo", " ", "Welt")` Ausgabe: Hallo Welt
* `verketteText("Teil 1", 123, "Teil 2")` Ausgabe: Teil 1Teil 2 
