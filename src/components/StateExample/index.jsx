import { useState } from "react";

const StateExample = () => {
    const [isShow, setIsShow] = useState(false)

    const setIsShowValue = () => {
        setIsShow(prevState => !prevState)
    }

    return(
        <>
            { isShow && <div>Hola Nucba</div> }
            <button onClick={setIsShowValue}>Mostrar / Ocultar</button>
            <button onClick={setIsShowValue}>Second click</button>
            <button onClick={setIsShowValue}>Hide Click</button>
        </>
    )
}

export default StateExample