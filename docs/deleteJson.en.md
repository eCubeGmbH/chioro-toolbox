This function sends an HTTP DELETE request to a specified URL. Optionally, custom headers
can be included. The response of the request is returned as a JSON object.

##### Parameters
* `url` - The URL to which the DELETE request should be sent.
* `headers` - (Optional) An object with custom HTTP headers for the request.

##### Examples
* `deleteJson("https://api.example.com/items/123")`
* `deleteJson("https://api.example.com/items/123", {"Authorization": "Bearer myToken"})`
