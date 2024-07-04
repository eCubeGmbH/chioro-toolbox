Ein Wert aus der Datentabelle wir auf Vorkommen im Attribut überprüft. Wenn der Wert gefunden wird, 
kann ein Rückgabewert aus einer beliebigen Spalte geholt werden. 

##### Parameter
* `valueToMatch` - In diesem Attribut soll gesucht werden
* `lookupTableName` - Der Name der Datentabelle, aus der der Wert abgerufen werden soll.
* `columnToCompare` - Der Name der Spalte in der Datentabelle die den zu suchenden Wert enthält.
* `columnToRetrieveValueFrom` - Der Name der Spalte in der Datentabelle, aus der der Wert abgerufen werden soll.
* `default`- Wenn nichts gefunden wird, wird dieser Wert zurückgegeben

##### Beispiele
* `sucheMatch('Apfelkuchen', 'produkttabelle', 'produktname', 'produktID', 'noID')` Ausgabe: `12345`
* `sucheMatch('#FF0000', 'Farbtabelle', 'hexcode', 'farbname', 'Farblos')` Ausgabe: `Rot` 
