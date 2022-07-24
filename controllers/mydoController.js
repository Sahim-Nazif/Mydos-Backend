const Mydos=require('../models/mydos')

const create_mydos=async(req, res)=>{

    const mydos= new Mydos(req.body)

    await mydos.save((error, data)=>{

        if (error) {
            return res.status(400).json({error:'Sorry to do could not be saved!'})
        }
        res.json(data)
    })
}

const delete_by_id=(req, res, next, id) =>{

    
}

const delete_mydos=(req, res)=>{

    const mydos=req.mydos
    mydos.remove((err, result)=>{
        if (err) {
            return res.status(400).json({error:'Ops we could not delete that !'})
        } 
        res.json({message:'Your do removed successfully !'})
    })

}

module.exports={
    create_mydos,
    delete_mydos
}