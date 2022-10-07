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

    console.log(pokemon);

    useEffect(() => {
        fetchPokemon();
    }, []);

    const playerOneSelect = (e) => {
        const selectedPokemon = pokemon.find((poke) => {
            return poke.name.english === e.target.value;
        });
        setPlayer1(selectedPokemon);
    };

    const playerTwoSelect = (e) => {
        const selectedPokemon = pokemon.find((poke) => {
            return poke.name.english === e.target.value;
        });
        setPlayer2(selectedPokemon);
    };

    const fight = (e) => {
        console.log(player1, player2);
        while (true) {
            player1.base.HP -= player2.base.Attack;
            player2.base.HP -= player1.base.Attack;

            if (player1.base.HP <= 0) {
                setResult(player2);
                return;
            }
            if (player2.base.HP <= 0) {
                setResult(player1);
                return;
            }
        }
    };

    return (
        <div className='main-container'>
            <div className='FightingGround'>
                <div className='PlayerOne'>
                    <h3>Select Pokemon 1</h3>
                    <select onChange={playerOneSelect}>
                        <option value='empty'>Select your Pokemon</option>
                        {pokemon.map((poke) => {
                            return <option key={poke.id}> {poke.name.english} </option>;
                        })}
                    </select>
                </div>
                <div className='PlayerTwo'>
                    <h3>Select Pokemon 2</h3>
                    <select onChange={playerTwoSelect}>
                        <option value='empty'>Select your Pokemon</option>
                        {pokemon.map((poke) => {
                            return <option key={poke.id}> {poke.name.english} </option>;
                        })}
                    </select>
                </div>
                <div className='btn'>
                    <button onClick={fight}> fight </button>
                    {result && <p> The Winner is {result.name.english}</p>}
                </div>
            </div>
        </div>
    );
};

export default PokemonFight;
