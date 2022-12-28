// Declaracion de Clase, creacion de objetos y array de Pokemon

class PokemonV2 {

    constructor() {
        this.pokemonList = []
        this.keynamePokemonList = 'pokemonList'
    }

    get = async () => { 
        const list = JSON.parse(localStorage.getItem(this.keynamePokemonList))
        if (list) {
            this.pokemonList = list
        } else {
            this.pokemonList = await this.load()
            await this.save()
        }

        console.log('Data loaded!');
        console.log(this.pokemonList);

        return this.pokemonList
    }

    load = async () => {
        const pokemonsResults = []

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        const list =  await response.json()
        
        for (const pokeinfo of list.results) {
            const responseInfo = await fetch(pokeinfo.url)
            const pokemondata =  await responseInfo.json()

            const a = {
                id: pokemondata.id,
                name: pokemondata.name,
                image: pokemondata.sprites.front_default,
                moves: [],
                types: []
            }

            for (const type of pokemondata.types) {
                a.types.push(type.type.name)
            }

            for(const move of pokemondata.moves){
                a.moves.push(move.move.name)
            }

            console.log(`Pokemon ${a.name} loaded`);
            pokemonsResults.push(a)

        }

       return pokemonsResults
    }

    save = async () => {
        localStorage.setItem(this.keynamePokemonList, JSON.stringify(this.pokemonList) )
    }
}

