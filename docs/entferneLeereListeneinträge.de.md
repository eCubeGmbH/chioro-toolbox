Diese Funktion entfernt leere Einträge aus einer Liste von Argumenten und gibt die bereinigte Liste zurück.

##### Parameter
* eine variable Anzahl von Werten

##### Beispiele
* `entferneLeereListeneinträge("Hallo", null, "Welt", undefined)` Ausgabe: `["Hallo", "Welt"]`
* `entferneLeereListeneinträge([1, 2, null, 3], [4, null, 5])` Ausgabe: `[1, 2, 3, 4, 5]`
* `entferneLeereListeneinträge()` Ausgabe: `[]` 
