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
        this.port = 3300;
        this.paths = {
            factura: '/api/factura'
           
        };

        this.middlewares();
        this.routes();
    }


    middlewares(){

        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.paths.factura, require('../routes/facturacion.routes'));

    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }
}

module.exports = Server;