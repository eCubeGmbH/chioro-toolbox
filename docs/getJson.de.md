###### Beschreibung
Diese Funktion ruft Daten von einer angegebenen URL ab und wandelt sie in ein JavaScript-Objekt um. Sie nutzt eine interne Methode, um die Anfrage zu stellen und die Antwort zu verarbeiten.

###### Parameter
* `url` - Die URL, von der die Daten abgerufen werden sollen.
* `headers` - (Optional) Zusätzliche Informationen, die mit der Anfrage gesendet werden können.

###### Beispiele
* `getJson("https://api.beispiel.de/daten")` ruft Daten von der angegebenen URL ab und gibt sie als Objekt zurück.
* `getJson("https://api.beispiel.de/daten", { "Autorisierung": "Bearer meinToken" })` ruft Daten von der angegebenen URL ab und sendet zusätzliche Informationen mit der Anfrage.
