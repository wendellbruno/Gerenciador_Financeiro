const app = require('express')()
const consign = require('consign')
const knex = require('knex')
const knexFile = require('../knexfile')
const knexLogger = require('knex-logger')


app.db = knex(knexFile)

//log doq foi feito do banco de dados se apresenta no console
//app.use(knexLogger(app.db))

consign({cwd: 'src', verbose: false})
    .include('./config/middlewares.js')
    .then('./services')
    .then('./routes')
    .then('./config/routes.js')
    .into(app)

app.get('/', (req,res) =>{
    res.status(200).json('ok')
})






module.exports = app;