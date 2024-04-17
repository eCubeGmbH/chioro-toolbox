Ermöglicht das Abrufen eines bestimmten Wertes aus einer vorgegebenen Datentabelle anhand eines Suchwertes.

##### Parameter
* `valueToMatch` - Der Wert, der in der angegebenen Spalte der Datentabelle gesucht werden soll.
* `lookupTableName` - Der Name der Datentabelle, aus der der Wert abgerufen werden soll.
* `columnToCompare` - Der Name der Spalte in der Datentabelle, in der nach dem Suchwert gesucht werden soll.
* `columnToRetrieveValueFrom` - Der Name der Spalte in der Datentabelle, aus der der Wert abgerufen werden soll.

##### Beispiele
* `lookupGet('Apfelkuchen', 'produkttabelle', 'produktname', 'produktID')` Ausgabe: `12345`
* `lookupGet('#FF0000', 'Farbtabelle', 'hexcode', 'farbname')` Ausgabe: `Rot` 
