const express=require('express')
const router=express.Router()
const {create_mydos, delete_mydos}=require('../controllers/mydoController')


router.post('/', create_mydos)
router.delete('/delete/:mydoId', delete_mydos)

router.param('mydoId', )
module.exports=router