- `text` is the text in which the search is performed.
- `textToSearchAndShow_x` is the text that is searched for or returned.

If `textToSearchAndShow_x` was found, the `textToSearchAndShow_x` is returned.

If no `textToSearchAndShow_x` was found at all, an empty text is returned.

**Example**


`extractFirstTerm(description,
'ladies',
'women',
'men',
'uni')`

- "women's top" &#8594; "women"
- "men or women shoes" &#8594; "men"
- - "some text" &#8594; ""
