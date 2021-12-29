import { useContext, useEffect } from 'react'
import NucbaContext from "../../context/NucbaContext";
import { HeaderWrapper } from "./styles";


const Header = () => {
    const { showUser, headerInfo, setHeaderInfo } = useContext(NucbaContext)

    useEffect(() => {
        showUser && setHeaderInfo(true)
    }, [showUser])

    return(
        <HeaderWrapper changeBackground={showUser}>
            <span>React Global State</span>
            {headerInfo && <span>This is de global state in true</span>}
        </HeaderWrapper>
    )
}

export default Header