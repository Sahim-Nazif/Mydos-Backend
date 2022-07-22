const Mydos=require('../models/mydos')

const create_mydos=(req, res)=>{

    const mydos= new Mydos(req.body.mydos)

    mydos.save((error, data)=>{

        if (error) {
            return res.status(400).json({error:'Sorry to do could not be saved!'})
        }
        res.json(data)
    })
}

module.exports={
    create_mydos
}