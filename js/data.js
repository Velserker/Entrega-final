// Declaracion de Clase, creacion de objetos y array de Pokemon

class Pokemon {
    constructor(id, name, type, typeColor, desc, img, icon, url) {
        this.id = id
        this.name = name
        this.type = type
        this.typeColor = typeColor
        this.desc = desc
        this.img = img
        this.icon = icon
        this.url = url
    }
}

const bulbasaur = new Pokemon('001', 'Bulbasaur', 'Planta', '#83bf91', 'Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Squirtle y Charmander.', 'https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png', 'https://cdn-icons-png.flaticon.com/512/188/188989.png', 'https://pokemon.fandom.com/es/wiki/Bulbasaur')
const charmander = new Pokemon('004', 'Charmander', 'Fuego', '#ff7f00', 'Charmander es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Bulbasaur y Squirtle.', 'https://static.wikia.nocookie.net/espokemon/images/5/56/Charmander.png', 'https://cdn-icons-png.flaticon.com/512/188/188990.png', 'https://pokemon.fandom.com/es/wiki/Charmander')
const squirtle = new Pokemon('007', 'Squirtle', 'Agua', '#9ecbe6', 'Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Bulbasaur y Charmander.', 'https://static.wikia.nocookie.net/espokemon/images/e/e3/Squirtle.png', 'https://cdn-icons-png.flaticon.com/512/188/188988.png', 'https://pokemon.fandom.com/es/wiki/Squirtle')
const pikachu = new Pokemon('025', 'Pikachu', 'Eléctrico', '#ffd700', 'Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia, mayormente por ser el acompañante del protagonista del anime, Ash Ketchum y la mascota representante de la franquicia Pokémon.', 'https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png', 'https://cdn-icons-png.flaticon.com/512/188/188987.png', 'https://pokemon.fandom.com/es/wiki/Pikachu')
const eevee = new Pokemon('133', 'Eevee', 'Normal', '#ddccaa', 'Eevee es un Pokémon de tipo normal introducido en la primera generación. Se caracteriza por ser el Pokémon con más opciones evolutivas, actualmente son 8.', 'https://static.wikia.nocookie.net/espokemon/images/f/f2/Eevee.png', 'https://cdn-icons-png.flaticon.com/512/188/188995.png', 'https://pokemon.fandom.com/es/wiki/Eevee')
const mew = new Pokemon('151', 'Mew', 'Psiquico', '#ffb5c5', 'Mew es un Pokémon singular de tipo psíquico introducido en la primera generación. Es el ancestro de todos los Pokémon, ya que tiene todos los genes de los Pokémon existentes.', 'https://static.wikia.nocookie.net/espokemon/images/b/bf/Mew.png', 'https://cdn-icons-png.flaticon.com/512/189/189006.png', 'https://pokemon.fandom.com/es/wiki/Mew')
const pidgey = new Pokemon('016', 'Pidgey', 'Normal', '#ddccaa', 'Pidgey es un Pokémon de tipo normal/volador introducido en la primera generación.', 'https://static.wikia.nocookie.net/espokemon/images/b/b7/Pidgey.png', 'https://cdn-icons-png.flaticon.com/512/188/188992.png', 'https://pokemon.fandom.com/es/wiki/Pidgey')
const zubat = new Pokemon('041', 'Zubat', 'Veneno - Volador', '#cc88bb', 'Zubat es un Pokémon tipo veneno/volador introducido en la primera generación. Es comúnmente encontrado dentro de cuevas y bosques oscuros de la mayoría de regiones.', 'https://static.wikia.nocookie.net/espokemon/images/6/67/Zubat.png', 'https://cdn-icons-png.flaticon.com/512/188/188999.png', 'https://pokemon.fandom.com/es/wiki/Zubat?so=search')
