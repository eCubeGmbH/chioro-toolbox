Zerlegt einen Text in einzelne Elemente anhand eines Trennzeichens und entfernt dabei überflüssige Leerzeichen.

##### Parameter
* `text` - Der Text, der zerlegt werden soll.
* `separator` - (Optional) Das Trennzeichen, das zum Zerlegen des Textes verwendet werden soll. Standardmäßig wird ein Komma (",") verwendet.

##### Beispiele
* `trenneText("Apfel, Birne, Banane")` Ausgabe: `["Apfel", "Birne", "Banane"]`
* `trenneText("eins; zwei; drei", ";")` Ausgabe: `["eins", "zwei", "drei"]`
