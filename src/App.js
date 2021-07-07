import logo from './logo.svg';
import './App.css';

import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
