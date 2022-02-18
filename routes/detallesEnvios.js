const  {Router} = require ('express');
const {
    getdetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
} = require ('../controllers/detallesEnvios');

//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de el
const router = Router();

//Inicializa la funcion Router
router.get('/', getdetallesEnvios)
router.post('/', postDetallesEnvios)
router.put('/', putDetallesEnvios)
router.delete('/', deleteDetallesEnvios)

module.exports = router