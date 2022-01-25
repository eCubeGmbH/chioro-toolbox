Searches for the `textToSearch` in the given `text` and replaces all the matches with `replaceWith`.

A regular expression ("regex") can also be used as the `textToSearch`.
In this case `replaceWith` can be used with $1, $2, ... to refer to the groups/parenthesized expressions in the regex.

Please note that when using a regex, the modifier "g" must be used to replace *all* the occurrences.
Otherwise, only the first occurrence will be replaced.

**Examples**

- (without Regex):    `replaceInText("ene mene muh", "en", "AAA")` &#8594; `"AAAe mAAAe muh"`
- (with Regex):    `replaceInText("ene mene muh", /m(.)/g, "A$1A")` &#8594; `"AAAe mAAAe muh"`
