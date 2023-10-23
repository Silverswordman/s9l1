import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import Img from "./Components/Img";
function App() {
  return (
    <div className="App">
      <div>
        <Button buttonText="Clicca Qui" />
      </div>
      <div>
        <Button buttonText="Anche Qui" />
      </div>

      <div>
        <Img imageSrc="http://placekitten.com/400/300" />
      
        <Img imageSrc="https://placedog.net/400/300" />
      </div>
    </div>
  );
}

export default App;
