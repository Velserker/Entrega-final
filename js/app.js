// Declaraciones
//--------------

// Array de todos los Pokemon (que estan en data.js)
const pokeData = new PokemonV2()
pokeData.get()

const allPokemon = pokeData.get().then(res => {
    console.log("-------------- All pokemon list fetching ------------------")
    console.log(res);
    console.log("--------------------------------------------------")
    return (res) })


// Equipo Pokemon
let equipoPokemon = []

// Selectores
//-----------

const pokemonListContainer = document.querySelector('#pokemonListContainer')

const cardName = document.querySelector('.cardName')
const cardId = document.querySelector('.cardId')
const cardType = document.querySelector('.cardType')
const cardDesc = document.querySelector('.cardDesc')
const cardLink = document.querySelector('.cardLink')
const cardTop = document.querySelector('.cardTop')
const cardCTA = document.querySelector('.cardCTA')

const teamContainer = document.querySelector('.teamContainer')
const teamReset = document.querySelector('.teamCTA')

const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')

// Funciones
//----------

const guardarEnStorage = (nombre, valor) => {
    localStorage.setItem(nombre, JSON.stringify(valor))
}

const renderizarListaPokemon = (array, limit=8) => {
    pokemonListContainer.innerHTML = ''
    let count = 0
    
    for (const pokemon of array) {
        count++
        const pokemonButton = document.createElement('button')
        pokemonButton.classList.add('menuTab')
        pokemonButton.setAttribute('data-id', pokemon.id)
        pokemonButton.innerHTML = `
            <div class="menuTabImg">
                <img src="${pokemon.image}" alt="${pokemon.name}">
            </div>
            <span class="menuTabText"> ${pokemon.name} </span>
        `
        pokemonListContainer.append(pokemonButton)

        if (count >= limit) break
    }

    document.querySelectorAll('.menuTab').forEach((button) => {
        button.addEventListener('click', renderizarDatosPokemon)
    })
}

const renderizarDatosPokemon = (e) => {
    const pokemonIdSeleccionado = e.target.closest('.menuTab').getAttribute('data-id')
    allPokemon.then(res => {
        selected = res.find((pokemon) => pokemon.id == pokemonIdSeleccionado)

        /* Todo el resto del código */

        const pokemonListContainer = document.querySelector('#pokemonListContainer')

        const cardName = document.querySelector('.cardName')
        const cardId = document.querySelector('.cardId')
        const cardType = document.querySelector('.cardType')
        const cardDesc = document.querySelector('.cardDesc')
        const cardLink = document.querySelector('.cardLink')
        const cardTop = document.querySelector('.cardTop')
        const cardCTA = document.querySelector('.cardCTA')

        const teamContainer = document.querySelector('.teamContainer')
        const teamReset = document.querySelector('.teamCTA')

        const searchBar = document.querySelector('#searchBar')
        const searchButton = document.querySelector('#searchButton')

        cardName.textContent = selected.name
        cardId.textContent = `#${selected.id}`
        cardType.textContent = selected.types
        cardDesc.textContent = firstMovements(selected)
        cardLink.setAttribute('href', selected.url)
        cardTop.style.backgroundImage = `url(${selected.image})`
        cardTop.style.backgroundColor = selected.typeColor
        cardCTA.style.backgroundColor = selected.typeColor
        cardCTA.setAttribute('data-id', selected.id)

    })  

}

const firstMovements = (pokemon) => {
    let movements = []
    for(let i = 0; i < 4; i++){
        movements.push(pokemon.moves[i])
        console.log(pokemon.moves[i])
    }
    return movements
}

const agregarPokemonAlEquipo = (e) => {
    const pokemonIdSeleccionado = e.target.getAttribute('data-id')
    const pokemonSeleccionado = allPokemon.then(res => {
        selected = res.find((pokemon) => pokemon.id == pokemonIdSeleccionado)
        console.log("___________ AgregarPokemonAlEquipo ________")
        console.log(selected)
        console.log("--------------------------------------------")

         //let equipoPokemon = []

            if (equipoPokemon.length < 6) {
                equipoPokemon.push(selected)
                console.log("_________ Equipo pokemon _________")
                console.log(equipoPokemon)
                console.log("_____________________________________")
                guardarEnStorage('equipoPokemon', equipoPokemon)
            } else {
                alert('El equipo tiene un maximo de 6 Pokemon')
            }
            
            renderizarEquipoPokemon(equipoPokemon)

        
       

        

    })
     
    
}

const renderizarEquipoPokemon = (equipoPokemon) => {
    //teamContainer.innerHTML = ''

    const pokemonEnEquipo = document.createElement('button')
    pokemonEnEquipo.classList.add('teamPokemon')
    pokemonEnEquipo.setAttribute('data-id', equipoPokemon[equipoPokemon.length - 1].id)
    pokemonEnEquipo.innerHTML = `
            <img src="${equipoPokemon[equipoPokemon.length -1].image}" alt="${equipoPokemon[equipoPokemon.length - 1].name}"></img>
        `
    teamContainer.append(pokemonEnEquipo)

  /*  for (const pokemon of equipoPokemon)
    {
        const pokemonEnEquipo = document.createElement('div')
        pokemonEnEquipo.classList.add('teamPokemon')
        pokemonEnEquipo.setAttribute('data-id', pokemon.id)
        pokemonEnEquipo.innerHTML = `
            <img src="${pokemon.icon}" alt="${pokemon.name}"></img>
        `
        teamContainer.append(pokemonEnEquipo)
    } */

    document.querySelectorAll('.teamPokemon').forEach((button) => {
        button.addEventListener('click', eliminarPokemonDeEquipo)
    })
}

const eliminarPokemonDeEquipo = (e) => {
    const pokemonIdSeleccionado = e.target.closest('.teamPokemon').getAttribute('data-id')
    equipoPokemon = JSON.parse(localStorage.getItem('equipoPokemon'))
    equipoPokemon = equipoPokemon.filter((pokemon) => pokemon.id != pokemonIdSeleccionado)
    guardarEnStorage('equipoPokemon', equipoPokemon)
    renderizarEquipoPokemon()
}

const vaciarEquipo = () => {
    equipoPokemon = []
    guardarEnStorage('equipoPokemon', equipoPokemon)
    teamContainer.innerHTML = ''
}

const buscarPokemon = () => {
    const query = searchBar.value.toLowerCase()
    const arrayResultados = pokeData.pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(query))
    renderizarListaPokemon(arrayResultados)
}


// EventListeners
//---------------

cardCTA.addEventListener('click', agregarPokemonAlEquipo)
teamReset.addEventListener('click', vaciarEquipo)
searchButton.addEventListener('click', buscarPokemon)
searchBar.addEventListener('input', buscarPokemon)

// Ejecuciones
//------------

renderizarListaPokemon(pokeData.pokemonList)

if (localStorage.getItem('equipoPokemon')) {
    equipoPokemon = JSON.parse(localStorage.getItem('equipoPokemon'))
    renderizarEquipoPokemon()
}





