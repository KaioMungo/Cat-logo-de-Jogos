const url = 'https://go-wash-api.onrender.com/api/auth/address'

async function cadastroEndereco() {
    let apelido = document.getElementById('apelido').value
    let cep = document.getElementById('cep').value
    let endereco = document.getElementById('endereco').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value
    let token = JSON.parse(localStorage.getItem('user')).access_token
    
    if(!apelido || !cep || !endereco || !numero){
        alert('Prencha todos os campos corretamente')
        return
    }

    let api = await fetch(url, {
        method:'POST',
        body:JSON.stringify({
            "title": apelido,
            "cep": cep,
            "address": endereco,
            "number": numero,
            "complement": complemento
        }),
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    })

    if(api.ok) {
        alert('Cadastro de endereço realizado')
        window.location.assign('../Home.html')
        return
    }
    alert('Erro ao cadastrar endereço')
}