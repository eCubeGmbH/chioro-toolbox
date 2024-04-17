Ermöglicht das Suchen und Ersetzen von Werten in einem String basierend auf definierten Regeln in einer Datentabelle.

##### Parameter
* `lookupTableName` - Der Name der Datentabelle, die die Such- und Ersetzungsmuster enthält.
* `columnContainingRegex` - Der Name der Spalte in der Datentabelle, die den regulären Ausdruck für die Suche enthält.
* `columnToRetrieveValueFrom` - Der Name der Spalte in der Datentabelle, die den Ersetzungswert enthält.
* `valueToMatch` - Der String, in dem die Suche und Ersetzung durchgeführt werden soll.

##### Beispiele
* `suchuUndErsetzeRegExp('produkttabelle', 'produktname', 'produktID', 'Apfelkuchen')` Ausgabe: `12345`
* `suchuUndErsetzeRegExp('Farbtabelle', 'hexcode', 'farbname', '#FF0000')` Ausgabe: `Rot` 
