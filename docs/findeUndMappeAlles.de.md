Eine mächtige Funktion zum "umschlüsseln" auf ein fixes Set von Werten.

- `text` ist der Text in welchem gesucht wird.
- `suchtext_x` ist der Text (oder der Reguläre Ausdruck) nach dem gesucht wird
- `zuErsetzenderText_x` ist der Text, der zurückgegebn wird, wenn `suchtext1` gefunden wurde

Wurde `suchtext_x` gefunden, wird `zuErsetzenderText_x` zurück geliefert. 
Wurde `suchtext_x` nicht gefunden, wird mit `suchtext_x+1` weitergemacht.

Wenn gar kein `suchtext_x` gefunden wurde, wird `fallback` zurückgegeben (oder ein leerer Text,
falls kein `fallback` definiert wurde.

**Beispiel**

`alleDekodieren(beschreibung,
	/damen/i, 'F',
	/frauen/i, 'F',
	/herren/i, 'M',
	/männer/i, 'M',
	'uni'
)

- "Damenoberteil" &#8594; "F"
- "Schuhe für Männer" &#8594; "M"
- "Flauschiger Schaal" &#8594; "uni"