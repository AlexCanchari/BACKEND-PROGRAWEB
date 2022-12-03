
import producto from '../model/producto.js'

const create = async (producto) => {
        const newproducto = await producto.create({
            nombre: ' ',
            precio: producto.precio,
            descripcion: ' ', 
        });
            
        return newproducto;

}

const findAll = async() => {

    try {
        return await producto.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(producto_id) => {

    try {
        return await producto.findOne({
            where: {
                producto_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(producto) => {
    try {
        const foundproducto = await producto.findOne({
            where: {
                producto_id: producto.producto_id
            }
        })

        foundproducto.set(producto);

        await foundproducto.save();

        return foundproducto;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (producto_id) => {

    try {
        await producto.destroy({
            where: {
                producto_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const productoRepository = { create, findAll, findOne, update, remove }

export default productoRepository