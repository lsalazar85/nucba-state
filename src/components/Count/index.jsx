import { useEffect, useContext } from "react"
import NucbaContext from "../../context/NucbaContext";

const Count = () => {
    const { count, setCount } = useContext(NucbaContext)

    useEffect(() => {
        const getCount = () => {
            console.log('Hola Nucba')
        }

        count > 2 && getCount()
    }, [count])

    console.log(count)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Count