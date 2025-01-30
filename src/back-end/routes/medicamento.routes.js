import express from 'express'
import medicamentoController from '../controllers/medicamento.controller.js'
x
const router = express.Router()

router.get('/', medicamentoController.get)
router.get('/:nome', medicamentoController.getMedicamento)
router.get('/:id', medicamentoController.getMedicamentoId)
router.post('/', medicamentoController.create)
router.put('/:id', medicamentoController.update)
router.delete('/:id', medicamentoController.del)

export default router;