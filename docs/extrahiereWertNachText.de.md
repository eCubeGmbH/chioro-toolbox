Extrahiert den numerischen Wert, der direkt nach einem bestimmten Text in einem String steht. Wenn der Text nicht gefunden wird, wird der gesamte String zurückgegeben.

##### Parameter
* `value` - Der String, aus dem der Wert extrahiert werden soll.
* `text` - Der Text, nach dem der numerische Wert gesucht werden soll.

##### Beispiele
* `extractValueAfterText('Größe: 180 cm', 'Größe:')` Ausgabe: `180`
* `extractValueAfterText('Gewicht: 75,5 kg', 'Gewicht:')` Ausgabe: `75,5`
* `extractValueAfterText('Alter: unbekannt', 'Alter:')` Ausgabe: `Alter: unbekannt` 
