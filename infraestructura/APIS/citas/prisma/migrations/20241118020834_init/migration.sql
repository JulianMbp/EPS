-- CreateTable
CREATE TABLE "Cita" (
    "id" SERIAL NOT NULL,
    "paciente" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'programada',
    "medico" TEXT,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id")
);
