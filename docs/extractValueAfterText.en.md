Try to find the given `text` parameter in the `input` and extract the numeric value after it. The `text` and numeric values
could be separated with arbitrary number of space characters. 

**Examples**

- `extractValueAfterText("some 23.1 mangos and 4 apples", "some")` &#8594; "23.1"
- `extractValueAfterText("Price of $200", "$")` &#8594; "200"
- `extractValueAfterText("range of 3..5 ", "..")` &#8594; "5"
