import { PrismaClient } from "prisma";

const prisma = new PrismaClient();

export default async function (req, res) {
    const { name, image, price, description } = req.body;
    const { id } = req.params;
    
    try {
        await prisma.catalog.update({
        where: { id },
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