Extrahiert Text aus einem lokalisierten Textobjekt. Versucht zuerst die angeforderte Sprache,
dann 'x-default', und gibt schließlich den ersten verfügbaren Wert zurück.

##### Parameter
* `localizedText` - Das lokalisierte Attribut (Array von {locale, value}-Paaren).
* `locale` (optional, Standard: `x-default`) - Der Sprachcode, der extrahiert werden soll.

##### Beispiele
* `holeTextAusDemLokalisiertenText([{locale: "en", value: "Red"}, {locale: "de", value: "Rot"}], "en")` Ausgabe: `Red`
* `holeTextAusDemLokalisiertenText([{locale: "en", value: "Red"}, {locale: "de", value: "Rot"}], "de")` Ausgabe: `Rot`
* `holeTextAusDemLokalisiertenText($("localized_name"), "de")` — extrahiert den deutschen Namen aus einem lokalisierten Quellfeld
