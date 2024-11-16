/*
  Warnings:

  - Added the required column `tipo` to the `Pregunta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pregunta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "encuestaId" INTEGER NOT NULL,
    CONSTRAINT "Pregunta_encuestaId_fkey" FOREIGN KEY ("encuestaId") REFERENCES "Encuesta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pregunta" ("encuestaId", "id", "texto") SELECT "encuestaId", "id", "texto" FROM "Pregunta";
DROP TABLE "Pregunta";
ALTER TABLE "new_Pregunta" RENAME TO "Pregunta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
