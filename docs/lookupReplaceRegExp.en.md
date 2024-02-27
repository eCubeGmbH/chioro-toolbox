lookupReplaceRegExp

**Examples**:

Given the following data table :

| key          |   value   |
|--------------|:---------:|
| bl(.*)       | value1_$1 |
| \d\d         |  value2   |
| some (value) |    $1     |

- when $('something') is 'bla' : `lookupReplaceRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value1_a"
- when $('something') is '22' : `lookupReplaceRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value2"
- when $('something') is 'SOME VALUE' : `lookupReplaceRegExp($('something'), lookupName, 'key', 'value')` &#8594; "value"
