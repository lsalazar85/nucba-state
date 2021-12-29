import { Link } from "react-router-dom";

import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";

const HomeSecondary = () => (
    <Main>
        <Header />
        <Link to="/">Return to Home</Link>
        <Footer />
    </Main>
)

export default HomeSecondary
