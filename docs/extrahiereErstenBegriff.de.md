In 'text' wird nach einem oder mehreren Begriffen ('zuExtrahierendesWort_x')gesucht. Der erste gefundene Wert wird zurückgegeben. 
- `text` ist der Text in welchem gesucht wird.
- `zuExtrahierendesWort_x` ist der Text nach dem gesucht wird bzw. der zurückgeliefert wird

Wurde `zuExtrahierendesWort_x` gefunden, wird abgebrochen und `zuExtrahierendesWort_x` zurückgeliefert.

Wenn gar kein `zuExtrahierendesWort_x` gefunden wurde, wird ein leerer Text ausgegeben.

**Beispiel**

`extrahiereErstenBegriff(text, 'damen',	'frauen', 'herren',	'uni')`

- text = "Damenoberteil" &#8594; "damen"
- text = "Schuhe für Frauen" &#8594; "frauen"
- text = "irgendein Text" &#8594; ""
