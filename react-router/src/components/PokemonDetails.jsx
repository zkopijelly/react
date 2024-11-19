import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router"

const PokemonDetails = () => {
    const { pokemon } = useParams()
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const pokedex = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            console.log(response.data.results)

            setPokemons(response.data.results)
        }
        pokedex()
    }, [])

    const pokemonName = pokemons.find(pokemon => pokemon.name === name)
    console.log(pokemon)

    return (
        <>
            <h2>Pokemon Details Component</h2>
            <div>{pokemonName}</div>
            <div>{pokemon}</div>
            <button><Link to={`/pokemon`}>Back</Link></button>
        </>
    )
}

export default PokemonDetails