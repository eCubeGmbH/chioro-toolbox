Wendet den Regulären Ausdruck `muster` auf den übergebenen Text an.
Falls `muster` "passt", wird die erste passende Fundstelle zurück geliefert.
Falls nicht, wird `fallback` zurückgeliefert, bzw. ein leerer Text, falls `fallback` nicht angegeben ist.

**Beispiel**
- `extrahiereAusText("ene men1 muh", /m.*1/)` &#8594; 'mene'
- `extrahiereAusText("ene mene muh", /ene (\w+) muh/)` &#8594; 'mene'
- `extrahiereAusText("ene mene muh", /tomato/, "dann halt nicht")` &#8594; 'dann halt nicht'