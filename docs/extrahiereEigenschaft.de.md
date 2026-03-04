Extrahiert den Wert einer Eigenschaft aus einem Text. Die Eigenschaft wird anhand ihres Namens identifiziert und kann durch einen Doppelpunkt oder ein Gleichheitszeichen getrennt sein.

##### Parameter
* `text` - Der Text, aus dem der Eigenschaftswert extrahiert werden soll.
* `propertyName` - Der Name der Eigenschaft, deren Wert extrahiert werden soll.
* `fallback` - (Optional) Ein Fallback-Wert, der zurückgegeben wird, falls die Eigenschaft nicht gefunden wird.

##### Beispiele
* `extrahiereEigenschaft('name: Max', 'name')` Ausgabe: `Max`
* `extrahiereEigenschaft('Alter = 30 Jahre', 'Alter')` Ausgabe: `30 Jahre`
* `extrahiereEigenschaft('Farbe: rot, Größe: XL', 'Farbe')` Ausgabe: `rot`

**Hinweis:** Werte müssen durch `,` `;` `|` oder Zeilenumbruch
getrennt sein. Nur durch Leerzeichen getrennte Werte
(z.B. `"breed:Maine Coon age:5"`) funktionieren NICHT —
verwende stattdessen `extrahiereAusText` mit `withGroups=true`.
