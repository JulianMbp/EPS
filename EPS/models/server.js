/**
 * @author EPS
 * @version 1.0.0
 * 
 * Servidor de express para la gestión de Citas Médicas
 * Esta clase inicia el servidor y define las rutas y middlewares
 */

const express = require('express');

/**
 * @class Server
 * clase servidor que inicia el servicio de express
 */
class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.paths = {
            citas: '/api/citas',
            encuesta: '/api/encuesta',
            personal: '/api/personal',
            paciente: '/api/paciente',
            farmacia: '/api/farmacia',
            facturacion: '/api/factuacion'
        };

        this.middlewares();
        this.routes();
    }


    middlewares(){

        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.paths.citas, require('../routes/citas_medicas.routes'));
        this.app.use(this.paths.encuesta, require('../routes/encuesta_satisfaccion.routes')); 
        this.app.use(this.paths.paciente, require('../routes/user.routes'));
        this.app.use(this.paths.personal, require('../routes/personal_routes'));
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }
}

module.exports = Server;
