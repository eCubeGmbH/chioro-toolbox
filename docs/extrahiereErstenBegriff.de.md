Ermittelt den ersten passenden Term aus einer Liste von Argumenten anhand der `findeUndMappe`-Funktion. Die Funktion erwartet mindestens zwei Argumente, wobei das erste Argument der zu untersuchende Text ist und die folgenden Argumente Paare aus Suchmustern und Ersetzungstermen darstellen.

##### Parameter
* Eine Liste von Argumenten, wobei das erste Argument der zu untersuchende Text ist und die folgenden Argumente Paare aus Suchmustern (Strings oder RegExp) und Ersetzungstermen sind.

##### Beispiele
* `extrahiereErstenBegriff('Hallo Welt', /Welt/, 'Max')` Ausgabe: `Max`
* `extrahiereErstenBegriff('Name: Max', 'Name:', 'Alter:')` Ausgabe: `Alter:`
* `extrahiereErstenBegriff('Größe: unbekannt', /Größe/, 'Alter:')` Ausgabe: `Alter:` 
