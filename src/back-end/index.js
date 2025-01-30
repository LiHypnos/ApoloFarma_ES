import express from 'express'
import bodyParser from 'body-parser'
//import medicamentoRoutes from './routes/cliente.routes.js'
import clienteRoutes from './routes/cliente.routes.js'
import medicamentoRoutes from './routes/medicamento.routes.js'
//import compraRoutes from './routes/compra.routes.js'
//import funcionarioRoutes from './routes/funcionario.routes.js'
//import gerenteRoutes from './routes/gerente.routes.js'


const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.listen(3000, () => 
	console.log('Servidor iniciado na porta 3000')
);

app.get('/about', about)
function about(req, res){
    res.send('Server Web!!')
}

app.use("/cliente", clienteRoutes)
app.use("/medicamento", medicamentoRoutes)
