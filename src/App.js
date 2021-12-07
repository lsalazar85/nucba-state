import './App.css'
import Count from "./components/Count";
import { NucbaContextProvider } from "./context/NucbaContext";

const App = () => {
  return (
    <div className="App">
        <NucbaContextProvider>
            <Count />
        </NucbaContextProvider>
    </div>
  );
}

export default App;
