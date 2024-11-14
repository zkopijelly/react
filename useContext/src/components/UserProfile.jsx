import { UserContext } from "../contexts/UserContext"

const UserProfile = () => {
    return (
        <>
            <h2>This is UserProfile Component</h2>
            <UserContext.Consumer>
                {value => (
                    <>
                        <p>{value.firstName}</p>
                        <p>{value.lastName}</p>
                    </>
                )}
            </UserContext.Consumer>
        </>
    )
}

export default UserProfile