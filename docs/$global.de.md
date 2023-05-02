Diese Funktion wird verwendet, um Werte aus einem globalen Kontext abzurufen bzw. auf einen globalen Kontext zu setzen.
Dies ist eine fortgeschrittene Funktion, die im Gegensatz zu anderen Chioro-Toolboxen Nebeneffekte hat und über
Datenzeilen verwendet werden, um sich bestimmte Dinge aus den vorherigen Zeilen zu merken und 
sie auf die aktuelle Zeile anzuwenden.


Beispiel: <br>
in Anbetracht der folgenden Tabelle:
<table>
<tr><td>Name</td><td>Tshirt Size</td></tr>
<tr><td>Alex</td><td>S</td></tr>
<tr><td>Josef</td><td>M</td></tr>
<tr><td>Alex</td><td></td></tr>
<tr><td>Helga</td><td>M</td></tr>
<tr><td>Josef</td><td></td></tr>
</table>


Wenn wir wollen, dass die aufeinanderfolgenden Namen die gleiche T-Shirt-Größe haben wie die vorhergehenden mit dem 
gleichen Namen, könnte man das folgende Skript schreiben
folgendes Skript schreiben:

`$global($('Name'), $('Tshirt Size'))` <br>
mit der folgenden Bedingung <br>
`istLeer($global('Name'))`

