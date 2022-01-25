lookupGetAllRegExp

**Examples**:

Given the following data table named 'colors':

| english       | deutsch       | hex           |
| ------------- |:-------------:|:-------------:|
| black         | schwarz       | #000000       |
| white         | weiß          | #FFFFFF       |
| red           | rot           | #FF0000       |

- if $('description') is 'There is a white and a black horse in the pasture.': `lookupGetAllRegExp($('description'), 'colors', 'english', 'english')` &#8594; ['white','black']
- if $('description') is 'There is a white and a black horse in the pasture.': `lookupGetAllRegExp($('description'), 'colors', 'english', 'deutsch')` &#8594; ['weiß','schwarz']

All table entries that match are returned.
