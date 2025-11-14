Diese Funktion entfernt leere Einträge aus einer Liste von Argumenten und gibt die bereinigte Liste zurück.
 Die Leere-Logik entspricht der Funktion `istLeer`: leere Zeichenketten (`""`), leere Arrays (`[]`), leere Objekte (`{}`) sowie `null`/`undefined` gelten als leer und werden entfernt.
 
 ##### Parameter
 * eine variable Anzahl von Werten
 
 ##### Beispiele
 * `entferneLeereListeneinträge("Hallo", "", null, "Welt", undefined, [], {})` Ausgabe: `["Hallo", "Welt"]`
 * `entferneLeereListeneinträge([1, 2, null, 3], [4, "", null, 5], {}, [])` Ausgabe: `[1, 2, 3, 4, 5]`
 * `entferneLeereListeneinträge("", null, undefined, [], {})` Ausgabe: `[]`
