- `text` ist der Text in welchem gesucht wird.
- `zuExtrahierendesWort_x` ist der Text nach dem gesucht wird bzw. zurück geliefert wird

Wurde `zuExtrahierendesWort_x` gefunden, wird abgebrochen und `zuExtrahierendesWort_x` zurück geliefert.

Wenn gar kein `zuExtrahierendesWort_x` gefunden wurde, wird ein leerer Text ausgegeben.

**Beispiel**

`extrahiereErstenBegriff(beschreibung,
	'damen',
	'frauen',
	'herren',
	'uni'
)`

- "Damenoberteil" &#8594; "damen"
- "Schuhe für Frauen" &#8594; "frauen"