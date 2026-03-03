Findet ein Attribut in einem Produkttyp (Schema)
anhand seines lokalisierten Namens. Gibt das
Attribut-Objekt mit Schlüssel, Name, Typ und weiteren
Eigenschaften zurück. Gibt null zurück, wenn nicht
gefunden.

##### Parameter
* `productTypeName` - Der Name des Produkttyps
  (Schemas), in dem gesucht werden soll.
* `attributeName` - Der lokalisierte Name des zu
  findenden Attributs.
* `locale` - Die Sprache für den Namensabgleich
  (z.B. "en", "de", "x-default").

##### Beispiele
* `holeAttributPerNameAusProduktTyp("T-Shirts",
  "Color", "en")` — findet das Attribut namens
  "Color" auf Englisch
* `holeAttributPerNameAusProduktTyp("Shoes",
  "Größe", "de")` — findet das Attribut namens
  "Größe" auf Deutsch
* `extrahiereEigenschaft(
  holeAttributPerNameAusProduktTyp(
  $("product_type"), "Material", "en"), "key")`
  — gibt den Schlüssel des gefundenen Attributs
  zurück
