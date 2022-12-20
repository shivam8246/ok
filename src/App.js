import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
