import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const pre_armado = sequelize.define('pre_armado', {
    pre_armado_id: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export default pre_armado;

app.get("/prearmado", async (req, res) => {
    const id_build = req.query.id
    let piezas = []

    const pc = await Pre_Armado.findOne({where : {pre_armado_id : id_build}})
    const pc_componentes = await Pre_Armado_Producto.findAll({where : {pre_armado_id : pc.pre_armado_id}})

    for (let index = 0; index < pc_componentes.length; index++) {
        const pieza = await Producto.findOne({where : {producto_id : pc_componentes[index].producto_id}})
        pieza.push(pieza)
    }

    res.send(piezas)
})