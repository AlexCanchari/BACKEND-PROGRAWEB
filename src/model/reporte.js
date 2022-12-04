import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const Reporte = sequelize.define('reporte', {
    reporte_ID: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    usuario_ID: {
        foreignKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    correo: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.INTEGER
    },
    asunto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
},{
    freezeTableName : true,
    timestamps: false
})

export default Reporte;