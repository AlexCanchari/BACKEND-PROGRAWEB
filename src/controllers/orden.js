import ordenRepository from '../repository/ordenRepository.js'

const create = async (req,res) => {
    
    const result = await ordenRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const ordens = await ordenRepository.findAll();

    return sendResponse(ordens,res);
}

const findOne = async(req,res) => {
    const orden_id = req.params.id;
    const orden = await ordenRepository.findOne(orden_id);

    return sendResponse(orden,res);
}

const update = async(req,res) => {
    const orden = await ordenRepository.update(req.body);

    return sendResponse(orden,res);
}

const remove = async(req,res) => {

    const orden_id = req.params.id;

    const orden = await ordenRepository.remove(orden_id);

    return sendResponse(orden,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ordenController = { create, findAll, findOne, update, remove }

export default ordenController