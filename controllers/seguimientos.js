const { request, response } = require('express')
const { ListadoSeguimiento } = require('../models/seguimientos');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const getSeguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}


const postSeguimiento = (req = request, res = response) =>{
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimientos(req.body)
    guardarDB(lista.listadoArr,'seguimientos')
    res.send('Registro Creado')
}   

const putSeguimiento = (req = request, res = response) =>
    res.send('PUT Endpoint para Seguimiento')
    
const deleteSeguimiento = (req = request, res = response) =>
    res.send('DELETE Endpoint para Seguimiento')      

module.exports ={
    getSeguimiento,
    postSeguimiento,
    putSeguimiento,
    deleteSeguimiento
}
