Diese Funktion sendet eine HTTP PUT-Anfrage an eine angegebene URL mit den übergebenen
Parametern im JSON-Format. Als Standard-Content-Type wird application/json gesetzt.
Optional können benutzerdefinierte Header mitgesendet werden. Die Antwort der Anfrage
wird als JSON-Objekt zurückgegeben.

##### Parameter
* `url` - Die URL, an die die Anfrage gesendet werden soll.
* `params` - Ein Objekt mit den Parametern, die als JSON im Anfragekörper gesendet werden sollen.
* `headers` - (Optional) Ein Objekt mit benutzerdefinierten HTTP-Headern für die Anfrage.

##### Beispiele
* `putJson("https://api.beispiel.de/artikel/123", {"name": "Aktualisiert"})`
* `putJson("https://api.beispiel.de/artikel/123", {"status": "aktiv"}, {"Authorization": "Bearer meinToken"})`
