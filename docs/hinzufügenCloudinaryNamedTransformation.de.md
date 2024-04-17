Fügt einer Cloudinary-URL eine benannte Transformation hinzu. Benannte Transformationen werden in Cloudinary definiert und ermöglichen die Wiederverwendung von Transformationseinstellungen.

##### Parameter
* `cloudinaryUrl` - Die Cloudinary-URL, zu der die Transformation hinzugefügt werden soll.
* `publicId` - Die Public ID des Bildes in Cloudinary.
* `transformation` - Der Name der benannten Transformation.

##### Beispiele
* `addCloudinaryNamedTransformation('https://res.cloudinary.com/demo/image/upload/sample', 'sample', 'thumbnail')` Ausgabe: https://res.cloudinary.com/demo/image/upload/t_thumbnail/sample
* `addCloudinaryNamedTransformation('https://res.cloudinary.com/demo/image/upload/w_200/sample', 'sample', 'sepia')` Ausgabe: https://res.cloudinary.com/demo/image/upload/w_200/t_sepia/sample
