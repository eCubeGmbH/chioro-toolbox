Versucht, den angegebenen `text`-Parameter in der `input` zu finden und den numerischen Wert danach zu extrahieren. 
Der `text` und die numerischen Werte können durch eine beliebige Anzahl von Leerzeichen getrennt werden.

**Beispiele**

- `extrahiereWertNachText("some 23.1 mangos and 4 apples", "some")` &#8594; "23.1"
- `extrahiereWertNachText("Price of $200", "$")` &#8594; "200"
- `extrahiereWertNachText("range of 3..5 ", "..")` &#8594; "5"
