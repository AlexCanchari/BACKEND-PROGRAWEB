
import orden from '../model/orden.js'

const create = async (orden) => {
        const neworden = await orden.create({
            nombre: orden.nombre,
            apellido: orden.apellido,
            correo:orden.correo,
            contrasenia:orden.contrasenia
        });
            
        return neworden;

}

const findAll = async() => {

    try {
        return await orden.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(orden_id) => {

    try {
        return await orden.findOne({
            where: {
                orden_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(orden) => {
    try {
        const foundorden = await orden.findOne({
            where: {
                orden_id: orden.orden_id
            }
        })

        foundorden.set(orden);

        await foundorden.save();

        return foundorden;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (orden_id) => {

    try {
        await orden.destroy({
            where: {
                orden_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const ordenRepository = { create, findAll, findOne, update, remove }

export default ordenRepository