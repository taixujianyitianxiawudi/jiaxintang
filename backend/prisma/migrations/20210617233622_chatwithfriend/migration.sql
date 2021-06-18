-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "chatwithId" INTEGER;

-- AddForeignKey
ALTER TABLE "Room" ADD FOREIGN KEY ("chatwithId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
