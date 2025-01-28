import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.get('/', clienteController.get)
router.get('/:nome', clienteController.getCliente)
router.get('/:cpf', clienteController.getClienteCpf)
router.post('/', clienteController.create)
router.put('/:id', clienteController.update)
router.delete('/:id', clienteController.del)

export default router;