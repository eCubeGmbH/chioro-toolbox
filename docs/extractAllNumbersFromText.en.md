This function extracts all numbers from a text and returns them as a list. It recognizes negative numbers and decimal numbers.

##### Parameters
* `text` - The text from which to extract the numbers.

##### Examples
* `extractAllNumbersFromText("It costs €12.50")` Output: `["12.50"]`
* `extractAllNumbersFromText("The temperature is between -5 and 10 degrees")` Output: `["-5", "10"]`
* `extractAllNumbersFromText("2 out of 10 points were achieved")` Output: `["2", "10"]`
