Sucht nach einem Text oder Muster im Eingabetext und gibt den ersten Treffer zurück. Falls kein Treffer gefunden wird, wird ein optionaler Ersatzwert zurückgegeben.

##### Wann benutzen?
Wenn ein Quellfeld strukturierten Text enthält, aus dem nur ein bestimmter Teil benötigt wird — z.B. eine Zahl aus "Gewicht: 500g", eine Einheit aus "1,5 kg Mehl" oder eine Eigenschaft aus einem zusammengesetzten Beschreibungsfeld.

##### Parameter
* `text` - Der Text, aus dem extrahiert werden soll.
* `pattern` - Ein einfacher Text oder ein regulärer Ausdruck (RegExp), der den zu extrahierenden Teil definiert.
* `fallback` - (Optional) Ein Ersatzwert, der zurückgegeben wird, falls kein Treffer gefunden wird.
* `withGroups` - (Optional) Wenn `true`, wird nicht der gesamte Treffer zurückgegeben, sondern nur der Teil in der ersten Klammer `(...)` des Musters. Nützlich, wenn man Kontext im Muster braucht, aber nur einen bestimmten Teil des Treffers haben möchte.

##### Beispiele
* `extrahiereAusText('Hallo Welt!', 'Welt')` Ausgabe: `Welt`
* `extrahiereAusText('Hallo Mars!', /Welt/, 'irgendwo')` Ausgabe: `irgendwo`

##### Beispiel mit withGroups
Angenommen ein Lieferant liefert Gewichtsangaben im Format `"Gewicht: 500g"` und man möchte nur die Zahl `500` extrahieren — ohne Einheit und ohne das Label davor.

Ohne `withGroups`: Das Muster `/\d+g/` trifft `"500g"` — die Einheit ist noch dabei.

Mit `withGroups`: Das Muster `/Gewicht: (\d+)g/` beschreibt den gesamten Kontext, aber die Klammer `(\d+)` markiert was man wirklich haben möchte. Mit `withGroups=true` gibt die Funktion nur `"500"` zurück.

* `extrahiereAusText('Gewicht: 500g', /Gewicht: (\d+)g/, '', true)` Ausgabe: `500`
* `extrahiereAusText('Kalorien: 250 kcal', /Kalorien: (\d+) kcal/, '', true)` Ausgabe: `250`
* `extrahiereAusText('Benutzername: Max', /Benutzername: (.*)/, 'unbekannt', true)` Ausgabe: `Max`
