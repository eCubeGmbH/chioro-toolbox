Gibt den ersten Wert aus einer Liste von Argumenten zurück, der als wahr ausgewertet wird, oder einen leeren String, wenn kein solcher Wert gefunden wird.

##### Parameter
* Eine Liste von Argumenten, die auf ihren Wahrheitsgehalt geprüft werden sollen.

##### Beispiele
* `anyOf()` Ausgabe: ""
* `anyOf(null, 0, "Hallo", 123)` Ausgabe: "Hallo"
* `anyOf(undefined, false, "", NaN)` Ausgabe: ""
