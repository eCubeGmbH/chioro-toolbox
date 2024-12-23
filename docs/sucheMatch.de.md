Werte aus der Datentabelle werden auf Vorkommen im Eingabetext überprüft. Wird eine Übereinstimmung gefunden, 
kann ein Rückgabewert aus einer beliebigen Spalte geholt werden. 

##### Parameter
* `Eingabetext` - In diesem Attribut soll gesucht werden
* `Datentabellenname` - Datentabelle, aus der die Werte geholt werden sollen
* `Suchmuster-Spalte` - Spalte in der Datentabelle die die zu suchenden Werte enthält.
* `Rückgabespalte` - Bei einem Treffer wird der Wert aus dieser Spalte zurückgegeben
* `Default`- Wenn nichts gefunden wird, wird dieser Wert zurückgegeben (optional)

##### Beispiel
In der Datentabelle "produkttabelle" wird durch die Spalte "produktname" gegangen. Der Eintrag "Kleid" kommt vor und wird mit dem 
Eingabetext "Das ist ein Kleid" verglichen. "Kleid" kommt im Eingabetext vor, das ist ein Treffer, 
als Folge wird der Eintrag "12345" aus der Spalte "produktID" der Datentabelle zurückgegeben. 
* `sucheMatch('Das ist ein Kleid', 'produkttabelle', 'produktname', 'produktID', 'noID')` Ausgabe: `12345`

