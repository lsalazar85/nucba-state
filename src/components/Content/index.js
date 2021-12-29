import { Link } from "react-router-dom";
import { useContext } from 'react'
import NucbaContext from "../../context/NucbaContext";

import Counter from "../../features/counter/Counter";
import Title from "../Title";

// import Button from "../Button";
import './styles.css'


const Content = () => {
    const { showUser, setShowUser } = useContext(NucbaContext)

    return(
        <section>
            <Title text="This is the Content Component from this app" />
            <Title
                text="Click this button for more action"
                colorText="d3d3d3"
                bigFont
            />
            Click this button for more action
            {/* <Button text='Click Here' fn={() => setShowUser(prevState => !prevState)}/> */}
            <Counter />
            <div>
                {showUser && <span>This is the content message</span>}
            </div>
            <Link to="/home-secondary">Go to Home Secondary</Link>
        </section>
    )
}

export default Content
