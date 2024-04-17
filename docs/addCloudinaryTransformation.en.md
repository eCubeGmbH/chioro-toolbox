This function adds a transformation to a Cloudinary URL. It replaces the public ID in the URL with the specified transformation and the public ID to deliver the image with the desired modifications.

##### Parameters
* `loudinaryUrl` - The URL of the Cloudinary image.
* `publicId` - The public ID of the image
* `transformation` - The transformation to apply to the image, e.g., `w_200` for resizing width.

##### Examples
* `addCloudinaryTransformation('https://res.cloudinary.com/demo/image/upload/sample', 'sample', 'w_200')` Output: `https://res.cloudinary.com/demo/image/upload/w_200/sample` (Image with a width of 200 pixels)
* `addCloudinaryTransformation('https://res.cloudinary.com/demo/image/upload/w_200/sample', 'sample', 'c_fill,h_100,w_100')` Output: `https://res.cloudinary.com/demo/image/upload/c_fill,h_100,w_100/sample` (Image cropped to a square with 100x100 pixels) 
