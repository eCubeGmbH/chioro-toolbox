Try to find the given `text` parameter in the `input` and extract the numeric value before it. The `text` and numeric values
could be separated with arbitrary number of space characters. 

**Examples**

- `extractValueBeforeText("some 23.1 mangos and 4 apples", "mangos")` &#8594; "23.1"
- `extractValueBeforeText("Dimensions of 25cm and ", "cm")` &#8594; "25"
- `extractValueBeforeText("range of 3..5 ", "..")` &#8594; "3"
