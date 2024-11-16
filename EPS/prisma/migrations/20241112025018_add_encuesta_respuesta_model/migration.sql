-- CreateTable
CREATE TABLE "Encuesta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fechaCreacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completada" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "encuestaId" INTEGER NOT NULL,
    "respuesta" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Respuesta_encuestaId_fkey" FOREIGN KEY ("encuestaId") REFERENCES "Encuesta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
