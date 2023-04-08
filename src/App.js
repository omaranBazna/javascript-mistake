import Header from "./Components/Header";
import Problems from "./Components/Problems";
import "./App.css";
import { useState } from "react";
import ReactGA from "react-ga";

ReactGA.initialize("G-2Z3PH1KWR9");
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header setShow={setShow} />
      <Problems show={show} setShow={setShow} isDarkMode={false} />
    </div>
  );
}

export default App;
