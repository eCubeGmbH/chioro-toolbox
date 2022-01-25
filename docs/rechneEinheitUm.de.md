Findet alle numerischen Werte in `value` und versucht, ihre Einheit entsprechend den Eingabeparametern umzurechnen: `Faktor`, `AlteEinheit`, `NeueEinheit`, `DezimalStellen`

- `Faktor`: Multipliziert mit diesem Parameter, wenn die Einheit gefunden wird oder wenn keine Einheiten angegeben sind.
- `AlteEinheit`: Falls angegeben, wird versucht, nur die numerischen Werte mit dieser Einheit zu finden und sie mit dem Faktor zu multiplizieren.
- `NeueEinheit`: Wenn angegeben, wird die neue Einheit die alte Einheit ersetzen.
- `DezimalStellen`: Falls angegeben, wird die Zahl auf so viele Dezimalstellen gerundet.

Bitte beachten Sie, dass `AlteEinheit` und `NeueEinheit` ein beliebiger Text sein können und keine reale "Einheit" im physikalischen Sinne sein müssen.


**Beispiele**

- `convertUnit("23 apples and 25 bananas", 1, "apples", "carrots")` &#8594; "23 carrots and 25 bananas"
- `convertUnit("2,3 m", 100, 'm', 'cm')` &#8594; "230 cm"
- `convertUnit("2.3 and 2.4", 100, '', 'cm')` &#8594; "230 cm and 240 cm"
