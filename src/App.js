import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Calculator />
        </header>
      </div>
    </Provider>
  );
}

export default App;
