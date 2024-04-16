Diese Funktion ermöglicht es, basierend auf verschiedenen Bedingungen unterschiedliche Ergebnisse zu liefern. Sie prüft nacheinander mehrere Bedingungen und gibt den zugehörigen Wert zurück, sobald eine Bedingung erfüllt ist.

##### Parameter
* **bedingung_x** - Ein Ausdruck, der als wahr oder falsch bewertet wird.
* **zuErsetzen_x** - Der Wert, der zurückgegeben wird, wenn die zugehörige Bedingung wahr ist.
* **fallback** (optional) - Ein Wert, der zurückgegeben wird, wenn keine der Bedingungen erfüllt ist.

##### Beispiele
* `decodeConditions($('a') > 10, "größer als 10", $('a') < 5, 'kleiner als 5', "ein Wert dazwischen")`
* `decodeConditions($('a') > 0, "positiv", $('a') < 0, 'negativ', "gleich Null")`
* `decodeConditions($('a').length > 10, "langer Text", $('a').length == 0, 'leerer Text')` 
