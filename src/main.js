const $ = require('jquery')
const lista = document.getElementById('list')
const selet = document.getElementById('contact')
const delet = document.getElementById('deletar')
let contatos = []
const api = 'http://localhost:3002/contatos'
fetch( api, { method: 'get'} )
.then( (response) => response.json())
.then( function(data){
    contatos = data
    data.map( contact => {
        let li = document.createElement('li')
        li.innerHTML = contact.nome
        lista.appendChild(li)
    })
})
fetch( api, { method: 'get'} )
.then( (response) => response.json())
.then( function(data){
    contatos = data
    let n = 0
    data.map( contact => {
        let li = document.createElement('option')
        li.innerHTML = contact.nome
        li.value = n
        selet.appendChild(li)
        n += 1
    })
})
fetch( api, { method: 'get'} )
.then( (response) => response.json())
.then( function(data){
    contatos = data
    let n = 0
    data.map( contact => {
        let li = document.createElement('option')
        li.innerHTML = contact.nome
        li.value = n
        delet.appendChild(li)
        n += 1
    })
})
$('.muda').on('click', function(e){
    e.preventDefault
    let index = $('#contact').val()
    let name = $('#name').val()
    let telefone = $('#tel').val()
    let email = $('#email').val()
    
    let dado = {
        nome: name,
        telefone : telefone,
        email : email
    }
    
    fetch(api +'/' + index, {method: 'put',headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(dado)})
    .then((response) => response.json())
    .then(function(data){
        console.log(data)
    })
    location.reload()
})
$('.del').on('click', function(){
    let index = $('#deletar').val()
    fetch(api + '/' + index, {method: 'delete'})
    location.reload()
})
$('.adicionar').on('click',function(e){
    e.preventDefault
    let name = $('.name').val()
    let telefone = $('.tel').val()
    let email = $('.email').val()
    let dado = {
        nome : name,
        telefone : telefone,
        email : email
    }
    fetch(api, {method: 'post', headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dado)
})
location.reload()
})