
import categoria from '../model/categoria.js'

const create = async (categoria) => {
        const newcategoria = await categoria.create({
            nombre: categoria.nombre,
            apellido: categoria.apellido,
            correo:categoria.correo,
            contrasenia:categoria.contrasenia
        });
            
        return newcategoria;

}

const findAll = async() => {

    try {
        return await categoria.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(categoria_id) => {

    try {
        return await categoria.findOne({
            where: {
                categoria_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(categoria) => {
    try {
        const foundcategoria = await categoria.findOne({
            where: {
                categoria_id: categoria.categoria_id
            }
        })

        foundcategoria.set(categoria);

        await foundcategoria.save();

        return foundcategoria;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (categoria_id) => {

    try {
        await categoria.destroy({
            where: {
                categoria_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const categoriaRepository = { create, findAll, findOne, update, remove }

export default categoriaRepository