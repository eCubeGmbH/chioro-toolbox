Ruft ein Kategorie-Knoten-Objekt aus einem
Kategoriebaum anhand seines Schlüssels ab. Gibt das
vollständige Kategorie-Objekt zurück, einschließlich
Schlüssel, Name (lokalisiert), Pfad, parentKey und
children-Array. Gibt null zurück, wenn nicht gefunden.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `nodeKey` - Der Schlüssel des Kategorie-Knotens.

##### Beispiele
* `holeKategorie("google_taxonomy", "clothing")`
  — gibt das Kategorie-Objekt für "clothing" zurück
* `extrahiereEigenschaft(holeKategorie(
  "google_taxonomy", "shoes"), "path")` — gibt den
  Pfad einer Kategorie zurück
* `extrahiereEigenschaft(holeKategorie("my_tree",
  $("category_key")), "parentKey")` — gibt den
  Eltern-Schlüssel der Quell-Kategorie zurück
