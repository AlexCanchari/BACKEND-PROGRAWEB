
import pre_armado from '../model/usuario.js'

const create = async (usuario) => {

    try {
        const newPrearmado = await pre_armado.create({
            nombre: '',
            descripcion: '',
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
        const foundprearmado = await pre_armado.findOne({
            where: {
                id: prearmado.id
            }
        })

        foundprearmado.set(prearmado);

        await foundprearmado.save();

        return foundprearmado;

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

const prearmadoRepository = { create, findAll, findOne, update, remove }

export default prearmadoRepository