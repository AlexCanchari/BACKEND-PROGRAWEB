import ReporteRepository from '../repository/reporteRepository.js'

const create = async (req,res) => {
    
    const result = await ReporteRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const reportes = await ReporteRepository.findAll();

    return sendResponse(reportes,res);
}

const findOne = async(req,res) => {
    const reporte_id = req.params.id;
    const reporte = await ReporteRepository.findOne(reporte_id);

    return sendResponse(reporte,res);
}

const update = async(req,res) => {
    const reporte = await ReporteRepository.update(req.body);

    return sendResponse(reporte,res);
}

const remove = async(req,res) => {

    const reporte_id = req.params.id;

    const reporte = await ReporteRepository.remove(reporte_id);

    return sendResponse(reporte,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ReporteController = { create, findAll, findOne, update, remove }

export default ReporteController