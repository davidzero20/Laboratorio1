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

const putSeguimiento = (req = request, res = response) =>{
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
        p.id == req.params.id
        ? {"id": item.id,...req.body}
        : item
    );
   guardarDB(datos, 'seguimientos')
   res.send('Registro Actualizado')
}    

const deleteSeguimiento = (req = request, res = response) =>{
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    //Funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !==req.params.id)
    guardarDB(data,'seguimientos')
    res.send('Registro Eliminado')     
}    

module.exports ={
    getSeguimiento,
    postSeguimiento,
    putSeguimiento,
    deleteSeguimiento
}
