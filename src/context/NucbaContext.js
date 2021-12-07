import { useState, createContext } from 'react'

const NucbaContext = createContext({})

export const NucbaContextProvider = ({ children }) => {
    const [count, setCount] = useState(false)

    return <NucbaContext.Provider value={{
        count,
        setCount
    }}>
        {children}
    </NucbaContext.Provider>
}

export default NucbaContext