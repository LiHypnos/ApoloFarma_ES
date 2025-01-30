import medicamentoRepo from '../repositories/medicamento.repository.js'

async function get(){
    return await medicamentoRepo.get()
}

async function getMedicamento(nome){
    return await medicamentoRepo.getMedicamento(nome)
}

async function getMedicamentoId(id){
    return await medicamentoRepo.getMedicamentoId(id)
}

async function update(med){
    return await medicamentoRepo.update(med)
}

async function create(med){
    return await medicamentoRepo.create(med)
}

async function del(id){
    return await medicamentoRepo.del(id)
}
export default { get, getMedicamento, getMedicamentoId, create, update, del }

