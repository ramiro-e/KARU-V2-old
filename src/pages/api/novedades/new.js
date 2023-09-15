import { PrismaClient } from "prisma";

const prisma = new PrismaClient();

export default async function (req, res) {
    const { name, image, description } = req.body;

    try {
        await prisma.catalog.create({
        data: {
            name, 
            description,
            image, 
            price
        },
        });
        res.status(200).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}