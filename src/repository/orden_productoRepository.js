
import orden_producto from '../model/orden_producto.js'

const create = async (orden_producto) => {
        const neworden_producto = await orden_producto.create({
            
        });
            
        return neworden_producto;

}

const findAll = async() => {

    try {
        return await orden_producto.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(orden_producto_id) => {

    try {
        return await orden_producto.findOne({
            where: {
                orden_producto_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(orden_producto) => {
    try {
        const foundorden_producto = await orden_producto.findOne({
            where: {
                orden_producto_id: orden_producto.orden_producto_id
            }
        })

        foundorden_producto.set(orden_producto);

        await foundorden_producto.save();

        return foundorden_producto;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (orden_producto_id) => {

    try {
        await orden_producto.destroy({
            where: {
                orden_producto_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const orden_productoRepository = { create, findAll, findOne, update, remove }

export default orden_productoRepository