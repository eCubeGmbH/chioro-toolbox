In `text` one or more terms (`textToSearchAndShow_x`) are searched for. The first value found is returned.
- `text` is the text in which the search is performed.
- `textToSearchAndShow_x` is the text that is searched for or returned.

If `textToSearchAndShow_x` was found, the `textToSearchAndShow_x` is returned.

If no `textToSearchAndShow_x` was found at all, an empty text is returned.

**Example**

`extractFirstTerm(text,'ladies','women','men','uni')`

- text = "women's top" &#8594; "women"
- text = "men or women shoes" &#8594; "men"
- text = "something" &#8594; ""
