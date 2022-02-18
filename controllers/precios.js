const { request, response } = require('express')
const { ListadoPrecios } = require ('../models/paquetes');
const { guardarDB, leerDB } = require ('../helpers/gestorDB')

const getPrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
    

const postPrecios = (req = request, res = response) =>{
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPrecios(req.body)
    guardarDB(lista.listadoArr,'precios')
    res.send('Registro Creado')
}

const putPrecios = (req = request, res = response) =>
    res.send('PUT Endpoint para Precios')
    
const deletePrecios = (req = request, res = response) =>
    res.send('DELETE Endpoint para Precios')      

module.exports ={
    getPrecios,
    postPrecios,
    putPrecios,
    deletePrecios
}
