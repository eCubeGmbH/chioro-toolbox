Prüft, ob ein Text mit einem bestimmten Suchbegriff oder einem regulären Ausdruck beginnt.

##### Parameter
* `text` - Der Text, der überprüft werden soll.
* `search` - Der Suchbegriff oder der reguläre Ausdruck.

##### Beispiele
* `beginntMit("Hallo Welt", "Hallo")` Ausgabe: `true`
* `beginntMit("123 abc", "123")` Ausgabe: `true`
* `beginntMit("Test String", /s../i)` Ausgabe: `true` 
