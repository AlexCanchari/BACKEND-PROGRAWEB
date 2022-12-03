import express from 'express'
import prearmadoController from '../controllers/prearmadoController.js'

const { create, findOne, findAll, remove, update } = prearmadoController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;