A Cloudinary specific utility function to add transformations to the Cloudinary URL based on the given parameters: 

- `cloudinaryUrl`: The URL of the cloudinary assets
- `publicId`: The asset's public ID in Cloudinary
- `transformation`: The transformation instructions or a named transformation.


**Examples**

- `addCloudinaryTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453", 'bekleidung/4029051623453', 'w_70,h_53,c_scale')` &#8594; "https://res.cloudinary.com/ecubede/w_70,h_53,c_scale/bekleidung/4029051623453"
