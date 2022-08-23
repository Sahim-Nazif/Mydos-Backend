const Mydos=require('../models/mydos')
const formidable= require('formidable')

const create_mydos=(req, res)=>{

    const form= new formidable.IncomingForm()

    form.keepExtensions=true
    form.parse(req, (err, field)=>{
        if (err) {
            return res.status(400).json({error:'Something went wrong'})
        }
        const mydos=new Mydos(field)

        mydos.save((err, result)=>{
            if (err){
                return res.status(400).json({error:err})
            }
            return res.json(result)
        })
    })
    // const mydos= new Mydos(req.body)

    // await mydos.save((error, data)=>{

    //     if (error) {
    //         return res.status(400).json(error)
    //     }
    //     res.json(data)
    // })
}


//get all mydos

const list_mydos=(req, res)=>{
    Mydos.find()
        //Sorting by descending order
         .sort({createdAt: -1})
         .exec((error, mydos)=>{
            if (error){
                return res.status(400).json({error:'No my dos'})
            }
            return res.json(mydos)
         })
}

const read= (req, res)=>{

    return res.json(req.mydos)
}
const get_byId=(req, res, next, id) =>{

    Mydos.findById(id)
    
             .exec((error, mydos)=>{
            if (error || ! mydos) {
                return res.status(400).json(error)
            }
            req.mydos=mydos
            next()
          })
    
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

const update_mydos=async(req, res)=>{

    const mydo=req.mydos 
    mydo.todo=req.body.todo

    await mydo.save((err, mydos)=>{

        if (err){
            return res.status(400).json({error:' Sorry we could not update your do'})

        }
        res.json(mydos)
    })
}

module.exports={
    create_mydos,
    delete_mydos,
    get_byId,
    read,
    list_mydos,
    update_mydos
}