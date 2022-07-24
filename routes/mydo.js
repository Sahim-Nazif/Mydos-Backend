const express=require('express')
const router=express.Router()
const {create_mydos, delete_mydos,get_byId, list_mydos,read, update_mydos}=require('../controllers/mydoController')


router.post('/', create_mydos)
router.delete('/delete/:mydoId', delete_mydos)
router.get('/list', list_mydos)
router.get('/:mydoId', read)
router.put('/update/:mydoId', update_mydos)

router.param('mydoId',get_byId )
module.exports=router