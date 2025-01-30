import bd from './bd.js';

async function get() {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Gerente;");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar gerentes:", error);
        return null;
    }
}

async function getGerente(id) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Gerente WHERE idGerente = ?;", [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar gerente:", error);
        return null;
    }
}

async function create(gerente) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "INSERT INTO Gerente (cpf, nome, email, senha) VALUES (?, ?, ?, ?);",
            [gerente.cpf, gerente.nome, gerente.email, gerente.senha]
        );
        return result;
    } catch (error) {
        console.error("Erro ao criar gerente:", error);
        return null;
    }
}

async function update(gerente) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "UPDATE Gerente SET cpf = ?, nome = ?, email = ?, senha = ? WHERE idGerente = ?;",
            [gerente.cpf, gerente.nome, gerente.email, gerente.senha, gerente.idGerente]
        );
        return result;
    } catch (error) {
        console.error("Erro ao atualizar gerente:", error);
        return null;
    }
}

async function del(id) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query("DELETE FROM Gerente WHERE idGerente = ?;", [id]);
        return result;
    } catch (error) {
        console.error("Erro ao deletar gerente:", error);
        return null;
    }
}

export default { get, getGerente, create, update, del };
