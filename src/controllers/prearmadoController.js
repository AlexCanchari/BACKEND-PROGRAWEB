import PrearmadoRepository from '../repository/prearmadoRepository.js'

const create = async (req,res) => {
    
    const result = await PrearmadoRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const prearmado = await PrearmadoRepository.findAll();

    return sendResponse(prearmado,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const prearmado = await PrearmadoRepository.findOne(id);

    return sendResponse(prearmado,res);
}

const update = async(req,res) => {
    const prearmado = await PrearmadoRepository.update(req.body);

    return sendResponse(prearmado,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const prearmado = await PrearmadoRepository.remove(id);

    return sendResponse(prearmado,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const prearmadoController = { create, findAll, findOne, update, remove }

export default prearmadoController