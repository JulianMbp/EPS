-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fecha_nac" DATETIME NOT NULL,
    "telefono" TEXT,
    "direccion" TEXT,
    "email" TEXT
);

-- CreateTable
CREATE TABLE "PersonalMedico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "telefono" TEXT,
    "direccion" TEXT,
    "email" TEXT,
    "fechaIngreso" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_email_key" ON "Paciente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalMedico_email_key" ON "PersonalMedico"("email");
