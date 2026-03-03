This function sends an HTTP PUT request to a specified URL with the provided parameters
in JSON format. Sets application/json as the default content type. Optionally, custom
headers can be included. The response of the request is returned as a JSON object.

##### Parameters
* `url` - The URL to which the request should be sent.
* `params` - An object containing the parameters to be sent as JSON in the request body.
* `headers` - (Optional) An object with custom HTTP headers for the request.

##### Examples
* `putJson("https://api.example.com/items/123", {"name": "Updated Item"})`
* `putJson("https://api.example.com/items/123", {"status": "active"}, {"Authorization": "Bearer myToken"})`
