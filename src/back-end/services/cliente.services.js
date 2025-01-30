import clienteRepo from '../repositories/cliente.repository.js'

//aqui que define regras, exemplo, não pode castrar duas pessoas com o mesmo nome
async function get(){
    return await clienteRepo.get()
}
async function getCliente(nome){
    return await clienteRepo.getCliente(nome)
}
async function create(cliente){
    return await clienteRepo.create(cliente)
}
async function update(cliente){
    let existence = await ClienteRepo.getClienteId(cliente.id)
    if(existence.length==0){
        return 'cliente not finded to update'
    } else {
        return await clienteRepo.update(existence)
    }
}
async function del(id){
    return await clienteRepo.del(id)
}

export default {get, getCliente, create, update, del}