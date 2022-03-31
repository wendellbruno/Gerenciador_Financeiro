module.exports = (app) =>{

    const findAll =  async () =>{
       const usuarios = await app.db.select().table('users') 
        return usuarios;
    }

    const create = async (user) =>{
       if(!user.name) return {error: 'Nome invalido'}
       if(!user.email) return {error: 'Email invalido'}
       if(!user.password) return {error: 'Senha invalida'}
       const busca = await app.db.select().table('users').where({email: user.email})
       if(busca != undefined) return {error: 'Email já cadastrado'}
       const usuario = await app.db.table('users').insert(user)
       return usuario;
    }

    return {findAll, create}
}