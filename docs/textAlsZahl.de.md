Wandelt einen gegebenen Textwert in eine Zahl um, wobei die Formatierung des Textwertes an die angegebene oder die Standard-Lokalisierung angepasst wird.

##### Parameter
* `value` - Der Textwert, der in eine Zahl umgewandelt werden soll.
* `overrideLocale` - (Optional) Die Lokalisierung, die für die Interpretation des Textwertes verwendet werden soll.

##### Beispiele
* `textAlsZahl('1.234,56')` Ausgabe: `1234.56`
* `textAlsZahl('1,234.56', 'en-US')` Ausgabe: `1234.56` 
