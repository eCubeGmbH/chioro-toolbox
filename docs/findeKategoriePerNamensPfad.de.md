Gleicht eine Folge von Kategorienamen mit einem
Kategoriebaum ab, indem von der Wurzel abwärts
gegangen wird. Gibt ein Ergebnisobjekt zurück, das
anzeigt, wie weit der Pfad übereinstimmt, was fehlt
und welche Alternativen an der Stelle verfügbar sind,
an der der Abgleich gestoppt hat.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `locale` - Die Sprache für den Namensabgleich
  (z.B. "en", "de", "x-default").
* `pathElements...` - Ein oder mehrere
  Kategorienamen, von der Wurzel zum Blatt. Kann
  auch als Array übergeben werden.

##### Rückgabewert
Gibt ein Objekt zurück mit:
* `ok` - true wenn der gesamte Pfad übereinstimmt
* `key` - der Schlüssel der letzten übereinstimmenden
  Kategorie
* `wanted` - die gewünschten Pfad-Elemente
* `matched` - die gefundenen Pfad-Elemente
* `tail` - verbleibende nicht übereinstimmende
  Elemente
* `missing` - das erste nicht übereinstimmende
  Element
* `alternatives` - verfügbare Kind-Namen an der
  Stelle des Abbruchs

##### Beispiele
* `findeKategoriePerNamensPfad("google_taxonomy",
  "de", "Alle Produkte", "Bekleidung", "Schuhe")`
  — gleicht jede Ebene ab und gibt Ergebnisobjekt
  zurück
* `findeKategoriePerNamensPfad("my_tree",
  "x-default", ["Elektronik", "Handys",
  "Smartphones"])` — akzeptiert ein Array von
  Pfad-Elementen
