Ruft einen Produkttyp (Schema) anhand seines Namens
ab. Gibt das vollständige Produkttyp-Objekt zurück,
einschließlich des Attribut-Arrays. Jedes Attribut hat
Schlüssel, Name (lokalisiert), Typ und weitere
Eigenschaften.

##### Parameter
* `productTypeName` - Der Name des Produkttyps
  (Schemas), der abgerufen werden soll.

##### Beispiele
* `holeProduktTyp("T-Shirts")` — gibt das
  Produkttyp-Objekt für T-Shirts zurück
* `extrahiereEigenschaft(holeProduktTyp("Shoes"),
  "attributes")` — gibt die Liste der Attribute
  für den Produkttyp Shoes zurück
* `holeProduktTyp($("product_type"))` — ruft den
  Produkttyp aus einem Quellfeld ab
