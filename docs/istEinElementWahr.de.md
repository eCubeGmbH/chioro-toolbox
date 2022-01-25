Liefert das erste nicht-leere der als Argumente übergebenen Objekte.
Falls es ein solches nicht gibt, wird ein leerer Text zurückgegeben.
Statt einzelner Werte kann auch eine oder mehrere Listen übergeben werden. Einzelne Werte und Listen können gemischt werden.

Kann man z.B. gut verwenden wenn der gewünschte Wert in einem von mehreren Attributen vorkommen kann.

**Beispiel:**
- Angenommen `attr1` ist leer und `attr2` nicht, dann liefert `erstesVon($('attr1'),$('attr2'),$('attr3')` den Wert von `attr2`.