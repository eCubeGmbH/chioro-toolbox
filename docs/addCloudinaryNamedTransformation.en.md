Adds a named transformation to a Cloudinary URL. Named transformations are defined in Cloudinary and allow for the reuse of transformation settings.

##### Parameters
* `cloudinaryUrl` - The Cloudinary URL to which the transformation should be added.
* `publicId` - The public ID of the image in Cloudinary.
* `transformation` - The name of the named transformation.

##### Examples
* `addCloudinaryNamedTransformation('https://res.cloudinary.com/demo/image/upload/sample', 'sample', 'thumbnail')` Output: https://res.cloudinary.com/demo/image/upload/t_thumbnail/sample
* `addCloudinaryNamedTransformation('https://res.cloudinary.com/demo/image/upload/w_200/sample', 'sample', 'sepia')` Output: https://res.cloudinary.com/demo/image/upload/w_200/t_sepia/sample
