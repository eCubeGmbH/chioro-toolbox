This function formats a date into the desired format. If no date is provided, the current date is used.

##### Parameters
* **formatting** - A string that specifies the desired format for the date.
* **initialDate** - An optional date object or a string representing a date.

##### Examples

* `date('dd.MM.yyyy')` Output: e.g. `16.04.2024`
* `date('yyyy-MM-dd hh:mm:ss', Date.parse("1980-01-01"))` Output: `1980-01-01 00:00:00`
* `date('hh:mm:ss')` Output: `02:20:00` 
