Extrahiert den Wert einer Eigenschaft aus einem Text. Die Eigenschaft wird anhand ihres Namens identifiziert und kann durch einen Doppelpunkt oder ein Gleichheitszeichen getrennt sein.

##### Parameter
* `text` - Der Text, aus dem der Eigenschaftswert extrahiert werden soll.
* `propertyName` - Der Name der Eigenschaft, deren Wert extrahiert werden soll.
* `fallback` - (Optional) Ein Fallback-Wert, der zurückgegeben wird, falls die Eigenschaft nicht gefunden wird.

##### Beispiele
* `extractProperty('name: Max', 'name')` Ausgabe: `Max`
* `extractProperty('Alter = 30 Jahre', 'Alter')` Ausgabe: `30 Jahre` 
