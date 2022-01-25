Lookupget

**Examples**:

With the following data table :

| key           | value         |
| ------------- |:-------------:|
| 111           | value1        |
| 222           | value2        |
| 333           | value3        |

- when $('something') is '111' : `lookupGet($('something'), lookupName, 'key', 'value')` &#8594; "value1"
- when $('something') is '222' : `lookupGet($('something'), lookupName)` &#8594; "value2"
- when $('something') is '444' : `lookupGet($('something'), lookupName, 'key', 'value')` &#8594; ""
