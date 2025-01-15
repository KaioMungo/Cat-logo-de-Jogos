const MULTIPLAYER = ['https://store-images.s-microsoft.com/image/apps.7859.14506879174941978.138d3eab-0b06-443b-a252-c99592521394.33a348aa-892d-49b8-9ef2-6ff06c22cf96', 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg', 'https://upload.wikimedia.org/wikipedia/pt/9/97/COD-IW_%28capa%29.jpeg', 'https://notadogame.com/uploads/game/cover/250x/5bfdc2fedb96b.jpg', 'https://notadogame.com/uploads/game/cover/250x/5ec161df463ab.jpg', 'https://cdn.cdkeys.com/700x700/media/catalog/product/r/a/rainbow-six-siege-deluxe-edition-cd-keys-discount_1.jpg', 'https://upload.wikimedia.org/wikipedia/pt/e/e9/Dead_By_Daylight.png', 'https://notadogame.com/uploads/game/cover/250x/5bfdc36b22e14.jpg']
const POPULARES = ['https://bdjogos.com.br/capas/22510-palworld-capa-1.jpg', 'https://bdjogos.com.br/capas/19904-forza-motorsport-capa-1.jpg', 'https://image.api.playstation.com/vulcan/ap/rnd/202211/2908/4HEwJUKuot8Gy5ob3BBxWisH.jpg', 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2558.jpg', 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png', 'https://notadogame.com/uploads/game/cover/250x/5bfdc4cbe3af4.jpg', 'https://upload.wikimedia.org/wikipedia/pt/d/d6/Star_Wars_Jedi_Fallen_Order_capa.png', 'https://howlongtobeat.com/games/34716_Stardew_Valley.jpg']
const RECENTES = ['https://m.media-amazon.com/images/M/MV5BZGRkZDg0NGQtNWU5Yi00NTE4LWI1MjEtNWFjYWE4ZDQzNmRmXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg', 'https://cdn1.epicgames.com/offer/4f09ede568514ca6ad487f9c22a66b81/EGS_SlimeRancher2_MonomiPark_S2_1200x1600-0beb445243a6a24f7af7ddda60084de5_1200x1600-0beb445243a6a24f7af7ddda60084de5', 'https://bdjogos.com.br/capas/11019-riders-republic-capa-1.jpg', 'https://bdjogos.com.br/capas/22965-age-of-mythology-retold-capa-1.webp', 'https://upload.wikimedia.org/wikipedia/pt/8/81/Doom_Eternal_capa.png', 'https://upload.wikimedia.org/wikipedia/pt/d/de/Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg', 'https://i2.wp.com/www.playscope.com/wp-content/uploads/2024/07/easportsfc25_images_0003-608x1080.jpg?ssl=1', 'https://upload.wikimedia.org/wikipedia/pt/3/3f/Payday_3_capa.jpg']
const GENEROS = [{'name': 'AÇÃO E AVENTURA', 'icon': './img/barco.png'}, {'name': 'TIRO', 'icon': './img/arma.png'}, {'name': 'PARA TODAS AS IDADES', 'icon': './img/familia.png'}, {'name': 'JOGOS DE LUTA', 'icon': './img/luva_boxe.png'}, {'name': 'ESTRATÉGIA', 'icon': './img/xadrez.png'}, {'name': 'SIMULAÇÃO', 'icon': './img/cabra.png'}, {'name': 'RPG', 'icon': './img/espada.png'}, {'name': 'TERROR', 'icon': './img/fantasma.png'}]

const jogosMultiplayer = document.getElementById('jogos-multi')
const jogosPopulares = document.getElementById('jogos-populares')
const jogosRecentes = document.getElementById('jogos-recentes')
const generos = document.getElementById('generos')
const btnCadastro = document.getElementById('cadastro')
const btnLogin = document.getElementById('login')
const btnEndereco = document.getElementById('endereco')
const btnEnderecos = document.getElementById('enderecos')
const logout = document.getElementById('logout')

if(localStorage.getItem('user')) {
    btnEndereco.setAttribute('style', 'display: block')
    btnCadastro.setAttribute('style', 'display: none')
    btnLogin.setAttribute('style', 'display: none')
    btnEnderecos.setAttribute('style', 'display: block')
    logout.setAttribute('style', 'display: block')
}

MULTIPLAYER.map((j) => {
    jogosMultiplayer.innerHTML += `
        <div class="container-jogo">
            <img src="${j}" alt="">
        </div>
    `
})

POPULARES.map((j) => {
    jogosPopulares.innerHTML += `
        <div class="container-jogo">
            <img src="${j}" alt="">
        </div>
    `
})

RECENTES.map((j) => {
    jogosRecentes.innerHTML += `
        <div class="container-jogo">
            <img src="${j}" alt="">
        </div>
    `
})

GENEROS.map((g) => {
    generos.innerHTML += `
        <div class="container-genero">
            <h1>${g.name}</h1>
            <img src=${g.icon} alt="">
        </div>
    `
})