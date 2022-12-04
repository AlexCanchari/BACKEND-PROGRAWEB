import categoriaRepository from '../repository/categoriaRepository.js'

const create = async (req,res) => {
    
    const result = await categoriaRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const categorias = await categoriaRepository.findAll();

    return sendResponse(categorias,res);
}

const findOne = async(req,res) => {
    const categoria_id = req.params.id;
    const categoria = await categoriaRepository.findOne(categoria_id);

    return sendResponse(categoria,res);
}

const update = async(req,res) => {
    const categoria = await categoriaRepository.update(req.body);

    return sendResponse(categoria,res);
}

const remove = async(req,res) => {

    const categoria_id = req.params.id;

    const categoria = await categoriaRepository.remove(categoria_id);

    return sendResponse(categoria,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const categoriaController = { create, findAll, findOne, update, remove }

export default categoriaController