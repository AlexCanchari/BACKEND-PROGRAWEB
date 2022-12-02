import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const producto = sequelize.define('producto', {
    producto_id: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    categoria_id: {
        foreignKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export default producto;