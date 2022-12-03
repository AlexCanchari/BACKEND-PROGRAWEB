import UsuarioRepository from '../repository/usuarioRepository.js'

const create = async (req,res) => {
    
    const result = await UsuarioRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const usuarios = await UsuarioRepository.findAll();

    return sendResponse(usuarios,res);
}

const findOne = async(req,res) => {
    const id = req.params.usuario_id;
    const usuario = await UsuarioRepository.findOne(id);

    return sendResponse(usuario,res);
}

const update = async(req,res) => {
    const usuario = await UsuarioRepository.update(req.body);

    return sendResponse(usuario,res);
}

const remove = async(req,res) => {

    const usuario_id = req.params.id;

    const usuario = await UsuarioRepository.remove(usuario_id);

    return sendResponse(usuario,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const UsuarioController = { create, findAll, findOne, update, remove }

export default UsuarioController