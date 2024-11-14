import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState('Carlos')
    const [lastName, setLastName] = useState('Yulo')

    const person = {
        firstName: 'Jen',
        lastName: 'Vista',
    }

    const initialValue = {
        firstName,
        lastName,
        person,
        setFirstName,
        setLastName
    }
    return (
        <UserContext.Provider value={initialValue}>
            {children}
        </UserContext.Provider>
    )
}