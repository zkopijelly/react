import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <h2>Nav Component</h2>
            <ul>
                <li>
                    <button>
                        <Link to={`/home`}>Home</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to={`/about`}>About</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to={`/contact`}>Contact</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to={`/pokemon`}>Pokemon</Link>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default Nav