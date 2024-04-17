This function creates an object (map) from a list of key-value pairs. The pairs are passed as arguments, where each odd argument is a key and the following even argument is the corresponding value.

##### Parameters
* `...args` - A list of key-value pairs. Keys must be strings.

##### Examples
* `asMap('name', 'John', 'age', 30)` Output: `{name: 'John', age: 30}`
* `asMap('title', 'CEO', 'company', 'Acme Inc.')` Output: `{title: 'CEO', company: 'Acme Inc.'}`
