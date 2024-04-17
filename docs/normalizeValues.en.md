This function normalizes numerical values within a text. It can unify decimal separators and set the number of decimal places.

##### Parameters
* value - The text containing the numbers to be normalized.
* deciSeparator - The desired decimal separator (e.g., "," or ".").
* deciPlaces - The desired number of decimal places (optional, default is 0).

##### Examples
* `normalizeValues("around 2,3 megawatts", ".")` Output: `around 2.3 megawatts`
* `normalizeValues("23.1 and 23.22", '.', 1)` Output: `23.1 and 23.2`