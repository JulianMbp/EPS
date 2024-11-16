/*
  Warnings:

  - Added the required column `preguntaId` to the `Respuesta` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Pregunta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "encuestaId" INTEGER NOT NULL,
    CONSTRAINT "Pregunta_encuestaId_fkey" FOREIGN KEY ("encuestaId") REFERENCES "Encuesta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Opcion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "preguntaId" INTEGER NOT NULL,
    CONSTRAINT "Opcion_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Respuesta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "encuestaId" INTEGER NOT NULL,
    "preguntaId" INTEGER NOT NULL,
    "respuesta" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Respuesta_encuestaId_fkey" FOREIGN KEY ("encuestaId") REFERENCES "Encuesta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Respuesta_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Respuesta" ("encuestaId", "fecha", "id", "respuesta") SELECT "encuestaId", "fecha", "id", "respuesta" FROM "Respuesta";
DROP TABLE "Respuesta";
ALTER TABLE "new_Respuesta" RENAME TO "Respuesta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
