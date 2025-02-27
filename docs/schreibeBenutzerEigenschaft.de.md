Schreibt/überschreibt eine bestimmte Eigenschaft in den Abschnitten der Benutzereigenschaften der Metadaten (Kontext). Diese Funktion kann
verwendet werden, um sowohl in Eigenschaften auf Flow-Ebene als auch auf Flow-Item-Ebene zu schreiben; die Syntax folgt dem Rückgabewert der kontext-Funktion.

Die kontext-Funktion gibt ein json-Objekt ähnlich diesem Beispiel zurück:
```json
{
  "name": "Trafo1",
  "userProperties": {
    "someValue": "anotherValue"
  },
  "subType": "LIST_TRANSFORMATION",
  "type": "OPERATION",
  "flow": {
    "operations": {
      "Trafo1": {
          "name": "Trafo1",
          "userProperties": {
              "someValue": "anotherValue"
          },
          "subType": "LIST_TRANSFORMATION",
          "type": "OPERATION"
      },
        "Trafo2": {
            "name": "Trafo2",
            "userProperties": {
                
            },
            "subType": "LIST_TRANSFORMATION",
            "type": "OPERATION"
        }
    },
    "name": "sample flow",
    "userProperties": {
      "flowLevelValue": "0"
    }
  }
}

```
In diesem Beispiel ist die aktuelle Operation „Trafo1“, daher sind die Informationen über diese Operation auf der Stammebene
des Kontextergebnisses. Um „anotherValue“ in die Benutzereigenschaften der aktuellen Operation (in diesem Fall Trafo1) zu schreiben, müssen wir Folgendes verwenden
`schreibeBenutzerEigenschaft('userProperties.anotherValue', 'hello')`

Wenn „anotherValue“ auf der Flow-Ebene geschrieben werden muss, verwenden wir:
`schreibeBenutzerEigenschaft('flow.userProperties.anotherValue', 'hello')`

Wenn „anotherValue“ auf der Flow-Item-Ebene in ein anderes Flow-Item geschrieben werden muss, verwenden wir:
`schreibeBenutzerEigenschaft('flow.operations.Trafo2.userProperties.anotherValue', 'hello')`

Manchmal muss der vorhandene Wert überschrieben werden, zum Beispiel bei der Implementierung eines Zählers. In diesen Fällen sollte eine andere Syntax dieser Funktion
verwendet werden, um den vorherigen Wert zu erhalten und zu manipulieren. Um zum Beispiel einen Zähler zu implementieren, 
der bei jeder Zuweisung inkrementiert und bei den aktuellen Flow-Item-Eigenschaften gespeichert wird, können wir folgendes verwenden:
`schreibeBenutzerEigenschaft("userProperties.counter", "0" , pre => (Number(pre) + 1).toString())`

