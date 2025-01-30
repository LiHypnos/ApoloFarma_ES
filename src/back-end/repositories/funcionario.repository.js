import bd from './bd.js';

async function get() {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Funcionario;");
        return rows;
    } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
        return null;
    }
}

async function getFuncionario(id) {
    const conn = await bd.toConnect();
    try {
        const [rows] = await conn.query("SELECT * FROM Funcionario WHERE idFuncionario = ?;", [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao buscar funcionário:", error);
        return null;
    }
}

async function create(funcionario) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "INSERT INTO Funcionario (cpf, nome, email, senha) VALUES (?, ?, ?, ?);",
            [funcionario.cpf, funcionario.nome, funcionario.email, funcionario.senha]
        );
        return result;
    } catch (error) {
        console.error("Erro ao criar funcionário:", error);
        return null;
    }
}

async function update(funcionario) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query(
            "UPDATE Funcionario SET cpf = ?, nome = ?, email = ?, senha = ? WHERE idFuncionario = ?;",
            [funcionario.cpf, funcionario.nome, funcionario.email, funcionario.senha, funcionario.idFuncionario]
        );
        return result;
    } catch (error) {
        console.error("Erro ao atualizar funcionário:", error);
        return null;
    }
}

async function del(id) {
    const conn = await bd.toConnect();
    try {
        const [result] = await conn.query("DELETE FROM Funcionario WHERE idFuncionario = ?;", [id]);
        return result;
    } catch (error) {
        console.error("Erro ao deletar funcionário:", error);
        return null;
    }
}

export default { get, getFuncionario, create, update, del };
