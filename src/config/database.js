import Sequelize from 'sequelize'

const hostname = process.env.HOSTNAME || 'http://containers-us-west-109.railway.app/'
const username = process.env.DBUSER || 'postgres'
const password = process.env.PASSWORD || 'NhNKrpTG6SRleBkjf4bQ'
const database = process.env.DATABASE || 'railway'
const dialect = process.env.DIALECT || 'postgres'
const port = process.env.DBPORT || 7992

const sequelize = new Sequelize("postgresql://postgres:NhNKrpTG6SRleBkjf4bQ@containers-us-west-109.railway.app:7992/railway", {     dialectOptions : {ssl : {require : true, rejectUnauthorized : false}} })

export default sequelize