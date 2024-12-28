/**
 * @author EPS
 * @version 1.0.0
 * 
 * Servidor de express para la gestión de Citas Médicas
 * Esta clase inicia el servidor y define las rutas y middlewares
 */

const express = require('express');

const cors = require('cors');

/**
 * @class Server
 * clase servidor que inicia el servicio de express
 */
class Server{

    constructor(){
        this.app = express();
        this.port = 3200;
        this.paths = {
            
            encuesta: '/api/encuesta',
            
        };

        this.middlewares();
        this.routes();
    }


    middlewares(){
        const corsOptions = {
            origin: 'http://localhost:3000', 
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        };
        this.app.use(cors(corsOptions)); 
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use(this.paths.encuesta, require('../routes/encuesta_satisfaccion.routes')); 
        this.app.use(this.paths.paciente, require('../routes/user.routes'));
        this.app.use(this.paths.personal, require('../routes/personal_routes'));
        this.app.use(this.paths.farmacia, require('../routes/farmacia.routes'));
        this.app.use(this.paths.facturacion, require('../routes/facturacion.routes'));
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }
}

module.exports = Server;
