Diese Funktion durchsucht eine Datentabelle nach einem Wert, der einem bestimmten Muster entspricht.
Die Datentabelle enthält eine Spalte mit regulären Ausdrücken und eine weitere Spalte mit den Werten, die zurückgegeben werden sollen, wenn der reguläre Ausdruck mit dem Suchwert übereinstimmt.
Alles Treffer werden als Array zurückgegeben.

##### Parameter
* `Eingabetext` - Nach diesem Wert wird in der Datentabelle gesucht
* `Datentabellenname` - Der Name der Datentabelle die verwendet wird
* `Suchmuster-Spalte` - In dieser Spalte der Datentabelle wird nach dem Eingabetext gesucht
* `Rückgabespalte` - Wird in der Suchspalte der Eingabetext gefunden, gibt das Werkzeug den Eintrag aus dieser Spalte zurück

##### Beispiel
Die Einträge in der Datentabellenspalte "regex" werden mit dem Eingabetext "abc" verglichen. Bei einem
Treffer wird der Eintrag aus der Spalte "ergebnis" zurückgegeben.
* `sucheUndNimmRegExp("abc", "meineTabelle", "regex", "ergebnis")` Ausgabe: `Wert aus 'ergebnis' Spalte`
