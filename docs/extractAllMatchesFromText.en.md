Applies the regular expression `pattern` to the input text and returns a list. The exact content of the list
depends on whether the regular expression uses the "g" modifier:

- With "g", a list of all occurrences are returned (or an empty list if there are no occurrences).
- Without "g", the first occurrence is returned as the first list element. If the regular expression contains one or more parenthesis/group expressions,
  those are returned as additional list elements. This can be used to extract parts of a larger context. Further occurrences are ignored.

**Examples**
- `extractAllMatchesFromText("ene mene muhe", /m..e/g)` &#8594; ['mene', 'muhe']
- `extractAllMatchesFromText("ene mene muhe", /m..e/)` &#8594; ['mene']
- `extractAllMatchesFromText("ene mene muhe", /m(..)e/g)` &#8594; ['mene', 'muhe']
- `extractAllMatchesFromText("ene mene muhe", /m(..)e/)` &#8594; ['mene', 'en']
- `extractAllMatchesFromText("Weight 23 kg gross.", /(\d+)\s*([km]*g)/)` &#8594; ['23 kg', '23', 'kg']
