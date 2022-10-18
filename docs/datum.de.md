Eine Datumsformatierungsfunktion, die die Daten in verschiedenen Formaten zurückgibt. 
Standardmäßig, wenn keine Parameter angegeben werden, gibt `datum` das aktuelle Datum im folgenden Format zurück:
`dd.MM.yyyy` z.B. `29.01.2020`

Wenn der Parameter `Formatierung` angegeben wird, wird das Datum entsprechend formatiert. Eine vollständige Liste der unterstützten Formatierungen finden Sie hier:
[Liste der Formatierungen](https://date-fns.org/v2.29.3/docs/format)

Wenn der Parameter `Datum` angegeben wird, wird statt des aktuellen Datums das `Datum` verwendet. Bitte beachten Sie, dass dieser Parameter
ein echtes Javascript-Date-Objekt sein sollte.


**Beispiele**

Wenn heute der 29.01.2020 ist, dann

- `datum()` &#8594; "29.01.2020"
- `datum('dd/MM')` &#8594; "29/01"
- `datum('yyyy', Date.parse("1980/01/01"))` &#8594; "1980"
