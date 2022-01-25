Ermittelt alle numerischen Werte und formatiert sie gemäß den Eingabeparametern konsistent um: `Dezimaltrennzeichen` und `DezimalStellen`.

- `DezimalTrennzeichen`: "." oder "," Zeichen, das als Dezimaltrennzeichen verwendet werden soll.
- `DezimalStellen`: Die Anzahl der Nachkommastellen nach dem Dezimaltrennzeichen.


**Beispiele**

- `normalizeValues("23 and 23.225 and some", '.', 1)` &#8594; "23.0 and 23.2 and some"
- `normalizeValues("23.1 and 23.22", '.', 1)` &#8594; "23.1 and 23.2"
