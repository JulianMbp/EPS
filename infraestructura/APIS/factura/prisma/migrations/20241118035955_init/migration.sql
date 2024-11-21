-- CreateTable
CREATE TABLE "factura" (
    "id" SERIAL NOT NULL,
    "paciente" TEXT NOT NULL,
    "medico" TEXT NOT NULL,
    "fecha_factura" TIMESTAMP(3),
    "Total_factura" DOUBLE PRECISION NOT NULL,
    "forma_pago" TEXT NOT NULL,
    "descuento" DOUBLE PRECISION,
    "Eps_cubre" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "factura_pkey" PRIMARY KEY ("id")
);
