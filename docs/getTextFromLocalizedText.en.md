Extracts text from a localized text object. Tries the requested locale first, then falls back
to 'x-default', and finally returns the first available value.

##### Parameters
* `localizedText` - The localized attribute (array of {locale, value} pairs).
* `locale` (optional, default: `x-default`) - The language code to extract.

##### Examples
* `getTextFromLocalizedText([{locale: "en", value: "Red"}, {locale: "de", value: "Rot"}], "en")` Output: `Red`
* `getTextFromLocalizedText([{locale: "en", value: "Red"}, {locale: "de", value: "Rot"}], "de")` Output: `Rot`
* `getTextFromLocalizedText($("localized_name"), "de")` — extracts the German name from a localized source field
