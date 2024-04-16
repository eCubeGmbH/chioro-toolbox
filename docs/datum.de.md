Diese Funktion formatiert ein Datum in das gewünschte Format. Falls kein Datum angegeben wird, wird das aktuelle Datum verwendet.

##### Parameter
* **formatting** - Ein String, der das gewünschte Format für das Datum angibt.
* **initialDate** - Ein optionales Datumsobjekt oder ein String, der ein Datum darstellt.

##### Beispiele

* `date('dd.MM.yyyy')` Ausgabe: z.B. `16.04.2024`
* `date('yyyy-MM-dd hh:mm:ss', Date.parse("1980-01-01"))` Ausgabe: `1980-01-01 00:00:00`
* `date('hh:mm:ss')` Ausgabe: `02:20:00` 
