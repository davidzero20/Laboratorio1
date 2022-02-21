const  {Router} = require ('express');
const {
    getSeguimiento,
    postSeguimiento,
    putSeguimiento,
    deleteSeguimiento
} = require ('../controllers/seguimientos');

//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de el
const router = Router();

//Inicializa la funcion Router
router.get('/', getSeguimiento)
router.post('/', postSeguimiento)
router.put('/:id', putSeguimiento)
router.delete('/:id', deleteSeguimiento)

module.exports = router