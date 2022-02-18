const  {Router} = require ('express');
const {
    getEnvios,
    postEnvios,
    putEnvios,
    deleteEnvios
} = require ('../controllers/envios');

//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de el
const router = Router();

//Inicializa la funcion Router
router.get('/', getEnvios)
router.post('/', postEnvios)
router.put('/', putEnvios)
router.delete('/', deleteEnvios)

module.exports = router