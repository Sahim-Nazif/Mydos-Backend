const express=require('express')
const router=express.Router()
const {create_mydos, delete_mydos,delete_by_id}=require('../controllers/mydoController')


router.post('/', create_mydos)
router.delete('/delete/:mydoId', delete_mydos)

router.param('mydoId',delete_by_id )
module.exports=router