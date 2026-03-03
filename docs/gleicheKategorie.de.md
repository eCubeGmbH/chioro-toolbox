Prüft, ob ein Kategoriepfad mit einem Vergleichspfad
beginnt (ein Kind davon ist). Beide Werte sind
Pipe-getrennte Kategoriepfade. Der Vergleich ist
nicht case-sensitiv. Gibt true zurück, wenn der
Kategoriewert mit dem Vergleichswert beginnt.

##### Parameter
* `categoryValue` - Der vollständige Kategoriepfad
  zum Prüfen (z.B. "Root|Bekleidung|Schuhe").
* `comparisonValue` - Der Elternpfad zum Vergleichen
  (z.B. "Root|Bekleidung").

##### Beispiele
* `gleicheKategorie("Root|Bekleidung|Schuhe",
  "Root|Bekleidung")` Ausgabe: `true`
* `gleicheKategorie("Root|Elektronik|Handys",
  "Root|Bekleidung")` Ausgabe: `false`
* `gleicheKategorie($("category_path"),
  "Root|Bekleidung")` — prüft, ob das Quellprodukt
  zur Kategorie Bekleidung gehört
