import { PrismaClient } from '@prisma/client';
import authAdmin from '../../../middlewares/authAdmin';

const prisma = new PrismaClient();

async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: 'Missing product ID.' });
      }

      // Find the product by ID from the database
      const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }

      // Delete the product from the database
      await prisma.product.delete({
        where: { id: parseInt(id) },
      });

      // Return a success message
      return res.status(200).json({ message: 'Product deleted successfully.' });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Server error.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

export default authAdmin(handler)