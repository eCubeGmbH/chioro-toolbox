A date formatting function to return dates in different formats. By default, if no parameters are provided, `date` will return the current date in the following format:
`dd.MM.yyyy` e.g `29.01.2020`

If `formatting` parameter is provided, the date will be formatted according to it. A complete list of supported formatting can be found here:
[List of Formatting](https://date-fns.org/v2.29.3/docs/format)

If the `initialDate` parameter is provided, instead of using the current date, the `initialDate` will be used. Please note that this parameter
should be a real javascript Date object.


**Examples**

If today is 29.01.2020, then

- `date()` &#8594; "29.01.2020"
- `date('dd/MM')` &#8594; "29/01"
- `date('yyyy', Date.parse("1980/01/01"))` &#8594; "1980"
