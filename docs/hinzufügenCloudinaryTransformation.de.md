Eine Cloudinary-spezifische Utility-Funktion zum Hinzufügen von Transformationen zur Cloudinary-URL basierend auf den angegebenen Parametern:

- `cloudinaryUrl`: Die URL der Cloudinary-Assets
- `publicId`: Die öffentliche ID des Assets in Cloudinary
- `Transformation`: Die Anweisungen zur Transformation oder eine Named-Transformation in Cloudinary.


**Beispiele**

- `addCloudinaryTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453", 'bekleidung/4029051623453', 'w_70,h_53,c_scale')` &#8594; "https://res.cloudinary.com/ecubede/w_70,h_53,c_scale/bekleidung/4029051623453"
