Diese Funktion gibt entweder den übergebenen Parameterwert oder einen Standardwert zurück, falls der Parameter leer ist.

##### Parameter
* `param` - Der zu prüfende Parameter.
* `def` - Der Standardwert, der zurückgegeben wird, wenn der Parameter leer ist.

##### Beispiele
* `standardWert('Hallo', 'Welt')` Ausgabe: `'Hallo'`
* `standardWert('', 'leer')` Ausgabe: `'leer'`
* `standardWert(null, 0)` Ausgabe: `0`
