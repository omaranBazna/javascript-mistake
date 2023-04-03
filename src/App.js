import Header from "./Components/Header";
import Problems from "./Components/Problems";
import "./App.css";
import { useState } from "react";
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
