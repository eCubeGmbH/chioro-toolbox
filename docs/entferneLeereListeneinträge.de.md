Diese Funktion entfernt leere Einträge aus einer Liste von Argumenten und gibt die bereinigte Liste zurück.

##### Parameter
* eine variable Anzahl von Werten

##### Beispiele
* `removeEmptyListEntries("Hallo", null, "Welt", undefined)` Ausgabe: `["Hallo", "Welt"]`
* `removeEmptyListEntries([1, 2, null, 3], [4, null, 5])` Ausgabe: `[1, 2, 3, 4, 5]`
* `removeEmptyListEntries()` Ausgabe: `[]` 
