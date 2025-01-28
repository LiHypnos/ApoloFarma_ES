import bd from '../bd.js';

async function get() {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM EnderecoCliente;");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar endereços:", error);
        return null;
    }
}

async function getEndereco(id) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM EnderecoCliente WHERE idEndereco = ?;", [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar endereço:", error);
        return null;
    }
}

async function create(endereco) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "INSERT INTO EnderecoCliente (idCliente, uf, endereco) VALUES (?, ?, ?);",
            [endereco.idCliente, endereco.uf, endereco.endereco]
        );
        return result;
    } catch (error) {
        console.error("Erro ao criar endereço:", error);
        return null;
    }
}

async function update(endereco) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "UPDATE EnderecoCliente SET idCliente = ?, uf = ?, endereco = ? WHERE idEndereco = ?;",
            [endereco.idCliente, endereco.uf, endereco.endereco, endereco.idEndereco]
        );
        return result;
    } catch (error) {
        console.error("Erro ao atualizar endereço:", error);
        return null;
    }
}

async function del(id) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query("DELETE FROM EnderecoCliente WHERE idEndereco = ?;", [id]);
        return result;
    } catch (error) {
        console.error("Erro ao deletar endereço:", error);
        return null;
    }
}

export default { get, getEndereco, create, update, del };
