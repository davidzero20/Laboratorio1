const  {Router} = require ('express');
const {
    getPaquetes,
    postPaquetes,
    putPaquetes,
    deletePaquetes
} = require ('../controllers/paquetes');

//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de el
const router = Router();

//Inicializa la funcion Router
router.get('/', getPaquetes)
router.post('/', postPaquetes)
router.put('/:id', putPaquetes)
router.delete('/:id', deletePaquetes)

module.exports = router