This function sends an HTTP POST request to a specified URL with the provided parameters in JSON format. Optionally, custom headers can be included. The response of the request is returned as a JSON object.

##### Parameters
* url - The URL to which the request should be sent.
* params - An object containing the parameters to be sent as a JSON string in the request body.
* headers - An optional object with custom HTTP headers for the request.

##### Examples
* `postJson("/api/data", {name: "Value"})`
* `postJson("/api/user", {id: 123}, {"Authorization": "Bearer ..."})` 
