Fügt die als Argumente übergebenen Werte `text1`, `text2`, ... zu einem einzigen Text zusammen, getrennt durch ein`trennzeichen`.
Statt einzelner Werte kann auch eine,oder mehrere, Listen übergeben werden. Einzelne Werte und Listen können gemischt werden.

**Beispiele:**
- `verbindeTextMitTrennzeichen(' - ', 'ene')` &#8594; 'ene'
- `verbindeTextMitTrennzeichen(' - ', 'ene', 'mene', 'muh')` &#8594; 'ene - mene - muh'
- `verbindeTextMitTrennzeichen(' - ', ['ene', 'mene'], 'muh')` &#8594; 'ene - mene - muh'
