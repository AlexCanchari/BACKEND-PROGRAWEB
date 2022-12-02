import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const orden = sequelize.define('orden', {
    orden_id: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    usuario_id: {
        foreignKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    monto: {
        type: DataTypes.INTEGER
    },
    direccion: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    }
})

export default orden;