import { useState, useEffect } from "react";
import "../App.css";

const PokemonFight = ({ data }) => {
    const [select, setSelect] = useState("");

    useEffect(() => {
        setSelect("");
    }, []);

    return (
        <div className="FightingGround">
            <div ClassName="PokemonPlayerOne">
                <lable>
                    <h3>Select Pokemon 1</h3>
                </lable>
                <input type='select' placeholder='Select your Pokemon' onChange={(event) => setSelect(event.target.value)}>
                    <option value=""></option>
                </input>
            </div>
            <div ClassName="PokemonPlayerTwo">
                <lable>
                    <h3>Select Pokemon 2</h3>
                </lable>
                <input type='select' placeholder='Select your Pokemon' onChange={(event) => setSelect(event.target.value)}>
                    <option value=""></option>
                </input>
            </div>
        </div>
    );
};

export default PokemonFight;