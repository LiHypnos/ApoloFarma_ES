import bd from './bd.js';

async function get() {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Cliente;");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return null;
    }
}
async function getClienteId(id) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Cliente WHERE idCliente = ?;", [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        return null;
    }
}

async function getCliente(nome) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Cliente WHERE idCliente = ?;", [nome]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        return null;
    }
}
async function getClienteCpf(cpf) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Cliente WHERE cpf = ?;", [cpf]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        return null;
    }
}
async function create(cliente) {
    const conn = await bd.toConnect();
    try {
        await conn.query(
            "INSERT INTO Cliente (cpf, nome, email, senha) VALUES (?, ?, ?, ?);",
            [cliente.cpf, cliente.nome, cliente.email, cliente.senha]
        );
        const [rows] = await conn.query(
            "SELECT idCliente FROM Cliente WHERE cpf = ?;",
            [cliente.cpf]
        );

        if (rows.length === 0) {
            console.error("Cliente não encontrado pelo CPF fornecido.");
            return null;
        }

        const idCliente = rows[0].idCliente;

        // Agora, inserir o endereço usando o idCliente encontrado
        await conn.query(
            "INSERT INTO EnderecoCliente (idCliente, uf, endereco) VALUES (?, ?, ?);",
            [idCliente, cliente.uf, cliente.endereco]
        );
        const [result] = await conn.query(
            "INSERT INTO Cartao (numero, dataValidade, cvv, titular, idCliente) VALUES (?, ?, ?, ?, ?);",
            [cliente.numero, cliente.dataValidade, cliente.cvv, cliente.titular, idCliente]
        );
        return result;
    } catch (error) {
        console.error("Erro ao criar cliente:", error);
        return null;
    }
}

async function update(cliente) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "UPDATE Cliente SET cpf = ?, nome = ?, email = ?, senha = ? WHERE idCliente = ?;",
            [cliente.cpf, cliente.nome, cliente.email, cliente.senha, cliente.id]
        );
        return result;
    } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        return null;
    }
}

async function del(id) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query("DELETE FROM Cliente WHERE idCliente = ?;", [id]);
        return result;
    } catch (error) {
        console.error("Erro ao deletar cliente:", error);
        return null;
    }
}

export default { get, getCliente, getClienteId, getClienteCpf, create, update, del };
