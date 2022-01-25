Prüft, ob übergebenen `suchbegriff` in listItem(s) auftaucht, wenn ja `wahr` wird zurückgeliefert.


**Beispiele**
- `inListe("ene", "mene", "jene", "ene")` &#8594; wahr
- `inListe("ene", "mene", "jene", "gene")` &#8594; falsch
- `inListe("ene", ["mene", "ene"])` &#8594; wahr