Diese Funktion wandelt eine beliebige Anzahl von Argumenten in eine HTML-Liste mit Aufzählungszeichen um. Sie ist nützlich, um Textinhalte als übersichtliche Listen darzustellen.

##### Parameter
* `...args` - Beliebig viele Texte.

##### Beispiele
* `formatiereAlsHtmlAufzählung("Erstes Element", "Zweites Element")>` Ausgabe: `<ul><li>Erstes Element</li><li>Zweites Element</li></ul>`
* `formatiereAlsHtmlAufzählung("Ein Element")>` Ausgabe: `<ul><li>Ein Element</li></ul>`
