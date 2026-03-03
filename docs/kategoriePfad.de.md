Gibt den Pipe-getrennten Pfad eines Kategorie-Knotens
von der Wurzel bis zum angegebenen Knoten zurück.
Sucht die Kategorie anhand ihres Schlüssels und gibt
deren Pfad-Eigenschaft zurück.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `nodeKey` - Der Schlüssel des Kategorie-Knotens.

##### Beispiele
* `kategoriePfad("google_taxonomy", "shoes")`
  — gibt z.B. "root|clothing|shoes" zurück
* `kategoriePfad("my_tree", $("category_key"))`
  — gibt den vollständigen Pfad der Quell-Kategorie
  zurück
