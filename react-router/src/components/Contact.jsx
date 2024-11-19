import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <h2>Contact Component</h2>
            <button><Link to={`/`}>Back</Link></button>
        </>
    )
}

export default Contact