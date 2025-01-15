const url = 'https://go-wash-api.onrender.com/api/auth/address'

async function listarEndereco() {
    let token = JSON.parse(localStorage.getItem('user')).access_token
    let table = document.getElementById('enderecos')

    let api = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    
    if (api.ok) {
        let resposta = await api.json()

        table.innerHTML = `
            <tr id="legenda-tabela">
                <th>ID</th>
                <th>Apelido</th>
                <th>CEP</th>
                <th>Endereço</th>
                <th>Ação</th>
            </tr>
        `

        resposta.data.forEach((endereco) => {
            table.innerHTML += `
                <tr>
                    <th>${endereco.id}</th>
                    <th>${endereco.title}</th>
                    <th>${endereco.cep}</th>
                    <th>${endereco.address}</th>
                    <th id="btns">
                        <input type="button" value="Atualizar" class="btn-tabela" onclick="window.location.assign('./AtualizarEndereco.html?id=${endereco.id}')">
                        <input type="button" value="Deletar" class="btn-tabela" onclick="excluirEndereco(${endereco.id})">
                    </th>
                </tr>
            `
        })
        return
    }
    alert('Erro ao listar endereços')
}

listarEndereco()