Merges the input arguments `text1`, `text2`, ... to a single text, separated by a `separator`.
Instead of single values, one or more lists can be given. Single values and lists can be mixed.

**Examples**

- `joinText(' - ', 'ene')` &#8594; 'ene'
- `joinText(' - ', 'ene', 'mene', 'muh')` &#8594; 'ene - mene - muh'
- `joinText(' - ', ['ene', 'mene'], 'muh')` &#8594; 'ene - mene - muh'
