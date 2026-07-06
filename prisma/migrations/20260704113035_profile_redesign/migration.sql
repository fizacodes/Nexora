/*
  Warnings:

  - You are about to drop the column `bio` on the `CandidateProfile` table. All the data in the column will be lost.
  - You are about to drop the `_CandidateProfileToSkill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `profileId` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CandidateProfileToSkill" DROP CONSTRAINT "_CandidateProfileToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_CandidateProfileToSkill" DROP CONSTRAINT "_CandidateProfileToSkill_B_fkey";

-- DropIndex
DROP INDEX "Skill_name_key";

-- AlterTable
ALTER TABLE "CandidateProfile" DROP COLUMN "bio",
ADD COLUMN     "summary" TEXT;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "profileId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CandidateProfileToSkill";

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "field" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "grade" TEXT,
    "description" TEXT,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT,
    "employmentType" TEXT,
    "currentlyWorking" BOOLEAN NOT NULL DEFAULT false,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "description" TEXT,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "CandidateProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "CandidateProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "CandidateProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
