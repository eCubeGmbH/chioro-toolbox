lookupGetRegExp

**Beispiele**:
Mit folgenden Datentabelle :

| key           | value         |
| ------------- |:-------------:|
| bl.*          | value1        |
| \d\d          | value2        |
| some value    | value3        |

- wenn $('something') ist 'bla' : `lookupGetRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value1"
- wenn $('something') ist '22' : `lookupGetRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value2"
- wenn $('something') ist 'SOME VALUE' : `lookupGetRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value3"