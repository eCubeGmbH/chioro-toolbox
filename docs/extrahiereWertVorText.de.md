Extrahiert den numerischen Wert, der direkt vor einem bestimmten Text in einem String steht. Wenn der Text nicht gefunden wird, wird der gesamte String zurückgegeben.

##### Parameter
* `value` - Der String, aus dem der Wert extrahiert werden soll.
* `text` - Der Text, vor dem der numerische Wert gesucht werden soll.

##### Beispiele
* `extrahiereWertVorText('Größe: 180 cm', 'cm')` Ausgabe: `180`
* `extrahiereWertVorText('Gewicht: 75,5 kg', 'kg')` Ausgabe: `75,5`
* `extrahiereWertVorText('Alter: unbekannt', 'Jahre')` Ausgabe: `Alter: unbekannt` 
