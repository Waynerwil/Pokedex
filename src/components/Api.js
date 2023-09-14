export async function getPokemonList (url) {
     var pokemonData = [];
     var result = {}
     try {
         // Consumir el api con la url recibida
         const response = await fetch(url);
         const data = await response.json() ;
 
         console.log(data)
         // vamos a esperar la respuesta y formatearla a json
         if (data.results && data.results.length){
             // iterar cata pokemon
             for (const pokemon of data.results){
                 const url = pokemon.url;
                 const detailPokemon = await getPokemonDetailByUrl(url);
                 //push al arrelo de pokemons
                 pokemonData.push(detailPokemon);
             }
         }
         result ={count:data.count,
             next:data.next,
             previous: data.previous,
             array: pokemonData};
     } catch (error) {
         console.error (" Error capturando la Pokemon data", error);
         return null;
     }
     return result;
  }
 
export async function getPokemonDetailByUrl(url) {
     try {
         // obtener el detalle de cada pokemon
         const response = await fetch(url);
         const data = await response.json();
         const id = data.id;
         return {
             id,
             name:data.name,
             image:data.sprites.other["official-artwork"]["front_default"],
             type:data.types.map((item)=> item.type.name),
             stats:data.stats.map((stat)=>({[stat.stat.name]:stat.base_stat}))
         }
     } catch (error) {
       console.error (" Error capturando el detalle", error);
       throw error;  
     }
  }



  export async function postpokemonlike(id) {
    try {
        const url = "https://6500d76818c34dee0cd57375.mockapi.io/favoritos/pokemon"
        return fetch(url,{
                method: "POST", 
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({idPokemon: id})
            }
        ).then(
            (res) => {
                if (res.ok) {
                    console.log("Datos guardados");
                } else {
                    
                }
            }
        )
        
    } catch (error) {
      console.error (" Error capturando el detalle", error);
      throw error;  
    }
  }

  export async function getpokemonlike() {
    try {
        const requestPokemon = await fetch("https://6500d76818c34dee0cd57375.mockapi.io/favoritos/pokemon");
        const pokemonData = await requestPokemon.json()
        
        return pokemonData;
    } catch (error) {
      console.error (" Error capturando el detalle", error);
      return [];  
    }
  }
  export async function deletePokemonesFavoritos(idP) {
    try {
        const getPokemones = await getpokemonlike();
        let deleteId = '';
        
        const verificar = getPokemones.some(({idPokemon,id}) =>{
            if (idPokemon == idP) {
                deleteId = id;
            }
        })

        // console.log(verificar);

        return fetch(`https://6500d76818c34dee0cd57375.mockapi.io/favoritos/pokemon/${deleteId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
            console.log("Datos eliminados en mockupApi");
          } else {
            throw Error;
          }
        });

        // return pokemonfavoritosData;

    } catch (error) { //Se ejecuta si hubo algun error
        console.error("Hubo un error al llamar al api")
        return []
    }

}


  
