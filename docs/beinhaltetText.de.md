Prüft, ob im übergebenen `text`, `Suchtext` vorkommt. `Suchtext` kann ein Text, eine Liste von Texten,
ein Regulärer Ausdruck ("Regex") oder eine Liste von Regulären Ausdrücken beinhalten. Wenn eine Liste übergeben wird,
gibt die Funktion `wahr` zurück, sobald eines der ListItems gefunden wird.

**Beispiele**
- (ohne Regex):    `beinhaltetText("ene mene muh", "mene")` &#8594; wahr
- (mit Regex):  `beinhaltetText("ene mene muh", /m.*e/)` &#8594; wahr
- (mit Liste):  `beinhaltetText("ene mene muh", ['ene', 'mene'])` &#8594; wahr
