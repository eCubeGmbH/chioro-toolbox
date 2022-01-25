Similar to `addCloudinaryTransformation` but for the special case of adding a named transformation. The following parameters are supported:

- `cloudinaryUrl`: The URL of the cloudinary assets
- `publicId`: The asset's public ID in cloudinary
- `namedTransformation`: The id of the named transformation.


**Examples**

- `addCloudinaryTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453", 'bekleidung/4029051623453', 't1')` &#8594; "https://res.cloudinary.com/ecubede/t_t1/bekleidung/4029051623453"
