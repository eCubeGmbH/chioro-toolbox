Versucht, aus dem übergebenen Text einen Property-Wert zu extrahieren. Dabei wird folgende Heuristik benutzt:
1. Es wird nach dem übergebenen Namen (`nameDerEigenschaft`) gefolgt von einem "Zuweisungszeichen" (Leerzeichen, Doppelpunkt oder Gleichheitszeichen) gesucht.
2. Alles zwischen dem Zuweisungszeichen und einem "Ende-Zeichen" (Komma, Semikolon) oder bis zum Zeilenende wird als Wert des Properties zurückgegeben.
3. Wird das Property nicht gefunden, wird `fallback` zurückgegeben (oder ein leerer Text, wenn `fallback` nicht definiert ist.

**Beispiele**:
text = "Produkteigenschaften: Farbe: rot, Größe: XL, Hinweise: nicht schleudern"

- `extrahiereEigenschaft(text, "Größe")` &#8594; "XL"
- `extrahiereEigenschaft(text, "Hinweise)"` &#8594; "Nicht Schleudern"
