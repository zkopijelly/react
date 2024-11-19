import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
    const {firstName} = useContext(UserContext)
    console.log(firstName)
    return (
        <>
            This is the header component
            <div>{firstName}</div>
        </>
    )
}

export default Header;