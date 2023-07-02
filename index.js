const express = require('express')
const serve = express()
const cors = require('cors')
const bodyParser = require('body-parser')

serve.listen(3002)
serve.use(cors())
serve.use(bodyParser.urlencoded({ extended: true }))
const contatos = [{nome: 'samuel', telefone: 87435432189, email: 'samuel@gmail.com'},
{nome: 'maria', telefone: 87654321234, email: 'maria@gmail.com'}]

serve.get('/', ()=>{
    console.log('funcionou')
})

serve.get('/contatos', (req, res)=>{
    console.log('ola')
    return res.json(contatos)
})
