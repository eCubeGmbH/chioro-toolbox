Sucht im übergebenen `text` nach `suchtext` und liefert die Position der ersten Fundstelle
bzw. -1, wenn der Text nicht gefunden wurde.
Als `suchtext` kann auch ein Regulärer Ausdruck ("Regex") übergeben werden.

**Beispiele**
- (ohne Regex):    `findeTextstelle("ene mene muh", "mene")` &#8594; 4
- (mit Regex):  `findeTextstelle("ene mene muh", /m.*e/)` &#8594; 4