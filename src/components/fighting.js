import { useState, useEffect } from "react";
import "./fighting.css";
import axios from "axios";

const PokemonFight = () => {
    const [result, setResult] = useState();
    const [player1, setPlayer1] = useState();
    const [player2, setPlayer2] = useState();

    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = async () => {
        await axios
            .get(`http://localhost:3002/pokemon/`)
            .then((res) => setPokemon(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    const PlayerOneSelect = (e) => {
        const selectedPokemon = pokemon.find((poke) => {
            return poke.name === e.target.value
        })
        setPlayer1(selectedPokemon);
    };

    const PlayerTwoSelect = (e) => {
        const selectedPokemon = pokemon.find((poke) => {
            return poke.name === e.target.value
        })
        setPlayer1(selectedPokemon);
    };

    return (
        <div className="FightingGround">
            <div ClassName="PlayerOne">
                <lable>
                    <h3>Select Pokemon 1</h3>
                </lable>
                <select placeholder='Select your Pokemon' onChange={PlayerOneSelect}>
                    <option value=""></option>
                </select>
            </div>
            <div ClassName="PlayerTwo">
                <lable>
                    <h3>Select Pokemon 2</h3>
                </lable>
                <select placeholder='Select your Pokemon' onChange={PlayerTwoSelect}>
                    <option value=""></option>
                </select>
            </div>
        </div>
    );
};

export default PokemonFight;