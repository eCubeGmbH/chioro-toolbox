#### Beschreibung
Diese Funktion durchsucht eine Datentabelle nach einem Wert, der einem bestimmten Muster entspricht. Die Datentabelle enthält eine Spalte mit regulären Ausdrücken und eine weitere Spalte mit den Werten, die zurückgegeben werden sollen, wenn der reguläre Ausdruck mit dem Suchwert übereinstimmt. Es werden alle regulären Ausdrücke in der Datentabelle durchsucht, und alle passenden Werte werden zurückgegeben.

#### Parameter
* `valueToMatch` - Der Wert, der mit den regulären Ausdrücken in der Datentabelle verglichen werden soll.
* `lookupTableName` - Der Name der Datentabelle, in der gesucht werden soll.
* `columnContainingRegex` - (Optional) Der Name der Spalte, die die regulären Ausdrücke enthält. Standardmäßig wird "key" verwendet.
* `columnToRetrieveValueFrom` - (Optional) Der Name der Spalte, aus der der Wert zurückgegeben werden soll, wenn eine Übereinstimmung gefunden wird. Standardmäßig wird "value" verwendet.

#### Beispiele
* `lookupGetRegExp("abc", "meineTabelle", "regex", "ergebnis")` sucht in der Spalte "regex" der Datentabelle "meineTabelle" nach allen regulären Ausdrücken, die mit "abc" übereinstimmen, und gibt die entsprechenden Werte aus der Spalte "ergebnis" zurück.
* `lookupGetRegExp("123", "suchTabelle")` sucht in der Spalte "key" der Datentabelle "suchTabelle" nach allen regulären Ausdrücken, die mit "123" übereinstimmen, und gibt die entsprechenden Werte aus der Spalte "value" zurück. 
