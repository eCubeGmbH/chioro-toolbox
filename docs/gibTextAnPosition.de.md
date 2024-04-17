Gibt einen Teilstring aus einem Text zurück, der an einer bestimmten Position beginnt und eine bestimmte Länge hat.

##### Parameter
* `text` - Der Text, aus dem der Teilstring extrahiert werden soll.
* `position` - Die Startposition des Teilstrings (als Zahl).
* `length` - (Optional) Die Länge des Teilstrings (als Zahl). Wenn keine Länge angegeben wird, wird der gesamte Text ab der Startposition zurückgegeben.

##### Beispiele
* `gibTextAnPosition('Hallo Welt', 6, 5)` Ausgabe: Welt
* `gibTextAnPosition('Das ist JavaScript', 12)` Ausgabe: Script
