const { request, response } = require('express')
const { ListadoPaquetes } = require('../models/paquetes');
const { guardarDB, leerDB} = require('../helpers/gestorDB');
const res = require('express/lib/response');

const getPaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB ('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postPaquetes = (req = request, request = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPaquete(req.body)
    guardarDB(lista.listadoArr,'paquetes')
    res.send('Registro Creado')
}
 

const putPaquetes = (req = request, res = response) =>
    res.send('PUT Endpoint para Paquetes')
    
const deletePaquetes = (req = request, res = response) =>
    res.send('DELETE Endpoint para Paquetes')      

module.exports ={
    getPaquetes,
    postPaquetes,
    putPaquetes,
    deletePaquetes
}
