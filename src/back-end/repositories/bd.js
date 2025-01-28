import mysql from 'mysql2/promise';

// npm install mysql2
let pool;

async function toConnect() {
    if (global.connection) {
        return global.connection;
    }

    if (!pool) {
        pool = mysql.createPool({
            user: 'root',
            password: 'e5f2s4',
            host: '127.0.0.1',
            port: 3306,
            database: 'ApoloFarma',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    try {
        // Usando o pool para obter uma conexão
        const connection = await pool.getConnection();
        global.connection = connection;  // Armazenando a conexão para uso global
        return connection;
    } catch (err) {
        console.error('Error connecting to the database', err);
        throw err;
    }
}

export default { toConnect };
