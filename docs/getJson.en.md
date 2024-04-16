#### Description
This function retrieves data from a specified URL and converts it into a JavaScript object. It uses an internal method to make the request and handle the response.

#### Parameters
* `url` - The URL from which to retrieve the data.
* `headers` - (Optional) Additional information that can be sent with the request.

#### Examples
* `getJson("https://api.example.com/data")` retrieves data from the specified URL and returns it as an object.
* `getJson("https://api.example.com/data", { "Authorization": "Bearer myToken" })` retrieves data from the specified URL and sends additional information with the request. 
