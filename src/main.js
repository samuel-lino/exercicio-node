const lista = document.getElementById('list')
let contatos = []
const api = 'http://localhost:3002/contatos'
fetch( api, { method: 'get'} )
.then( (response) => response.json())
.then( function(data){
    contatos = data
    data.map( contact => {
        let li = document.createElement('li')
        li.innerHTML = contact.nome
        list.appendChild(li)
    })
})
function pesquisar(){
    const procura = document.querySelector('.contato')
    let pes = procura.value
    for(elem of contatos){
        if(elem.nome === pes){
            return elem
        }
    }
    
}

document.querySelector('#btn').addEventListener('click', exibir)
function exibir(){
    let dado = pesquisar()
    let p = document.createElement('p')
    const ex = document.querySelector('#exibir')
    p.innerHTML = dado.nome + ' telefone: '+ dado.telefone
    ex.appendChild(p)
    console.log(dado)
    
}