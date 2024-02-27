sucheUndErsetzeRegExp

**Beispiele**:
Mit folgender Datentabelle :

| key          |   value   |
|--------------|:---------:|
| bl(.*)       | value1_$1 |
| \d\d         |  value2   |
| some (value) |    $1     |

- wenn $('attribut') ist 'bla' : `sucheUndErsetzeRegExp($('attribut'), lookupName, 'key', 'value')` &#8594; "value1_a"
- wenn $('attribut') ist '22' : `sucheUndErsetzeRegExp($('attribut'), lookupName)` &#8594; "value2"
- wenn $('attribut') ist 'SOME VALUE' : `sucheUndErsetzeRegExp($('attribut'), lookupName, 'key', 'value')` &#8594; "value"
