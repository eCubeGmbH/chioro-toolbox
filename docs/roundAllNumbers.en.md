The function rounds all numerical values within a given value. It can handle numbers, strings containing numbers, arrays of numbers, or objects with numerical values. The function detects numbers within strings and rounds them individually. When more than one argument is provided, the last argument is treated as the precision (number of decimal places), and all preceding arguments are processed and returned as an array.

##### Parameters
* `value` - The value in which all numbers should be rounded. This can be a number, string, array, or object. You can also pass multiple values; in that case, the last argument is the precision (integer >= 0), and the function returns an array of processed values.

##### Examples
* `roundAllNumbers(3.64159)` Output: `4`
* `roundAllNumbers(3.16759, 2)` Output: `3.17`
* `roundAllNumbers('The temperature is 26.5 degrees.')` Output: `The temperature is 27 degrees.`
* `roundAllNumbers([1.2, 3.7, 5.9])` Output: `[1, 4, 6]`
* `roundAllNumbers({x: 10.2, y: 20.8})` Output: `{x: 10, y: 21}` 
* `roundAllNumbers('The price is 12.345', 2)` Output: `The price is 12.35`
* `roundAllNumbers(1.2333, 1.3333, 2)` Output: `[1.23, 1.33]`
* `roundAllNumbers({x: 10.234, y: 20.8}, 1)` Output: `{x: 10.2, y: 20.8}`
