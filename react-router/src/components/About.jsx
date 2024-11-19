import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <>
            <h2>About Component</h2>
            <button><Link to={`/`}>Back</Link></button>
        </>
    )
}

export default About