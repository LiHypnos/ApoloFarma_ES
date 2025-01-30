import bd from './bd.js';

async function get() {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Cartao;");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar cartões:", error);
        return null;
    }
}

async function getCartao(id) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Cartao WHERE idCartão = ?;", [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar cartão:", error);
        return null;
    }
}

async function create(cartao) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "INSERT INTO Cartao (numero, dataValidade, cvv, titular, idCliente) VALUES (?, ?, ?, ?, ?);",
            [cartao.numero, cartao.dataValidade, cartao.cvv, cartao.titular, cartao.idCliente]
        );
        return result;
    } catch (error) {
        console.error("Erro ao criar cartão:", error);
        return null;
    }
}

async function update(cartao) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "UPDATE Cartao SET numero = ?, dataValidade = ?, cvv = ?, titular = ?, idCliente = ? WHERE idCartão = ?;",
            [cartao.numero, cartao.dataValidade, cartao.cvv, cartao.titular, cartao.idCliente, cartao.idCartao]
        );
        return result;
    } catch (error) {
        console.error("Erro ao atualizar cartão:", error);
        return null;
    }
}

async function del(id) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query("DELETE FROM Cartao WHERE idCartão = ?;", [id]);
        return result;
    } catch (error) {
        console.error("Erro ao deletar cartão:", error);
        return null;
    }
}

export default { get, getCartao, create, update, del };
