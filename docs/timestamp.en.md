A timestamp formatting function to return the timestamps in different formats. By default, if no parameters are provided, 
`timestamp` will return the current date/time in the following format(given that the date is 29.01.2020 and the time is 12:31):
`yyyyMMddhhmm` e.g `202001291231`

If `formatting` parameter is provided, the timestamp will be formatted according to it. A complete list of supported formatting can be found here:
[List of Formatting](https://date-fns.org/v2.29.3/docs/format)

If the `initialDate` parameter is provided, instead of using the current date, the `initialDate` will be used. Please note that this parameter
should be a real javascript Date object.


**Examples**

If today is 29.01.2020 12:31 pm, then

- `timestamp()` &#8594; "202001291231"
- `timestamp('yyyy', Date.parse("1980/01/01"))` &#8594; "1980"
