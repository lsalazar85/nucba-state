import { useState, createContext } from 'react'

const NucbaContext = createContext({})

export const NucbaContextProvider = ({ children }) => {
    const [count, setCount] = useState(false)
    const [showUser, setShowUser] = useState(false)
    const [headerInfo, setHeaderInfo] = useState(false)

    return <NucbaContext.Provider value={{
        count,
        setCount,
        showUser,
        setShowUser,
        headerInfo,
        setHeaderInfo,
    }}>
        {children}
    </NucbaContext.Provider>
}

export default NucbaContext