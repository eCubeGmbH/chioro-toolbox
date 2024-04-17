Extrahiert den numerischen Wert, der direkt nach einem bestimmten Text in einem String steht. Wenn der Text nicht gefunden wird, wird der gesamte String zurückgegeben.

##### Parameter
* `value` - Der String, aus dem der Wert extrahiert werden soll.
* `text` - Der Text, nach dem der numerische Wert gesucht werden soll.

##### Beispiele
* `extrahiereWertNachText('Größe: 180 cm', 'Größe:')` Ausgabe: `180`
* `extrahiereWertNachText('Gewicht: 75,5 kg', 'Gewicht:')` Ausgabe: `75,5`
* `extrahiereWertNachText('Alter: unbekannt', 'Alter:')` Ausgabe: `Alter: unbekannt` 
