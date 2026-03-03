Ruft den Produkttyp (Schema) ab, der einem bestimmten
Kategorie-Knoten in einem Kategoriebaum zugeordnet
ist. Gibt das vollständige Produkttyp-Objekt
einschließlich seiner Attribute zurück.

##### Parameter
* `treeKey` - Der Schlüssel des Kategoriebaums.
* `nodeKey` - Der Schlüssel des Kategorie-Knotens,
  dessen Produkttyp abgerufen werden soll.

##### Beispiele
* `holeProduktTypeAusBaumstruktur("google_taxonomy",
  "shoes")` — gibt den Produkttyp für die Kategorie
  "shoes" zurück
* `extrahiereEigenschaft(
  holeProduktTypeAusBaumstruktur("my_tree",
  $("category_key")), "attributes")` — gibt die
  Attribute des Kategorie-Produkttyps zurück
