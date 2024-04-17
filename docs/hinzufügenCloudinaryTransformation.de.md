Diese Funktion fügt einer Cloudinary-URL eine Transformation hinzu. Sie ersetzt die Public ID in der URL durch die angegebene Transformation und die Public ID, um das Bild mit den gewünschten Änderungen darzustellen.

##### Parameter
* `cloudinaryUrl` - Die URL des Cloudinary-Bildes
* `publicId` - Die Public ID des Bildes
* `transformation` - Die Transformation, die auf das Bild angewendet werden soll, z.B. `w_200` für eine Breitenänderung.

##### Beispiele
* `hinzufügenCloudinaryTransformation('https://res.cloudinary.com/demo/image/upload/sample', 'sample', 'w_200')` Ausgabe: `https://res.cloudinary.com/demo/image/upload/w_200/sample` (Bild mit einer Breite von 200 Pixeln)
* `hinzufügenCloudinaryTransformation('https://res.cloudinary.com/demo/image/upload/w_200/sample', 'sample', 'c_fill,h_100,w_100')` Ausgabe: `https://res.cloudinary.com/demo/image/upload/c_fill,h_100,w_100/sample` (Bild quadratisch zugeschnitten mit 100x100 Pixeln) 
