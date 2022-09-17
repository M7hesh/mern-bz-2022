import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Card
        heroImg="./katie-zaferes.png"
        ratings="5.0"
        reviews="(6)"
        country="USA"
        heroName="Katie Zaferes"
        price="$135"
      />
    </div>
  );
}

export default App;
