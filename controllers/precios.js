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

const putPrecios = (req = request, res = response) =>{
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
        p.id == req.params.id
        ? {"id": item.id,...req.body}
        : item
    );
   guardarDB(datos, 'precios')
   res.send('Registro Actualizado')
}    

const deletePrecios = (req = request, res = response) =>{
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    //Funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !==req.params.id)
    guardarDB(data,'precios')
    res.send('Registro Eliminado')     
}    

module.exports ={
    getPrecios,
    postPrecios,
    putPrecios,
    deletePrecios
}
