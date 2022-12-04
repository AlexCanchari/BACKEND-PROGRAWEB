
import Reporte from '../model/reporte.js'

const create = async (reporte) => {
        const newReporte = await Reporte.create({
            correo: reporte.correo,
            nombre: reporte.nombre,
            telefono: reporte.relefono,
            asunto: reporte.asunto,
            descripcion: reporte.descripcion
        });
            
        return newReporte;

}

const findAll = async() => {

    try {
        return await Reporte.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(reporte_id) => {

    try {
        return await Reporte.findOne({
            where: {
                reporte_id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(reporte) => {
    try {
        const foundreporte = await Reporte.findOne({
            where: {
                reporte_id: reporte.reporte_id
            }
        })

        foundreporte.set(reporte);

        await foundreporte.save();

        return foundreporte;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (reporte_id) => {

    try {
        await Reporte.destroy({
            where: {
                reporte_id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const ReporteRepository = { create, findAll, findOne, update, remove }

export default ReporteRepository