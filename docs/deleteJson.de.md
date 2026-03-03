Diese Funktion sendet eine HTTP DELETE-Anfrage an eine angegebene URL. Optional können
benutzerdefinierte Header mitgesendet werden. Die Antwort der Anfrage wird als JSON-Objekt
zurückgegeben.

##### Parameter
* `url` - Die URL, an die die DELETE-Anfrage gesendet werden soll.
* `headers` - (Optional) Ein Objekt mit benutzerdefinierten HTTP-Headern für die Anfrage.

##### Beispiele
* `deleteJson("https://api.beispiel.de/artikel/123")`
* `deleteJson("https://api.beispiel.de/artikel/123", {"Authorization": "Bearer meinToken"})`
