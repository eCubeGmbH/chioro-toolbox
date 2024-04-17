Diese Funktion normalisiert numerische Werte in einem Text. Sie kann Dezimaltrennzeichen vereinheitlichen und die Anzahl der Nachkommastellen festlegen.

##### Parameter
* value - Der Text, der die zu normalisierenden Zahlen enthält.
* deciSeparator - Das gewünschte Dezimaltrennzeichen (z.B. "," oder ".").
* deciPlaces - Die Anzahl der gewünschten Nachkommastellen (optional, Standard ist 0).

##### Beispiele
* `normalizeValues("etwa 2,3 megawatts", ".")` Output: `etwa 2.3 megawatts`
* `normalizeValues("23.1 and 23.22", '.', 1)` Output: `23.1 and 23.2`
