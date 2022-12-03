
import pre_armado from '../model/pre_armado.js'

const create = async (prearmado) => {

    try {
        const newPrearmado = await pre_armado.create({
            nombre: nombre,
            apellido: apellido,
            correo:correo,
            contrasenia:contrasenia
        });
            
        return newPrearmado;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await pre_armado.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await pre_armado.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(prearmado) => {
    try {
        const foundusuario = await pre_armado.findOne({
            where: {
                id: prearmado.id
            }
        })

        foundusuario.set(prearmado);

        await foundusuario.save();

        return foundusuario;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await pre_armado.destroy({
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