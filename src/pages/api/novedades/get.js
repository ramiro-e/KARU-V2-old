import { PrismaClient } from "prisma";

const prisma = new PrismaClient();

export default async function (req, res) {

    try{
        prisma.catalog.findMany();
        res.status(200).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}