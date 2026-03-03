Diese Funktion berechnet die Ähnlichkeit zwischen zwei Zeichenketten als Prozentwert
mithilfe der Levenshtein-Distanz. Das Ergebnis wird als Zeichenkette mit zwei
Dezimalstellen zurückgegeben.

##### Parameter
* `str1` - Die erste Zeichenkette zum Vergleich.
* `str2` - Die zweite Zeichenkette zum Vergleich.

##### Beispiele
* `übereinstimmungInProzent("hallo", "hello")` Ausgabe: `"80.00"`
* `übereinstimmungInProzent("Nike", "Nike")` Ausgabe: `"100.00"`
* `übereinstimmungInProzent($("marke"), "Nike")` — vergleicht das Quellfeld Marke mit einem bekannten Wert
