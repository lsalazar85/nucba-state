import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from "../Header"
import Footer from "../Footer"
import Main from "../Main"
import Button from "../Button"
import { Li } from "./styles";

const RickAndMorty = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

   /* const getApiData = () => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => setData(response.data.results))
            .catch(e => setError(e))
    } */

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => setData(response.data.results))
            .catch(e => setError(e))
    }, [])

    return (
        <Main>
            <Header />
            <div>
                <h2>Rick and morty</h2>
                {/* <Button functionValue={getApiData} text="Api Call"/> */}
                {/* {!data.length && <div>No hay data a mostrar</div>} */}
                <ul>
                    {
                        data.map(item => (
                            <Li key={item.id}>
                                <span>Name: {item.name}</span>
                                <span>Status: {item.status}</span>
                            </Li>
                        ))
                    }
                </ul>
            </div>
            <Footer />
        </Main>
    )
}

export default RickAndMorty
