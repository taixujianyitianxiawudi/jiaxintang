-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "touserId" INTEGER;

-- AddForeignKey
ALTER TABLE "Chat" ADD FOREIGN KEY ("touserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;