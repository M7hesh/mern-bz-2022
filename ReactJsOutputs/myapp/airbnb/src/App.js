import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./App.css";
import Card from "./Components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      {data.map((obj) => {
        return (
          <Card
            heroImg={obj.coverImg}
            ratings={obj.stats.rating}
            reviews={obj.stats.reviewCount}
            country={obj.location}
            title={obj.title}
            price={obj.price}
            openSpots={obj.openSpots}
          />
        );
      })}
    </div>
  );
}

export default App;
