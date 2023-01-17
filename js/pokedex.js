const pokemons = [];
let limitPokemons = 152;
const pokedex = document.querySelector("#pokedex"); //seleccionamos el ol  

const extraerPokemons = async () => {

    for (let i = 1; i < limitPokemons; i++){
        const result = await fetch ("https://pokeapi.co/api/v2/pokemon/" + i);
        const pokemon = await result.json();
        const pokemonDetails =  {
            name: pokemon.name,
            image: pokemon.sprites["front_default"],
            type: pokemon.types.map(type => {return type.type.name}) ,
            id: pokemon.id 
        }
        pokemons.push(pokemonDetails);
    };

    printPokemons(pokemons);
} 

const printPokemons = (pokemons) => {
    
    for (const pokemon of pokemons) { //recorremos el array
        const carta$$ = document.createElement("div"); //creamos elemento div
            carta$$.setAttribute("class","card");
            carta$$.setAttribute("id",pokemon.id);
        const img$$ = document.createElement("img"); //creamos elemento imagen
        const h3$$ = document.createElement("h3"); //creamos elemento h3
            h3$$.setAttribute("class","namePokemon");
        // const id$$ = document.createElement("id");
        //     id$$.setAttribute("class","id");

        h3$$.textContent = pokemon.name; //le decimos que h3$$ equivale a pokemon.name = nombre de cada pokemon
        img$$.src = pokemon.image; //le decimos que img$$ equivale a pokemon.image = imagen de cada pokemon
        
        
        
        
        carta$$.appendChild(h3$$); //introducimos h3$$ dentro de nuestra carta$$
        carta$$.appendChild(img$$); //introducimos img$$ dentro de nuestra carta$$

        for (const type of pokemon.type) { //recorremos el array de tipo, en el que encontramos el tipo de pokemon
            const type$$ = document.createElement("div"); //creamos elemento p
                type$$.setAttribute("class", type);
                // type$$.setAttribute("type",type);
            type$$.textContent = type; //le decimos que p$$ equivale a tipo
            carta$$.appendChild(type$$); //introducimos p$$ dentro de nuestra carta$$
        }

        pokedex.appendChild(carta$$); //introducimos carta$$(div) dentro de nuestro pokedex = ol
    }
    
} 

console.log(pokemons);

extraerPokemons();



