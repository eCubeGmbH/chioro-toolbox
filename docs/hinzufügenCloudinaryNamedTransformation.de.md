Ähnlich wie `addCloudinaryTransformation`, aber für den speziellen Fall des Hinzufügens einer Named-Transformation. Die folgenden Parameter werden unterstützt:

- `cloudinaryUrl`: Die URL der Cloudinary Assets
- `publicId`: Die öffentliche ID des Assets in Cloudinary
- `namedTransformation`: Die ID der Named-Transformation.


**Beispiele**

- `addCloudinaryTransformation("https://res.cloudinary.com/ecubede/bekleidung/4029051623453", 'bekleidung/4029051623453', 't1')` &#8594; "https://res.cloudinary.com/ecubede/t_t1/bekleidung/4029051623453"
