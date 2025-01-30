import bd from './bd.js';

async function get() {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Medicamento;");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar medicamentos:", error);
        return null;
    }
}

async function getMedicamento(nome) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Medicamento WHERE nome = ?;", [nome]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar medicamento:", error);
        return null;
    }
}

async function getMedicamentoId(id) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Medicamento WHERE idMedicamento = ?;", [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar medicamento:", error);
        return null;
    }
}

async function create(med) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "INSERT INTO Medicamento (nome, dosagem, ativo, valor, imagem, quantidade, capsulas) VALUES (?, ?, ?, ?, ?, ?, ?);",
            [med.nome, med.dosagem, med.ativo, med.valor, med.imagem, med.quantidade, med.capsulas]
        );
        return result;
    } catch (error) {
        console.error("Erro ao criar medicamento:", error);
        return null;
    }
}

async function update(med) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "UPDATE Medicamento SET nome = ?, dosagem = ?, ativo = ?, valor = ?, imagem = ?, quantidade = ?, capsulas = ? WHERE idMedicamento = ?;",
            [med.nome, med.dosagem, med.ativo, med.valor, med.imagem, med.quantidade, med.capsulas, med.id]
        );
        return result;
    } catch (error) {
        console.error("Erro ao atualizar medicamento:", error);
        return null;
    }
}

async function del(id) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query("DELETE FROM Medicamento WHERE idMedicamento = ?;", [id]);
        return result;
    } catch (error) {
        console.error("Erro ao deletar medicamento:", error);
        return null;
    }
}


export default { get, create, update, del, getMedicamento, getMedicamentoId };
