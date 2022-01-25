lookupGetRegExp

**Examples**:

Given the following data table :

| key           | value         |
| ------------- |:-------------:|
| bl.*          | value1        |
| \d\d          | value2        |
| some value    | value3        |

- when $('something') is 'bla' : `lookupGetRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value1"
- when $('something') is '22' : `lookupGetRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value2"
- when $('something') is 'SOME VALUE' : `lookupGetRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value3"
