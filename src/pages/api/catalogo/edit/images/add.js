import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import authAdmin from '../../../../../middlewares/authAdmin';

const prisma = new PrismaClient();

// Multer configuration for handling image uploads
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, callback) => {
    const uniqueSuffix = uuidv4();
    const extension = path.extname(file.originalname);
    callback(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

const upload = multer({ storage }).array('images', 5); // Allow up to 5 images per request

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await upload(req, res, async (err) => {
        if (err) {
          console.error('Error uploading images:', err);
          return res.status(500).json({ error: 'Image upload failed.' });
        }

        // Get the product ID from the request body or params, depending on your implementation
        const id = req.query.id; // Replace with the actual field name for the product ID

        if (!id) {
          return res.status(400).json({ error: 'Missing product ID.' });
        }

        const images = req.files.map((file) => `/uploads/${file.filename}`);

        // Save the additional image URLs to the product in your database
        const product = await prisma.product.update({
          where: { id: parseInt(id) },
          data: {
            images: {
              push: images,
            },
          },
        });

        // Return the updated product or a success message
        return res.status(200).json({ message: 'Additional images uploaded successfully.', product });
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Server error.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

export default authAdmin(handler)
