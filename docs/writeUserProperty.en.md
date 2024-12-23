Writes/Overwrites a specific property in the user properties sections of the metadata(context). This function can be used
to write to both flow-level and flow-item-level properties, the syntax follows the return value of the context function.

The context function returns a json object similar to this example:
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
In this example, the current operation is "Trafo1", therefore the information about this operation is available at the root level
of the context result. In order to write "anotherValue" to the user properties of the current operation(in this case Trafo1), we need to use
`writeUserProperty('userProperties.anotherValue', 'hello')`
If "anotherValue" has to be written at the flow-level, we use:
`writeUserProperty('flow.userProperties.anotherValue', 'hello')`
If "anotherValue" has to be written at the flow-item-level in some other flow item, we use:
`writeUserProperty('flow.operations.Trafo2.userProperties.anotherValue', 'hello')`

Sometimes we need to overwrite the existing value, for example when implementing a counter of some sort. In these situations, another syntax of this function should be used
to get the previous value and manipulate it. For example to implement a counter which is incremented in every assignment and stored at the current flow-item properties, we can use:
`writeUserProperty("userProperties.counter", "0" , pre => (Number(pre) + 1).toString())`

