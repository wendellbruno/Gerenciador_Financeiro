module.exports =  (app) =>{
   
   const findAll = async (req,res) =>{
       const usuarios = await app.services.user.findAll()
       return res.status(200).json(usuarios)
    };
    
    const create = async (req,res) =>{
        const {...user} = req.body
        const usuario = await app.services.user.create(user)
        if(usuario.error) return  res.status(400).json(usuario)
        return res.status(201).json(usuario[0])
    }

    return { findAll, create};
}