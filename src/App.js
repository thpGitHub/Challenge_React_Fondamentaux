import "./App.css";
import DivPages from "./Pages/DivPage";
import DivContextProvider from "./Context/DivContext.js";

function App() {
  return (
    <div className="App">
      <DivContextProvider>
        <DivPages />
      </DivContextProvider>
    </div>
  );
}

export default App;
