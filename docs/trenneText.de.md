Splittet den `text` an den jeweiligen Stellen wo ein `separator` vorkommt.

Achtung: Falls kein `separator` angegeben wird, wird standardmäßig nach einem Komma der Text aufgesplittet.

**Beispiele**
- (mit Separator `|`):    `trenneText("a|b|c", "|")` &#8594; `["a", "b", "c"]`
- (ohne Separator):    `trenneText("a|b|c")` &#8594; `["a|b|c"]`
- (ohne Separator):    `trenneText("a,b,c")` &#8594; `["a", "b", "c"]`
