Die Funktion konvertiert einen gegebenen Wert mit Einheit in eine andere Einheit. 
Dabei werden numerische Werte im Text erkannt und mit dem angegebenen Faktor umgerechnet. 
Die Funktion unterstützt auch das Angeben der Anzahl der Dezimalstellen und das Ersetzen der alten Einheit durch die neue Einheit im Text.

##### Parameter
* `value` - Der Text, der den Wert und die Einheit enthält (z.B. "100 km").
* `factor` - Der Faktor, mit dem der numerische Wert multipliziert wird, um die Konvertierung durchzuführen.
* `oldUnit` - (Optional) Die alte Einheit, die ersetzt werden soll.
* `newUnit` - (Optional) Die neue Einheit, die verwendet werden soll.
* `deciPlaces` - (Optional) Die Anzahl der Dezimalstellen, die im Ergebnis angezeigt werden sollen.

##### Beispiele
- `convertUnit("23 apples and 25 bananas", 1, "apples", "carrots")` Ausgabe: "23 carrots and 25 bananas"
- `convertUnit("2,3 m", 100, 'm', 'cm')` Ausgabe: "230 cm"
- `convertUnit("2.3 and 2.4", 100, '', 'cm')` Ausgabe: "230 cm and 240 cm" 
