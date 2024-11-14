import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h2>Home Component</h2>
            <button><Link to={`/`}>Back</Link></button>
        </>
    )
}

export default Home