import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const categoria = sequelize.define('categoria', {
    categoria_id: {
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

export default categoria;