The function rounds all numerical values within a given value. It can handle numbers, strings containing numbers, arrays of numbers, or objects with numerical values. The function detects numbers within strings and rounds them individually.

##### Parameters
* `value` - The value in which all numbers should be rounded. This can be a number, string, array, or object.

##### Examples
* `roundAllNumbers(3.14159)` Output: `3`
* `roundAllNumbers('The temperature is 26.5 degrees.')` Output: `The temperature is 27 degrees.`
* `roundAllNumbers([1.2, 3.7, 5.9])` Output: `[1, 4, 6]`
* `roundAllNumbers({x: 10.2, y: 20.8})` Output: `{x: 10, y: 21}` 
