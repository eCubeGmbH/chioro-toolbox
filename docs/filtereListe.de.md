Diese Funktion filtert eine Liste von Texten anhand einer Liste von regulären Ausdrücken. Es werden nur die Texte zurückgegeben, die mindestens einem der regulären Ausdrücke entsprechen. Die Funktion kann sowohl mit einer Liste von Texten als auch mit einem JSON-String, der eine Liste von Texten enthält, umgehen.

##### Parameter
* **listProperty** - Eine Liste von Texten oder ein JSON-String, der eine Liste von Texten enthält.
* **regExpList** - Eine Liste von regulären Ausdrücken, die zum Filtern der Liste verwendet werden.

##### Beispiele
* `filterList(["Apfel", "Banane", "Kirsche"], [/Apfel/, /Banane/])` Ausgabe: `["Apfel", "Banane"]`
* `filterList("["Mango", "Zitrone"]", [/Mango/])` Ausgabe: `["Mango"]` 
