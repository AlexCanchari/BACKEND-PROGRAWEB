import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const orden_producto = sequelize.define('orden_producto', {
    orden_producto_id: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    orden_id: {
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

export default orden_producto;