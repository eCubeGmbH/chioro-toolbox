Diese Funktion extrahiert alle Zahlen aus einem Text und gibt sie als Liste zurück. Dabei werden auch negative Zahlen und Dezimalzahlen erkannt.

##### Parameter
* `text` - Der Text, aus dem die Zahlen extrahiert werden sollen.

##### Beispiele
* `extrahiereAlleZahlenAusText("Es kostet 12,50€")` Ausgabe: `["12,50"]`
* `extrahiereAlleZahlenAusText("Die Temperatur liegt zwischen -5 und 10 Grad")` Ausgabe: `["-5", "10"]`
* `extrahiereAlleZahlenAusText("Es wurden 2 von 10 Punkten erreicht")` Ausgabe: `["2", "10"]`
