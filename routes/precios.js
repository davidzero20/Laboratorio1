const  {Router} = require ('express');
const {
    getPrecios,
    postPrecios,
    putPrecios,
    deletePrecios
} = require ('../controllers/precios');

//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de el
const router = Router();

//Inicializa la funcion Router
router.get('/', getPrecios)
router.post('/', postPrecios)
router.put('/', putPrecios)
router.delete('/', deletePrecios)

module.exports = router