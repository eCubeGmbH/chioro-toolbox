This function filters a list of texts based on a list of regular expressions. It returns only the texts that match at least one of the regular expressions. The function can handle both a list of texts and a JSON string containing a list of texts.

##### Parameters
* **listProperty** - A list of texts or a JSON string containing a list of texts.
* **regExpList** - A list of regular expressions used to filter the list.

##### Examples
* `filterList(["Apple", "Banana", "Cherry"], [/Apple/, /Banana/])` Output: `["Apple", "Banana"]`
* `filterList("["Mango", "Lemon"]", [/Mango/])` Output: `["Mango"]`
