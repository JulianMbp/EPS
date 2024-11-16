-- CreateTable
CREATE TABLE "Medicamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_medicamento" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad_disponible" INTEGER NOT NULL,
    "laboratorio" TEXT NOT NULL,
    "fecha_vencimiento" DATETIME NOT NULL,
    "precio" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Proveedor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "medicamentoID" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" INTEGER,
    "direccion" TEXT,
    CONSTRAINT "Proveedor_medicamentoID_fkey" FOREIGN KEY ("medicamentoID") REFERENCES "Medicamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "factura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha_factura" DATETIME,
    "Total_factura" REAL NOT NULL,
    "forma_pago" TEXT NOT NULL,
    "descuento" REAL,
    "Eps_cubre" BOOLEAN NOT NULL DEFAULT false
);
