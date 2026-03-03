Findet ein Attribut in einem Produkttyp (Schema)
anhand seines Schlüssels. Gibt das Attribut-Objekt
mit Schlüssel, Name (lokalisiert), Typ und weiteren
Eigenschaften zurück. Gibt null zurück, wenn nicht
gefunden.

##### Parameter
* `productTypeName` - Der Name des Produkttyps
  (Schemas), in dem gesucht werden soll.
* `attributeKey` - Der Schlüssel des zu findenden
  Attributs.

##### Beispiele
* `holeAttributPerSchlüsselAusProduktTyp("T-Shirts",
  "color")` — gibt das Farb-Attribut-Objekt zurück
* `extrahiereEigenschaft(
  holeAttributPerSchlüsselAusProduktTyp("Shoes",
  "size"), "name")` — gibt den lokalisierten Namen
  des Größen-Attributs zurück
* `holeAttributPerSchlüsselAusProduktTyp(
  $("product_type"), "material")` — sucht ein
  Attribut unter Verwendung des Quell-Produkttyps
