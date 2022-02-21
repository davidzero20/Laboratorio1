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
        

const putDetallesEnvios = (req = request, res = response) =>{
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('Detalles Envios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
        p.id == req.params.id
        ? {"id": item.id,...req.body}
        : item
    );
   guardarDB(datos, 'Detalles Envios')
   res.send('Registro Actualizado')
}    

    
const deleteDetallesEnvios = (req = request, res = response) =>{
    let lista = new ListadodetallesEnvios()
    let datosJSON = leerDB('Detalles Envios');
    lista.cargarTareasFromArray(datosJSON)
    //Funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !==req.params.id)
    guardarDB(data,'Detalles Envios')
    res.send('Registro Eliminado')     
}
     

module.exports ={
    getdetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
}
