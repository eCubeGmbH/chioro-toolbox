Diese Funktion extrahiert die erste Zahl aus einem Text. Falls keine Zahl gefunden wird, wird der angegebene Fallback-Wert zurückgegeben.

##### Parameter
* **text** - Der Text, aus dem die Zahl extrahiert werden soll.
* **fallback** - Der Wert, der zurückgegeben werden soll, falls keine Zahl gefunden wird.

##### Beispiele
* `extractNumberFromText("Ihre Rechnung beträgt 123,45 €")` Ausgabe: `123.45`
* `extractNumberFromText("Es wurden keine Ergebnisse gefunden", 0)` Ausgabe: `0`
