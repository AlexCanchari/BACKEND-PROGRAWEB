
import Usuario from '../model/usuario.js'

const create = async (usuario) => {
        const newUsuario = await Usuario.create({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo:usuario.correo,
            contrasenia:usuario.contrasenia
        });
            
        return newUsuario;

}

const findAll = async() => {

    try {
        return await Usuario.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(usuario_id) => {

    try {
        return await Usuario.findOne({
            where: {
                usuario_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(usuario) => {
    try {
        const foundusuario = await Usuario.findOne({
            where: {
                usuario_id: usuario.usuario_id
            }
        })

        foundusuario.set(usuario);

        await foundusuario.save();

        return foundusuario;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (usuario_id) => {

    try {
        await Usuario.destroy({
            where: {
                usuario_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const UsuarioRepository = { create, findAll, findOne, update, remove }

export default UsuarioRepository