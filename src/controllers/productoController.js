import productoRepository from '../repository/productoRepository.js'

const create = async (req,res) => {
    
    const result = await productoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const productos = await productoRepository.findAll();

    return sendResponse(productos,res);
}

const findOne = async(req,res) => {
    const producto_id = req.params.id;
    const producto = await productoRepository.findOne(producto_id);

    return sendResponse(producto,res);
}

const update = async(req,res) => {
    const producto = await productoRepository.update(req.body);

    return sendResponse(producto,res);
}

const remove = async(req,res) => {

    const producto_id = req.params.id;

    const producto = await productoRepository.remove(producto_id);

    return sendResponse(producto,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const productoController = { create, findAll, findOne, update, remove }

export default productoController