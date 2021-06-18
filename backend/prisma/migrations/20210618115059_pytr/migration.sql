/*
  Warnings:

  - You are about to drop the column `chatwithId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_chatwithId_fkey";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "chatwithId";

-- DropTable
DROP TABLE "Post";
