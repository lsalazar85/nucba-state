import { useState, useEffect } from "react"

const Count = () => {
    const [count, setCount] = useState(false)

    useEffect(() => {
        const getCount = () => {
            console.log('Hola Nucba')
        }

        count > 2 && getCount()
    }, [count])

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