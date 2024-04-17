Combines multiple text parts or arrays into a single string. A separator can be specified, which is inserted between the individual elements.  
Is identical to `concatenateText()`

##### Parameters
* `...args` - A variable number of text parts or arrays to be joined together. The first argument is used as the separator.

##### Examples
* `joinText(", ", "Hello", "World")` Output: Hello, World
* `joinText(" | ", "Apple", ["Banana", "Cherry"])` Output: Apple | Banana, Cherry
