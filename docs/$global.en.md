This function is used to get the values from/set the values to a global context.
This is an advanced features, unlike other chioro toolboxes, this function has side effects, and can be used across
data rows to remember certain thing from the previous rows and apply them to the current one.

As an Example: <br>
given the following table:
<table>
<tr><td>Name</td><td>Tshirt Size</td></tr>
<tr><td>Alex</td><td>S</td></tr>
<tr><td>Josef</td><td>M</td></tr>
<tr><td>Alex</td><td></td></tr>
<tr><td>Helga</td><td>M</td></tr>
<tr><td>Josef</td><td></td></tr>
</table>

If we want the successive names to have the same tshirt size as the previous ones with the same name, one could write the
following script:<br>
`$global($('Name'), $('Tshirt Size'))`<br>
with the following condition<br>
`isEmpty($global('Name'))`
