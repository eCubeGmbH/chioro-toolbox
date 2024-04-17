Diese Funktion prüft, ob ein bestimmter Wert in einer Liste von Werten vorhanden ist. Dabei werden auch verschachtelte Arrays berücksichtigt und zu einem flachen Array umgewandelt.

##### Parameter
* `...args` - Eine Liste von Werten, in der gesucht werden soll. Der erste Wert ist der Suchwert, die restlichen Werte bilden die Liste.

##### Beispiele
* `inList(1, [2, 3])` Ausgabe: `false`
* `inList(1, [2, [1, 4]])` Ausgabe: `true`
* `inList('1', ['1', 2])` Ausgabe: `true` 
