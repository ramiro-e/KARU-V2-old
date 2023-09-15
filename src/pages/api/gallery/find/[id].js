import { PrismaClient } from "prisma";

const prisma = new PrismaClient();

export default async function (req, res) {
    const { id } = req.params;

    try{
        await prisma.product.findOne({
            where: { id },
        });
        res.status(200).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}