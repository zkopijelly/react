import { createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Pokemon from './components/Pokemon'
import PokemonDetails from './components/PokemonDetails'
import Home from './components/Home';

const routerFile = createBrowserRouter ([
    {
        path: '/',
        element: <Nav />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/pokemon',
        element: <Pokemon />
    },
    {
        path: '/pokemons/:pokemon',
        element: <PokemonDetails />
    }
])

export default routerFile