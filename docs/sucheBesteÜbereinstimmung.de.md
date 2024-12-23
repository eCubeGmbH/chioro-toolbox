Werte aus der Datentabelle werden mit dem Eingabetext verglichen. 
Der Grad der Übereinstimmung wird mit einem Wert von 0 bis 100 angegeben.
In Klammern wird eine beliebige Spalte der Datentabelle beim besten Treffer mitgegeben.

##### Parameter
* `Eingabetext` - Mit diesem Attribut soll gesucht werden
* `Datentabellenname` - Datentabelle, die für die Suche verwendet wird
* `Suchmuster-Spalte` - Spalte in der Datentabelle die die zu vergleichenden Werte enthält.
* `Rückgabespalte` - Bei einem Treffer wird der Wert aus dieser Spalte zurückgegeben
* `Default`- Wenn nichts gefunden wird, wird dieser Wert zurückgegeben (optional)

##### Beispiel
In der Datentabelle "produkttabelle" wird durch die Spalte "produktname" gegangen. Als Eingabetext wird "Kleid" mit den 
Einträgen verglichen und für jede Zeile ein Grad der Übereinstimmung und die Rückgabespalte in Klammern zurückgegeben
* `sucheMatch('Kleid', 'produkttabelle', 'produktname', 'produktname', 'noID')` Ausgabe: `41.2 (Kleid in rot)`

