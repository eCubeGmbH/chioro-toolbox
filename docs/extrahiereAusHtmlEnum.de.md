Diese Funktion extrahiert einen Wert aus einem HTML-String, der eine Aufzählung enthält. Dabei wird nach einem bestimmten Attributnamen gesucht und der zugehörige Wert zurückgegeben.

##### Parameter
* `text` - Der HTML-String, der die Aufzählung enthält.
* `propertyName` - Der Name des Attributs, dessen Wert extrahiert werden soll.
* `fallback` - Ein optionaler Wert, der zurückgegeben wird, wenn das Attribut nicht gefunden wird.

##### Beispiele
* `extractFromHtmlEnum("<li> Name: Max </li>", "Name")` Ausgabe: `"Max"`
* `extractFromHtmlEnum("<li> Alter: 25 </li>", "Alter")` Ausgabe: `"25"`
* `extractFromHtmlEnum("<li> Stadt: Berlin </li>", "Land", "Unbekannt")` Ausgabe: `"Unbekannt"`
