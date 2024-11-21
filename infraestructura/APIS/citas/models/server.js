const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = 3100;
    this.paths = {
      citas: '/api/citas',
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Opciones de configuración de CORS
    const corsOptions = {
      origin: 'http://localhost:3000', // Dirección de tu frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    };

    this.app.use(cors(corsOptions)); // Configuración avanzada de CORS
    this.app.use(express.json());   // Middleware para parsear JSON
  }

  routes() {
    this.app.use(this.paths.citas, require('../routes/citas_medicas.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor funcionando en el puerto: ${this.port}`);
    });
  }
}

module.exports = Server;
