Wandelt einen Pipe-getrennten Kategoriepfad aus
Knoten-Schlüsseln in einen Pipe-getrennten Pfad aus
lokalisierten Kategorienamen um. Gibt null zurück,
wenn der Pfad kein Pipe-Trennzeichen enthält.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `categoryPath` - Ein Pipe-getrennter Pfad aus
  Kategorie-Knoten-Schlüsseln
  (z.B. "root|clothing|shoes").
* `locale (optional)` - Die Sprache für die Namen
  (z.B. "en", "de"). Standard ist "x-default".

##### Beispiele
* `holeKategorieNamenPfad("google_taxonomy",
  "root|clothing|shoes")` — gibt z.B.
  "Alle Produkte|Bekleidung|Schuhe" zurück
* `holeKategorieNamenPfad("google_taxonomy",
  $("category_path"), "de")` — wandelt den
  Quell-Kategoriepfad in deutsche Namen um
