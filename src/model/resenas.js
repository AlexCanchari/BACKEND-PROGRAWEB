import { DataTypes, Sequelize } from 'sequelize'

import sequelize from '../config/database.js'

export const Resena = sequelize.define("resena", { 
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_id : {
        type : DataTypes.UUID,
    },
    video : {
        type : DataTypes.STRING(300)
    },
    enlace : {
        type : DataTypes.STRING(200)
    },
    comentario : {
        type : DataTypes.STRING(500)
    },
    puntaje : {
        type : DataTypes.INTEGER
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const Tipo_Resena = sequelize.define("tipo_resena", {
    tipo_resena_id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    resena_id : {
        type : DataTypes.UUID,
    },
    nombre : {
        type : DataTypes.STRING(50)
    },
    descripcion : {
        type : DataTypes.STRING(200)
    }
}, {
    timestamps : false,
    freezeTableName : true
})

Resena.hasOne(Tipo_Resena, {
    foreignKey : "resena_id"
})

Tipo_Resena.belongsTo(Resena, {
    foreignKey : "id"
})