Wendet den Regulären Ausdruck `muster` auf den übergebenen Text an iund liefert eine Liste zurück. Der genaue Inhalt der Liste
hängt davon ab, ob im Regulären Ausdruck der "g" Modifikator verwendet wird:

- Mit "g" wird eine Liste aller Fundstellen zurückgegeben (oder eine leere Liste, falls es keine Fundstellen gibt).
- Ohne "g" wird als erstes Listenelement die erste Fundstelle geliefert. Enthält der Reguläre Ausdruck einen oder mehrere Klammerausdrücke,
so werden diese als weitere Listenelemente geliefert. Dies kann benutzt werden, um Teile aus einem größeren Kontext zu extrahieren. Weitere Fundstellen werden ignoriert.

**Beispiele:**
- `extrahiereAlleTrefferAusText("ene mene muhe", /m..e/g)` &#8594; ['mene', 'muhe']
- `extrahiereAlleTrefferAusText("ene mene muhe", /m..e/)` &#8594; ['mene']
- `extrahiereAlleTrefferAusText("ene mene muhe", /m(..)e/g)` &#8594; ['mene', 'muhe']
- `extrahiereAlleTrefferAusText("ene mene muhe", /m(..)e/)` &#8594; ['mene', 'en']
- `extrahiereAlleTrefferAusText("Gewicht 23 kg brutto.", /(\d+)\s*([km]*g)/)` &#8594; ['23 kg', '23', 'kg']
