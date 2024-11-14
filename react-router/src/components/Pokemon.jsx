import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const pokedex = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            console.log(response.data.results)

            setPokemons(response.data.results)
        }
        pokedex()
    }, [])
    return (
        <>
            <h2>Pokemon Component</h2>
            {
                pokemons.map(pokemon => (
                    <div className="pokemon" key={pokemon.name}>
                        <button>
                            <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
                        </button>
                    </div>
                ))
            }
            <button><Link to={`/`}>Back</Link></button>
        </>
    )
}

export default Pokemon