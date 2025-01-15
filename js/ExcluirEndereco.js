async function excluirEndereco(id) {
    let token = JSON.parse(localStorage.getItem('user')).access_token
    let deletarEndereco = confirm('Você quer mesmo deletar esse endereço?')

    if (deletarEndereco) {
        let api = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (api.ok) {
            alert('Endereço deletado')
            window.location.reload()
            return
        }
        alert('Erro ao deletar endereço')
    }
}