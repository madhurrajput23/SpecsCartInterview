import "./App.css";
import Navbar from "./sections/Navbar";
import Rewards from "./sections/Rewards";
import Slider from "./sections/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Rewards />
    </div>
  );
}

export default App;
