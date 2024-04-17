Erstellt einen Zeitstempel im angegebenen Format. Wenn kein Format angegeben wird, wird ein Standardformat verwendet. Optional kann ein Datum übergeben werden, für das der Zeitstempel erstellt werden soll.

##### Parameter
* `formatting` - Ein String, der das gewünschte Format des Zeitstempels beschreibt.
* `initialDate` - Ein optionales Datum, für das der Zeitstempel erstellt werden soll.

##### Beispiele
* `zeitstempel()` Ausgabe: 202404171347 (aktuelles Datum im Standardformat)
* `zeitstempel("yyyy-MM-dd")` Ausgabe: 2024-04-17 (aktuelles Datum im Format yyyy-MM-dd)
* `zeitstempel("hh:mm:ss", new Date(2023, 0, 1))` Ausgabe: 00:00:00 (Zeitstempel für den 1. Januar 2023)
