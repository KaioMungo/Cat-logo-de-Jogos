const url = 'https://go-wash-api.onrender.com/api/user'

async function cadastroUsuario() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpf = document.getElementById('cpf').value
    let birthday = document.getElementById('birthday').value
    let terms = document.getElementById('terms').checked

    if(!name || !email || !password || !cpf || !birthday){
        alert('Prencha todos os campos corretamente')
        return
    }

    if(!terms){
        alert('Aceite os termos e condições')
        return
    }

    if(!email.includes('@') || !email.includes('.')){
        alert('E-mail inválido')
        return
    }

    if(cpf.length < 11 || cpf.length > 14){
        alert('O cpf tem que ter no mínimo 11 caracteres e no máximo 14')
        return
    }

    let api = await fetch(url, {
        method:'POST',
        body:JSON.stringify({
            "name": name,
            "email": email,
            "user_type_id":1,
            "password": password,
            "cpf_cnpj": cpf,
            "terms": terms ? 1 : 0,
            "birthday": birthday
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })

    if(api.ok){
        let response = await api.json()
        alert(`Cadastro realizado\n${response.data}`)
        window.location.assign('../Home.html')
        return
    }
    let responseError = await api.json()
    
    if(responseError.data.errors.email){
        alert('E-mail já cadastrado')
    }

    if(responseError.data.errors.cpf_cnpj){
        alert('CPF já cadastrado')
    }

    if(responseError.data.errors.password){
        alert('A senha tem que ter no mínimo 6 caracteres')
    }
}

function mostrarSenha() {
    let inputPassword = document.getElementById('password')
    let showPassBtn = document.getElementById('olho')
    
    if(inputPassword.type === 'password') {
        inputPassword.setAttribute('type', 'text')
        showPassBtn.setAttribute('src', '../img/senha_oculta.png')
    } else {
        inputPassword.setAttribute('type', 'password')
        showPassBtn.setAttribute('src', '../img/senha_aparente.png')
    }
}