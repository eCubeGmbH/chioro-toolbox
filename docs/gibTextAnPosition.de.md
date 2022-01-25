Extrahiert ein Stück Text der Länge `länge` aus `text`, beginnend mit dem Zeichen an `position`.

Wenn `position` negativ ist, wird vom Ende her gezählt.

(Hinweis: Die Nummerierung der Zeichen beginnt mit 0, d.h. `position` gibt an, wie viele Zeichen 'übersprungen' werden sollen.)

**Beispiele:**
- `gibTextAnPosition('ene mene muh', 4, 2)` &#8594; 'me'.
- `gibTextAnPosition('ene mene muh', -3, 2)` &#8594; 'mu'.
