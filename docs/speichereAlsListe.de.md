Diese Funktion erstellt ein Objekt (Map) aus einer Liste von Schlüssel-Wert-Paaren. Die Paare werden als Argumente übergeben, wobei jedes ungerade Argument ein Schlüssel und das darauf folgende gerade Argument der zugehörige Wert ist.

##### Parameter
* `...args` - Eine Liste von Schlüssel-Wert-Paaren. Schlüssel müssen Strings sein.

##### Beispiele
* `asMap('name', 'John', 'age', 30)` Ausgabe: `{name: 'John', age: 30}`
* `asMap('title', 'CEO', 'company', 'Acme Inc.')` Ausgabe: `{title: 'CEO', company: 'Acme Inc.'}`
