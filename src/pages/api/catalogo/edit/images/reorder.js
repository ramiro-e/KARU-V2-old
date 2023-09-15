import { PrismaClient } from '@prisma/client';
import authAdmin from '../../../../../middlewares/authAdmin';

const prisma = new PrismaClient();

async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id, imageIds } = req.body;

      if (!id || !imageIds) {
        return res.status(400).json({ error: 'Missing product ID or image IDs.' });
      }

      // Find the product by ID from the database
      const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }

      // Check if all image IDs provided in the request actually exist in the product's additionalImages array
      if (imageIds.some((imageId) => !product.additionalImages.includes(imageId))) {
        return res.status(400).json({ error: 'Invalid image IDs provided.' });
      }

      // Update the order of images in the product's additionalImages array
      const updatedProduct = await prisma.product.update({
        where: { id: parseInt(id) },
        data: {
          additionalImages: imageIds,
        },
      });

      // Return the updated product or a success message
      return res.status(200).json({ message: 'Images reordered successfully.', product: updatedProduct });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Server error.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

export default authAdmin(handler)
