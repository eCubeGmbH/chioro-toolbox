Diese Funktion prüft, ob mindestens eines der übergebenen Argumente den Wert `true` hat. Sie durchläuft alle Argumente und gibt `true` zurück, sobald ein Argument `true` ist. Andernfalls gibt sie `false` zurück.

##### Parameter
* `...args`: Die zu prüfenden Argumente.

##### Beispiele
* `istEinElementWahr(false, false, true)` Ausgabe: `true`
* `istEinElementWahr(false, 0, "test")` Ausgabe: `false`
* `istEinElementWahr(1, "test", true)` Ausgabe: `true` 
