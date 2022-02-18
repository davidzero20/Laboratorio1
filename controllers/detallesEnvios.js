const { request, response } = require('express')
const { ListadodetallesEnvios } = require('../models/detallesEnvios');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const getdetallesEnvios = (req = request, res = response) => {
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.creardetallesEnvios(req,body)
    guardarDB(lista.listadoArr,'detallesEnvios')
    res.send('Registro Creado')
}


const postDetallesEnvios = (req = request, res = response) =>{
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('Detalles Envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.creardetallesEnvios(req.body)
    guardarDB(lista.listadoArr,"Detalles Envios")
    res.send('Registro Creado')
}
        

const putDetallesEnvios = (req = request, res = response) =>
    res.send('PUT Endpoint para Detalles Envios')
    
const deleteDetallesEnvios = (req = request, res = response) =>
    res.send('DELETE Endpoint para Detalles Envios')      

module.exports ={
    getdetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
}
