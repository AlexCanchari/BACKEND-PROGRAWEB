import Sequelize from 'sequelize'

const hostname = process.env.HOSTNAME || 'http://containers-us-west-109.railway.app/'
const username = process.env.DBUSER || 'postgres'
const password = process.env.PASSWORD || 'NhNKrpTG6SRleBkjf4bQ'
const database = process.env.DATABASE || 'postgress'
const dialect = process.env.DIALECT || 'postgres'
const port = process.env.DBPORT || 7992

const sequelize = new Sequelize(database,username,password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})

export default sequelize