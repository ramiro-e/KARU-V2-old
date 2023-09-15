import fs from 'fs';
import { PrismaClient } from '@prisma/client';
import authAdmin from '../../../../../middlewares/authAdmin';

const prisma = new PrismaClient();

async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id, imageId } = req.query;

      if (!id || !imageId) {
        return res.status(400).json({ error: 'Missing product ID or image ID.' });
      }

      // Get the product by ID from the database
      const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }

      // Find the image URL in the product's images array
      const imageIndex = product.images.findIndex((imageUrl) => imageUrl.includes(imageId));

      if (imageIndex === -1) {
        return res.status(404).json({ error: 'Image not found.' });
      }

      // Delete the image file from the server's public/uploads directory
      const imagePath = `./public/uploads/${product.images[imageIndex]}`;
      fs.unlinkSync(imagePath);

      // Remove the image URL from the product's images array
      const updatedProduct = await prisma.product.update({
        where: { id: parseInt(id) },
        data: {
          images: {
            delete: [product.images[imageIndex]],
          },
        },
      });

      // Return the updated product or a success message
      return res.status(200).json({ message: 'Image deleted successfully.', product: updatedProduct });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Server error.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

export default authAdmin(handler)
