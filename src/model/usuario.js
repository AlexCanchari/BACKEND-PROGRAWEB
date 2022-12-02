import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

const Usuario = sequelize.define('usuario', {
    id: {
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    contrasenia: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    codigo_postal: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.INTEGER
    }
})

export default Usuario;