Creates a timestamp in the specified format. If no format is specified, a default format is used. Optionally, a date can be passed for which the timestamp should be created.

##### Parameters
* `formatting` - A string describing the desired format of the timestamp.
* `initialDate` - An optional date for which the timestamp should be created.

##### Examples
* `timestamp()` Output: 202404171347 (current date in default format)
* `timestamp("yyyy-MM-dd")` Output: 2024-04-17 (current date in yyyy-MM-dd format)
* `timestamp("hh:mm:ss", new Date(2023, 0, 1))` Output: 00:00:00 (timestamp for January 1, 2023) 
