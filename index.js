const express = require('express')
const serve = express()
const cors = require('cors')
const bodyParser = require('body-parser')

serve.listen(3002)
serve.use(cors())
serve.use(bodyParser.urlencoded({ extended: true }))
serve.use(express.json())
const contatos = [{nome: 'samuel', telefone: 87435432189, email: 'samuel@gmail.com'},
{nome: 'maria', telefone: 87654321234, email: 'maria@gmail.com'}]

serve.get('/', ()=>{
    console.log('funcionou')
})

serve.get('/contatos', (req, res)=>{
    return res.json(contatos)
})

serve.post('/contatos', (req, res)=>{
    contatos.push(req.body)
    return res.json(contatos)
})

serve.put('/contatos/:index', (req, res)=>{
    
    const {index} = req.params
    contatos[index] = req.body
    return res.json(contatos)

})
serve.delete('/contatos/:index', (req, res)=>{
    const{index} = req.params
    contatos.splice(index,1)
    return res.json(contatos)
})