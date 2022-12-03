import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const Tipo_reseña = sequelize.define('tipo_reseña', {
    tipo_reseña_ID: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    reseña_ID: {
        foreignKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
})

export default Tipo_reseña;