import Header from "./Components/Header";
import Problems from "./Components/Problems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Problems isDarkMode={false} />
    </div>
  );
}

export default App;
