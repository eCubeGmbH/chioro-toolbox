Verwendet KI, um ein Produkt automatisch anhand eines
beschreibenden Textes in einen Kategoriebaum
einzuordnen. Der Text wird an die
Backend-Kategorisierungs-Engine gesendet, die den
am besten passenden Kategorie-Knoten-Schlüssel
zurückgibt.

##### Parameter
* `attributes` - Ein Text, der das Produkt beschreibt
  (z.B. Produktname, Beschreibung oder andere
  Attribute zur Kategorie-Erkennung).
* `categoryTreeKey` - Der Schlüssel des
  Kategoriebaums, in den kategorisiert werden soll.

##### Beispiele
* `kategorisieren($("product_name"),
  "google_taxonomy")` — kategorisiert das Produkt
  anhand seines Namens in den Google-Taxonomiebaum
* `kategorisieren($("description"),
  "custom_categories")` — kategorisiert anhand der
  Produktbeschreibung
* `kategorisieren(verbindeTextMitTrennzeichen(" ",
  $("name"), $("color"), $("material")),
  "google_taxonomy")` — kombiniert mehrere Felder
  für bessere Kategorisierungsgenauigkeit
