import medicamentoServices from '../services/medicamento.services.js'

async function get(req, res){
    const data = await medicamentoServices.get()
    res.send(data)
}
x
async function getMedicamento(req, res){
    const nome = req.params.nome
    const data = await medicamentoServices.getMedicamento(nome)
    res.send(data)
}

async function getMedicamentoId(req, res){
    const id = req.params.id
    const data = await medicamentoServices.getMedicamentoId(id)
    res.send(data)
}

async function create(req, res){
    const nome = req.body.nome
    const dosagem = req.body.dosagem
    const ativo = req.body.ativo
    const valor = req.body.valor
    const imagem = req.body.imagem
    const quantidade = req.body.quantidade
    const capsulas = req.body.capsulas

    if(!nome || !dosagem || !ativo || !valor || !imagem || !quantidade || !capsulas){
        return res.status(400).send('Missing required fields')
    }
    console.log(nome, dosagem, ativo, valor, imagem, quantidade, capsulas)
    const med = {
        nome,
        dosagem,
        ativo,
        valor,
        imagem,
        quantidade,
        capsulas
    }
    const data = await medicamentoServices.create(med)
    res.send(data)
}

async function update(req, res){
    const id = req.params.id
    const nome = req.body.nome
    const dosagem = req.body.dosagem
    const ativo = req.body.ativo
    const valor = req.body.valor
    const imagem = req.body.imagem
    const quantidade = req.body.quantidade
    const capsulas = req.body.capsulas
    console.log("ID recebido:", id);
    if(!nome || !dosagem || !ativo || !valor || !imagem || !quantidade || !capsulas){
        return res.status(400).send('Missing required fields')
    }

    const med = {
        id,
        nome,
        dosagem,
        ativo,
        valor,
        imagem,
        quantidade,
        capsulas
    }
    const data = await medicamentoServices.update(med)
    res.send(data)
}

async function del(req, res){
    const id = req.body.id
    const data = await medicamentoServices.del(id)
    res.send(data)
}
                                 
export default { get, getMedicamento, getMedicamentoId, create, update, del }
