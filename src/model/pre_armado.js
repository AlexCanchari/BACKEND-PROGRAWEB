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