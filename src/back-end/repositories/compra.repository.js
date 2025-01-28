import bd from '../bd.js';

async function get() {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Compra;");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar compras:", error);
        return null;
    }
}

async function getCompra(id) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Compra WHERE idCompra = ?;", [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar compra:", error);
        return null;
    }
}

async function create(compra) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "INSERT INTO Compra (idCliente, idMedicamento, idEndereco, idCartão, data, quantidade, valorTotal) VALUES (?, ?, ?, ?, ?, ?, ?);",
            [compra.idCliente, compra.idMedicamento, compra.idEndereco, compra.idCartao, compra.data, compra.quantidade, compra.valorTotal]
        );
        return result;
    } catch (error) {
        console.error("Erro ao criar compra:", error);
        return null;
    }
}

async function update(compra) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "UPDATE Compra SET idCliente = ?, idMedicamento = ?, idEndereco = ?, idCartão = ?, data = ?, quantidade = ?, valorTotal = ? WHERE idCompra = ?;",
            [compra.idCliente, compra.idMedicamento, compra.idEndereco, compra.idCartao, compra.data, compra.quantidade, compra.valorTotal, compra.idCompra]
        );
        return result;
    } catch (error) {
        console.error("Erro ao atualizar compra:", error);
        return null;
    }
}

async function del(id) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query("DELETE FROM Compra WHERE idCompra = ?;", [id]);
        return result;
    } catch (error) {
        console.error("Erro ao deletar compra:", error);
        return null;
    }
}

export default { get, getCompra, create, update, del };
