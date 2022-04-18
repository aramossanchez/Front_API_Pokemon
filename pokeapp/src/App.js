import './App.css';
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import ListaPokemon from './Containers/ListaPokemon/ListaPokemon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<ListaPokemon />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
