const { request, response } = require('express')
const { ListadoEnvios } = require('../models/envios');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const getEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista._listado.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}

/*const getEnvios = (req = request, res = response) =>
    res.send('GET Endpoint para Envios')*/

/*const postEnvios = (req = request, res = response) =>
    res.send('POST Endpoint para Envios')*/    

const putEnvios = (req = request, res = response) =>
    res.send('PUT Endpoint para Envios')
    
const deleteEnvios = (req = request, res = response) =>
    res.send('DELETE Endpoint para Envios')      

module.exports ={
    getEnvios,
    postEnvios,
    putEnvios,
    deleteEnvios
}
