import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";

import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import PokemonInfo from "./components/PokemonInfo";

const App = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await axios
            .get(`http://localhost:3000/pokemon/`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='pokelist' element={<PokemonList data={data} />} />
                <Route path='pokemon/:id' element={<Pokemon data={data} />} />
                <Route path='pokemon/:id/:info' element={<PokemonInfo />} />
                <Route path='fighting' element={<PokemonInfo data={data} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
