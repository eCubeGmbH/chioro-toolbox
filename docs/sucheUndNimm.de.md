sucheUndNimm

**Beispiele**:
Mit folgender Datentabelle :

| key           | value         |
| ------------- |:-------------:|
| 111           | value1        |
| 222           | value2        |
| 333           | value3        |

- wenn $('attribut') ist '111' : `sucheUndNimm($('attribut'), '111', 'key', 'value')` &#8594; "value1"
- wenn $('attribut') ist '222' : `sucheUndNimm($('attribut'), '222')` &#8594; "value2"
- wenn $('attribut') ist '444' : `sucheUndNimm($('attribut'), '444', 'key', 'value')` &#8594; ""
