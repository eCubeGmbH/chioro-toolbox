Abrufen eines bestimmten Eintrags aus einer Datentabelle anhand eines Suchwerts.

##### Parameter
* `Eingabetext` - Nach diesem Wert wird in der Datentabelle gesucht
* `Datentabellenname` - Der Name der Datentabelle die verwendet wird
* `Suchspalte` - In dieser Spalte der Datentabelle wird nach dem Eingabetext gesucht
* `Rückgabespalte` - Wird in der Suchspalte der Eingabetext gefunden, gibt das Werkzeug den Eintrag aus dieser Spalte zurück

##### Beispiel
In der Datentabelle "produkttabelle" wird, in der Spalte "produktname" nach dem Wort "Apfelkuchen" gesucht. Dieser Begriff wird gefunden, als Folge wird der Eintrag "12345" aus der Spalte "produktID" zurückgegeben.
* `sucheUndNimm('Apfelkuchen', 'produkttabelle', 'produktname', 'produktID')` Ausgabe: `12345`
