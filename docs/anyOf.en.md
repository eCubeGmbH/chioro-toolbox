Returns the first non-empty object which are passed as arguments.
If all the arguments are empty, an empty text is returned.
One or more lists can be passed instead of single values. Single values and lists can be mixed.

Can be used e.g. if the desired value can occur in one of several attributes.

**Example**
- Assuming `attr1` is empty and `attr2` is not, then `anyOf($('attr1'),$('attr2'),$('attr3')` returns the value of `attr2`.
