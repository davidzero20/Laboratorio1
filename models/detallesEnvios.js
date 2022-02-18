const { v4: uuidv4 } = require ('uuid')

class DetallesEnvios{
    constructor(id,idEnvio,idPaquetes){
       this.id=uuidv4(),
       this.id=id
       this.idEnvio=idEnvio
       this.idPaquetes=idPaquetes
    }
}

class ListadodetallesEnvios{
    constructor(){
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[Key];
            listado.push(tarea);
        });
    
        return listado;
    }
    
    cargarTareasFromArray( datos = [] ) {
        datos.forEach( detallesEnvios => {
            this._listado[detallesEnvios.id] = detallesEnvios;
        });
    }

    creardetallesEnvios(datos){
        const detallesenvios = new DetallesEnvios(
            datos.id,
            datos.idEnvio,
            datos.idPaquetes);
            this._listado[detallesenvios.id] = detallesenvios;
    }
 }

module.exports = {
    ListadodetallesEnvios
}