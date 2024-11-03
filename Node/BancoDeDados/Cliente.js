const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json()); 
app.use(cors({ origin: 'http://localhost:4200' }));

async function connect(){
    const mysql = require('mysql2/promise');
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'bd_aula',
        port: 3308
    })
    console.log('Conectou no MySQL');
    global.connection = connection;
    return connection;
}
//garante que a conexão inicializará automaticamente
connect();

// //retorna todos os clientes
// async function getClientes(req, res){
//     const conn = await connect();
//     const clientes = await conn.query('SELECT * FROM cliente');
//     console.log(clientes[0]);
//     res.send(clientes[0]);
// }
// //retorna um cliente pelo id
// async function getCliente(req, res){
//     const conn = await connect();
//     let id = req.params.id;
//     const clientes = await conn.query('SELECT * FROM cliente WHERE id = ?', id);
//     res.send(clientes[0]);
// }
// //insere um cliente
// async function insertCliente(req, res) {
//     const conn = await connect();
//     const { nome, rg, cpf, email, telefone, celular, cep, endereco, numero, 
//     complemento, bairro, cidade, estado } = req.body;
//     if (!nome || !email) 
//         return res.status(400).send('Nome e email são obrigatórios');
//     const result = await conn.query('INSERT INTO cliente (nome, email, telefone, endereco) VALUES (?, ?, ?, ?)', 
//                     [nome, email, telefone, endereco]);
//     console.log(result);
//     res.send(result);
//     }
//     //atualizar um cliente
//     async function atualizarCliente(req, res) {
//         const conn = await connect();
//         let id = req.params.id;
//         const { nome, rg, cpf, email, telefone, celular, cep, endereco, numero, 
//             complemento, bairro, cidade, estado } = req.body;
//         const result = await conn.query('UPDATE cliente SET nome = ?, rg = ?, cpf = ?, email = ?, telefone = ?, celular = ?, cep = ?, endereco = ?, numero = ?, '+
//                                         'complemento = ?, bairro = ?, cidade = ?, estado = ? WHERE id = ?', 
//                                         [nome, rg, cpf, email, telefone, celular, cep, endereco, numero, complemento, bairro, cidade, estado, id])
//         res.send(result);
//     }

//     //excluir um cliente
//     async function excluirCliente(req, res) {
//         const conn = await connect();
//         let id = req.params.id;
//         const result = await conn.query('delete from cliente where id = ?', [id])
//         res.send(result)
//     }

app.get('/clientes', async (req, res) => {
    const conn = await connect();
    const [clientes] = await conn.query('SELECT * FROM cliente');
    console.log(clientes);
    res.json(clientes);
});

// Rota para obter um cliente específico pelo ID
app.get('/clientes/:id', async (req, res) => {
    const conn = await connect();
    const id = req.params.id;
    const [clientes] = await conn.query('SELECT * FROM cliente WHERE id = ?', [id]);
    res.json(clientes[0] || 'Cliente não encontrado');
});

// Rota para adicionar um novo cliente
app.post('/clientes', async (req, res) => {
    const conn = await connect();
    const cliente = req.body;
    const result = await conn.query(
        'INSERT INTO cliente (nome, email, telefone, endereco) VALUES (?, ?, ?, ?)',
        [cliente.nome, cliente.email, cliente.telefone, cliente.endereco]
    );
    res.json({ id: result[0].insertId, ...cliente });
});

// Rota para atualizar um cliente existente
app.put('/clientes/:id', async (req, res) => {
    const conn = await connect();
    const id = req.params.id;
    const cliente = req.body;
    await conn.query(
        'UPDATE cliente SET nome = ?, email = ?, telefone = ?, endereco = ? WHERE id = ?',
        [cliente.nome, cliente.email, cliente.telefone, cliente.endereco, id]
    );
    res.json({ id, ...cliente });
});

// Rota para excluir um cliente
app.delete('/clientes/:id', async (req, res) => {
    const conn = await connect();
    const id = req.params.id;
    await conn.query('DELETE FROM cliente WHERE id = ?', [id]);
    res.json({ message: 'Cliente excluído com sucesso' });
});

const PORT = 3000; // Definindo a porta
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


module.exports = {app};