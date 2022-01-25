sucheUndNimmAlleRegExp

**Beispiele**:
Mit der Datentabelle 'Farben':

| english       | deutsch       | hex           |
| ------------- |:-------------:|:-------------:|
| black         | schwarz       | #000000       |
| white         | weiß          | #FFFFFF       |
| red           | rot           | #FF0000       |

- wenn $('beschreibung') 'Auf der Weide stehen ein weißes und ein schwarzes Pferd.' ist: `sucheUndNimmAlleRegExp($('beschreibung'), 'Farben', 'deutsch', 'deutsch')` &#8594; ['weiß','schwarz']
- wenn $('beschreibung') 'Auf der Weide stehen ein weißes und ein schwarzes Pferd.' ist: `sucheUndNimmAlleRegExp($('beschreibung'), 'Farben', 'deutsch', 'english')` &#8594; ['white','black']

Es werden alle Tabelleneinträge die übereinstimmen zurückgegeben.
