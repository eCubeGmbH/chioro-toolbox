Extrahiert den ersten Treffer eines Texts oder regulären Ausdrucks aus einem Text. Falls kein Treffer gefunden wird, wird ein optionaler Fallback-Wert zurückgegeben.

##### Parameter
* `text` - Der Text, aus dem extrahiert werden soll.
* `pattern` - Ein text oder regulärer Ausdruck, der den zu extrahierenden Text definiert.
* `fallback` - (Optional) Ein Fallback-Wert, der zurückgegeben wird, falls kein Treffer gefunden wird.
* `withGroups` - (Optional) Ein boolescher Wert, der angibt, ob die erste Gruppe des Treffers zurückgegeben werden soll.

##### Beispiele
* `extrahiereAusText('Hallo Welt!', 'Welt')` Ausgabe: `Welt`
* `extrahiereAusText('Hallo Welt!', /Welt/)` Ausgabe: `Welt`
* `extrahiereAusText('Hallo Mars!', /Welt/, 'irgendwo')` Ausgabe: `irgendwo`
* `extrahiereAusText('Benutzername: Max', /Benutzername: (.*)/, 'unbekannt', true)` Ausgabe: `Max` 
