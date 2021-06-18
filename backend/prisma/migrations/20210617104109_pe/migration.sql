/*
  Warnings:

  - You are about to drop the column `currentNumberofPeople` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "currentNumberofPeople",
ADD COLUMN     "currentNumberofUsers" INTEGER NOT NULL DEFAULT 0;
