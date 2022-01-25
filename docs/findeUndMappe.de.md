Wenn `suchtext_x` gefunden wurde, wird `zuErsetzenderText_x` zurückgegeben. Wenn `suchtext_x` nicht gefunden wurde, wird die gleiche Prozedur
mit `suchtext_x+1` durchgeführt.

Wenn keiner der `suchtext_x`'s ein Ergebnis liefert, wird `fallback` zurückgegeben (oder ein leerer Text,
wenn kein `fallback` definiert wurde.

**Beispiel**

`findeUndMappen(beschreibung,
	/damen/i, 'F',
	/frauen/i, 'F',
	/herren/i, 'M',
	/männer/i, 'M',
	'uni'
)`

- "Damenoberteil" &#8594; "F"
- "Schuhe für Männer" &#8594; "M"
- "Flauschiger Schaal" &#8594; "uni"
