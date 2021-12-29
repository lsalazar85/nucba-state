import { Routes, Route, Link } from "react-router-dom";
import './App.css'

import Home from "./components/Home"
import HomeSecondary from "./components/HomeSecondary"
import RickAndMorty from './components/RickAndMorty'

const App = () => {

  const NotFound = () => (
      <div>
          Page Not Found
          <Link to="/">return home</Link>
      </div>
  )

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home-secondary" element={<HomeSecondary />} />
          <Route path="rick-and-morty" element={<RickAndMorty />} />
          <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
