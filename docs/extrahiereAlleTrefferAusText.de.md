Diese Funktion wendet einen regulären Ausdruck auf einen Text an und gibt eine Liste der gefundenen Übereinstimmungen zurück. Je nachdem, ob der reguläre Ausdruck den "g"-Modifikator verwendet, enthält die Liste entweder alle Treffer oder nur den ersten Treffer und dessen Gruppen.

##### Parameter
* `text` - Der Text, in dem nach Übereinstimmungen gesucht werden soll.
* `pattern` - Der reguläre Ausdruck, der zum Suchen verwendet wird. Kann entweder als String oder als RegExp-Objekt übergeben werden.
* `withGroups` - Ein boolescher Wert, der angibt, ob die Gruppen des regulären Ausdrucks in der Ergebnisliste enthalten sein sollen.

##### Beispiele
* `extractAllMatchesFromText("Der schnelle braune Fuchs", /fuchs/i)` Ausgabe: `["Fuchs"]`
* `extractAllMatchesFromText("Der schnelle braune Fuchs springt", /(\w+)\s(\w+)/g)` Ausgabe: `["schnelle braune", "braune Fuchs"]`
* `extractAllMatchesFromText("123 Main Street", /(\d+) (\w+) (.*)/)` Ausgabe: `["123 Main Street"]` 
