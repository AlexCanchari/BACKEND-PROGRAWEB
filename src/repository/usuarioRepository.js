
import Usuario from '../model/usuario.js'

const create = async (usuario) => {

    try {
        const newUsuario = await Usuario.create({
            nombre: nombre,
            apellido: apellido,
            correo:correo,
            contrasenia:contrasenia
        });
            
        return newUsuario;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Usuario.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Usuario.findOne({
            where: {
                id
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
                id: usuario.id
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

const remove = async (id) => {

    try {
        await Usuario.destroy({
            where: {
                id
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