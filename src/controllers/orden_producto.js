import orden_productoRepository from '../repository/orden_productoRepository.js'

const create = async (req,res) => {
    
    const result = await orden_productoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const orden_productos = await orden_productoRepository.findAll();

    return sendResponse(orden_productos,res);
}

const findOne = async(req,res) => {
    const orden_producto_id = req.params.id;
    const orden_producto = await orden_productoRepository.findOne(orden_producto_id);

    return sendResponse(orden_producto,res);
}

const update = async(req,res) => {
    const orden_producto = await orden_productoRepository.update(req.body);

    return sendResponse(orden_producto,res);
}

const remove = async(req,res) => {

    const orden_producto_id = req.params.id;

    const orden_producto = await orden_productoRepository.remove(orden_producto_id);

    return sendResponse(orden_producto,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const orden_productoController = { create, findAll, findOne, update, remove }

export default orden_productoController