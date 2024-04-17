Formatiert eine Zahl gemäß den Formatierungsregeln des angegebenen Gebietsschemas. Falls kein Gebietsschema angegeben wird, wird das Standardgebietsschema verwendet.

##### Parameter
* `value` - Die zu formatierende Zahl.
* `overrideLocale` - (Optional) Ein String, der das zu verwendende Gebietsschema angibt (z. B. 'de-DE' für Deutsch).

##### Beispiele
* `formatiereAlsZahl(1234.56)` Ausgabe: 1.234,56
* `formatiereAlsZahl(1234.56, 'en-US')` Ausgabe: 1,234.56
