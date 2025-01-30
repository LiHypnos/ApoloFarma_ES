import clienteServices from '../services/cliente.services.js'

async function get(req, res){
    const data = await clienteServices.get();
    res.send(data)
}

async function getCliente(req, res){
    const nome = req.params.nome
    const data = await clienteServices.getCliente(nome)
    res.send(data)
}
async function getClienteCpf(req, res){
    const cpf = req.params.cpf
    const data = await clienteServices.getClienteCpf(cpf)
    res.send(data)
}

async function create(req, res) {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const senha = req.body.senha;
    const uf = req.body.uf;
    const endereco = req.body.endereco;
    const numero = req.body.numero;
    const dataValidade = req.body.dataValidade;
    const cvv = req.body.cvv;
    const titular = req.body.titular;


    // Validação para garantir que todos os dados necessários estão presentes
    if (!nome || !cpf || !email || !senha || !uf || !endereco || !numero || !dataValidade || !cvv || !titular) {
        return res.status(400).send('Missing required fields');
    }
    if (senha.length < 6) {
        return res.status(400).send('Senha deve ter no mínimo 6 caracteres');
    }
    if (cpf.length !== 11) {
        return res.status(400).send('CPF deve ter 11 dígitos');
    }
    if (numero.length !== 16) {
        return res.status(400).send('Número do cartão deve ter 16 dígitos');
    }
    if (email.indexOf('@') === -1) {
        return res.status(400).send('Email inválido');
    }

    try {
        // Aqui você pode chamar a função de criar cliente com endereço e cartão
        const clienteData = {
            nome: nome,
            cpf,
            email,
            senha,
            uf,
            endereco,
            numero,
            dataValidade,
            cvv,
            titular
        };
        // Chama a função para criar o cliente com o cartão e endereço
        const clienteCriado = await clienteServices.create(clienteData);
        
        // Se a criação for bem-sucedida, retorna os dados do cliente
        return res.status(201).json({ message: 'Cliente criado com sucesso', cliente: clienteCriado });
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        return res.status(500).send('Erro ao criar cliente');
    }
}

async function update(req, res) {
    const {id, nome, cpf, email, senha } = req.body;

    // Validação para garantir que pelo menos o nome ou algum outro campo de cliente está sendo alterado
    if (!nome && !cpf && !email && !senha) {
        return res.status(400).send('campos não válidos');
    }
    if (senha && senha.length < 6) {
        return res.status(400).send('Senha deve ter no mínimo 6 caracteres');
    }
    if (cpf && cpf.length !== 11) {
        return res.status(400).send('CPF deve ter 11 dígitos');
    }
    if (email && email.indexOf('@') === -1) {
        return res.status(400).send('Email inválido');
    }
    if (!id) {
        return res.status(400).send('Missing required fields');
    }
    try {
        // Chama a função de update para o cliente, mas sem alterar endereço ou cartão
        const clienteData = {
            id,
            nome,
            cpf,
            email,
            senha
        };

        // Chama o serviço de atualização para o cliente
        const clienteAtualizado = await clienteServices.update(clienteData);

        // Se a atualização for bem-sucedida, retorna os dados do cliente atualizado
        return res.status(200).json({ message: 'Cliente atualizado com sucesso', cliente: clienteAtualizado });
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        return res.status(500).send('Erro ao atualizar cliente');
    }
}


async function del(req, res){
    const id = req.body.id
    const data = await clienteServices.del(id)
    res.send(data)
}

export default {get, getCliente, getClienteCpf, create, update, del}