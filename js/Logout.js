const url = 'https://go-wash-api.onrender.com/api/auth/logout'

async function logoutUser() {
    let token = JSON.parse(localStorage.getItem('user')).access_token

    let api = await fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    })

    if(api.ok) {
        alert('Logout realizado com sucesso')
        localStorage.removeItem('user')
        window.location.reload()
        return
    }
    alert('Não foi possível realizar o logout')
}