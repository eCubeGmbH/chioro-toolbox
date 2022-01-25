Eine mächtige Funktion zum "umschlüsseln" auf ein fixes Set von Bedingungen.

- `bedingung_x` ist der Bedingung.
- `zuErsetzen_x` ist die Wert, die zurückgegeben wird, wenn `bedingung_x` als Wahr evaluiert ist.

Wenn gar kein `bedingung_x` als Wahr evaluiert wurde, wird `fallback` zurückgegeben (oder ein leerer Text,
falls kein `fallback` definiert wurde.

**Beispiele**:

- wenn $('a') ist 1  : `dekodiereBedingungen($('a') > 10, "ja", $('a') < 5, 'nein')` &#8594; "nein"
- wenn $('a') ist 11 : `dekodiereBedingungen($('a') > 10, "ja", $('a') < 5, 'nein')` &#8594; "ja"
- wenn $('a') ist 6  : `dekodiereBedingungen($('a') > 10, "ja", $('a') < 5, 'nein', "vielleicht")` &#8594; "vielleicht"
- wenn $('a') ist 6  : `dekodiereBedingungen($('a') > 10, "ja", $('a') < 5, 'nein')` &#8594; ""