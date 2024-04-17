Gibt den ersten Wert aus einer Liste von Argumenten zurück, der als wahr ausgewertet wird, oder einen leeren String, wenn kein solcher Wert gefunden wird.

##### Parameter
* Eine Liste von Argumenten, die auf ihren Wahrheitsgehalt geprüft werden sollen.

##### Beispiele
* `erstesVon()` Ausgabe: ""
* `erstesVon(null, 0, "Hallo", 123)` Ausgabe: "Hallo"
* `erstesVon(undefined, false, "", NaN)` Ausgabe: ""
