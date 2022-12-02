import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const pre_armado_producto = sequelize.define('pre_armado_producto', {
    pre_armado_producto_id: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    pre_armado_id: {
        foreignKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    producto_id: {
        foreignKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    }
})

export default pre_armado_producto;