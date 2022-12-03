import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const Reseña = sequelize.define('reseña', {
    reseña_ID: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    usuario_ID: {
        foreignKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    puntaje: {
        type: DataTypes.INTEGER
    },
    comentario: {
        type: DataTypes.STRING
    },
    videO: {
        type: DataTypes.STRING
    },
    enlace: {
        type: DataTypes.STRING
    },
})

export default Reseña;

