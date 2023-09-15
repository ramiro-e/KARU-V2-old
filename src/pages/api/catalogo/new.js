import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import authAdmin from '../../../middlewares/authAdmin';

const prisma = new PrismaClient();

// Multer configuration for handling image uploads
const storage = multer.diskStorage({
  destination: './public/catalog',
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

        const { name, description, price, isActive } = req.body;
        const images = req.files.map((file) => `/catalog/${file.filename}`);


        if (!name || !price || !isActive) {
          return res.status(400).json({ error: 'Missing required fields.' });
        }

        // Use Prisma Client to insert data into the catalog table
        try {
          const result = await prisma.catalog.create({
            data: {
              name,
              description,
              price,
              isActive,
              isUnique,
              images,
            },
          });
          res.status(201).json({ id: result.id });
        } catch (error) {
          console.error('Error inserting data into the database:', error);
          res.status(500).json({ error: 'Database error.' });
        }
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