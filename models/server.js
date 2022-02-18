const express = require('express');
const cors = require('cors')

class Server{
    constructor() {
        this.app = express()
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        //Directorio Publico
        this.app.use(express.static('public'));
        this.routes()
        }

        routes() {
            /*this.app.get('/precios', (req,res) => res.send('GET Endpoint para Precios'))
            this.app.post('/precios', (req,res) => res.send('POST Endpoint para Precios'))
            this.app.put('/precios', (req,res) => res.send('PUT Endpoint para Precios'))
            this.app.delete('/precios', (req,res) => res.send('DELETE Endpoint para Precios'))*/
            this.app.use('/precios', require('../routes/precios'))

            /*this.app.get('/paquetes', (req, res ) => res.send('GET Endpoint para Paquetes'))
            this.app.post('/paquetes', (req, res ) => res.send('POST Endpoint para Paquetes'))
            this.app.put('/paquetes', (req, res ) => res.send('PUT Endpoint para Paquetes'))
            this.app.delete('/paquetes', (req, res ) => res.send('DELETE Endpoint para Paquetes'))*/
            this.app.use('/paquetes', require('../routes/paquetes'))

            /*this.app.get('/envios', (req,res) =>res.send ('GET Endpoint para Envios'))
            this.app.post('/envios', (req,res) =>res.send ('POST Endpoint para Envios'))
            this.app.put('/envios', (req,res) =>res.send ('PUT Endpoint para Envios'))
            this.app.delete('/envios', (req,res) =>res.send ('DELETE Endpoint para Envios'))*/
            this.app.use('/envios', require('../routes/envios'))

            /*this.app.get('/detalleEnvios', (req,res) =>res.send ('GET Endpoint para DetalleEnvios'))
            this.app.post('/detalleEnvios', (req,res) =>res.send ('POST Endpoint para DetalleEnvios'))
            this.app.put('/detalleEnvios', (req,res) =>res.send ('PUT Endpoint para DetalleEnvios'))
            this.app.delete('/detalleEnvios', (req,res) =>res.send ('DELETE Endpoint para DetalleEnvios'))*/
            this.app.use('/detalleEnvios', require('../routes/detallesEnvios'))

            /*this.app.get('/seguimiento', (req,res) =>res.send ('GET Endpoint para Seguimiento'))
            this.app.post('/seguimiento', (req,res) =>res.send ('POST Endpoint para Seguimiento'))
            this.app.put('/seguimiento', (req,res) =>res.send ('PUT Endpoint para Seguimiento'))
            this.app.delete('/seguimiento', (req,res) =>res.send ('DELETE Endpoint para Seguimiento'))*/
            this.app.use('/seguimientos',require('../routes/seguimientos'))
            
        }

        listen(){
            this.app.listen(process.env.PORT, () =>
                    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT))
        }
    }


module.exports = Server