import { PrismaClient } from '@prisma/client';
import authAdmin from '../../../../middlewares/authAdmin';

const prisma = new PrismaClient();

async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { name, description, price, isActive } = req.body;

      if (!name || !price || !isActive) {
        return res.status(400).json({ error: 'Missing required fields.' });
      }

      // Use Prisma Client to update data in the catalog table
      try {
        const updatedCatalog = await prisma.catalog.update({
          where: { id: parseInt(id) },
          data: {
            name,
            description,
            price,
            isActive,
          },
        });
        res.status(200).json({ message: 'Catalog updated successfully.', catalog: updatedCatalog });
      } catch (error) {
        console.error('Error updating data in the database:', error);
        res.status(500).json({ error: 'Database error.' });
      }
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Server error.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

export default authAdmin(handler)