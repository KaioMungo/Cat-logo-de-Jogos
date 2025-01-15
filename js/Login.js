const url = 'https://go-wash-api.onrender.com/api/login'

async function loginUsuario() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(!email || !password){
        alert('Prencha todos os campos corretamente')
        return
    }

    let api = await fetch(url, {
        method:'POST',
        body:JSON.stringify({
            "email": email,
            "password": password,
            "user_type_id": 1
        }),
        headers:{
            'Content-Type':'application/json',
        }
    })

    if(api.ok) {
        let response = await api.json()
        alert('Login realizado')
        localStorage.setItem('user', JSON.stringify(response))
        window.location.assign('../Home.html')
        return
    }

    let responseError = await api.json()
    
    if(responseError.data.errors){
        alert(responseError.data.errors)
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