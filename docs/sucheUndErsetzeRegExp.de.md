Ermöglicht das Suchen und Ersetzen von Werten in einem String basierend auf definierten Regeln in einer Datentabelle.

##### Parameter
* `Eingabetext` - Der Text, in dem die Suche und Ersetzung durchgeführt werden soll.
* `Datentabellenname` - Der Name der Datentabelle, die die Such- und Ersetzungsmuster enthält.
* `Suchmuster-Spalte` - Spalte in der Datentabelle, die den regulären Ausdruck für die Suche enthält.
* `Ersatzspalte` - Spalte in der Datentabelle, die den Ersetzungswert enthält.

##### Beispiel
In der Datentabelle "produkttabelle" wird durch die Spalte "produktname" gegangen. Mit "Apfel" wird ein Treffer
erzielt. Als Folge wird "Apfel" in "Apfelkuchen" durch den Eintrag in der Ersatzspalte "replacement" ersetzt. Da dieser
"Kirsch" lautet gibt das Werkzeug "Kirschkuchen" zurück.
* `suchuUndErsetzeRegExp('Apfelkuchen', 'produkttabelle', 'produktname', 'replacement')` Ausgabe: `Kirschkuchen`
