/*
  Warnings:

  - The `images` column on the `Catalog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `images` column on the `Uniques` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Catalog" DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];

-- AlterTable
ALTER TABLE "Uniques" DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];
