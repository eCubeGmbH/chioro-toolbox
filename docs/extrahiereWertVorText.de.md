Versucht, den angegebenen `text`-Parameter in der `input` zu finden und den numerischen Wert davor zu extrahieren. 
Der `text` und die numerischen Werte können durch eine beliebige Anzahl von Leerzeichen getrennt werden.

**Beispiele**

- `extrahiereWertVorText("some 23.1 mangos and 4 apples", "mangos")` &#8594; "23.1"
- `extrahiereWertVorText("Dimensions of 25cm and ", "cm")` &#8594; "25"
- `extrahiereWertVorText("range of 3..5 ", "..")` &#8594; "3"
