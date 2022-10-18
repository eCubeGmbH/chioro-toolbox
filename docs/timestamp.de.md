Eine Funktion zur Formatierung von Zeitstempeln, die die Zeitstempel in verschiedenen Formaten zurückgibt. Standardmäßig, wenn keine Parameter angegeben werden,
`zeitstempel` gibt das aktuelle Datum/Uhrzeit im folgenden Format zurück (vorausgesetzt, das Datum ist der 29.01.2020 und die Uhrzeit ist 12:31):
`yyyyMMddhhmm` z.B. `202001291231`

Wenn der Parameter `Formatierung` angegeben wird, wird der Zeitstempel entsprechend dieser Formatierung formatiert. Eine vollständige Liste der unterstützten Formatierungen finden Sie hier:
[Liste der Formatierungen](https://date-fns.org/v2.29.3/docs/format)

Wenn der Parameter `Datum` angegeben wird, wird statt des aktuellen Datums das `Datum` verwendet. Bitte beachten Sie, dass dieser Parameter
ein echtes Javascript-Date-Objekt sein sollte.


**Beispiele**

Wenn heute der 29.01.2020 12:31 Uhr ist, dann

- `zeitstempel()` &#8594; "202001291231"
- `zeitstempel('yyyy', Date.parse("1980/01/01"))` &#8594; "1980"
