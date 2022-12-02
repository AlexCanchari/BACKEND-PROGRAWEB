import express from 'express'
import UsuarioController from '../controllers/usuarioController.js'

const { create, findOne, findAll, remove, update } = UsuarioController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;