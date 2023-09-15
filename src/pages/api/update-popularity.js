import { PrismaClient } from "prisma";

const prisma = new PrismaClient();

async function updatePopularity() {
  try {
    // Update the popularity of all products based on a decay factor
    const decayFactor = 0.9; // Adjust as needed
    await prisma.product.updateMany({
      where: {},
      data: {
        popularity: {
          multiply: decayFactor,
          minimum: 0, // Ensure popularity doesn't go below 0
        },
      },
    });

    console.log('Popularity scores updated.');
  } catch (error) {
    console.error('Error updating popularity scores:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updatePopularity().catch((error) => {
  console.error('An error occurred:', error);
});