Diese Funktion sendet eine HTTP POST-Anfrage an eine angegebene URL mit den übergebenen Parametern im JSON-Format. Optional können benutzerdefinierte Header mitgesendet werden. Die Antwort der Anfrage wird als JSON-Objekt zurückgegeben.

##### Parameter
* url - Die URL, an die die Anfrage gesendet werden soll.
* params - Ein Objekt mit den Parametern, die als JSON-String im Anfragekörper gesendet werden sollen.
* headers - Ein optionales Objekt mit benutzerdefinierten HTTP-Headern für die Anfrage.

##### Beispiele
* `postJson("/api/data", {name: "Wert"})`
* `postJson("/api/user", {id: 123}, {"Authorization": "Bearer ..."})` 
