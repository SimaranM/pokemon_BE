import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const PokemonList = ({ data }) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearch("");
    }, []);

    return (
        <div className='main-container'>
            <div className='search-container'>
                <lable>
                    <h3>Search Your Pokemon</h3>
                </lable>
                <input type='text' placeholder='Search..' onChange={(event) => setSearch(event.target.value)} />
            </div>

            <div>
                {data &&
                    data
                        .filter((e) => {
                            if (search === "") {
                                return e;
                            } else if (e.name.english.toLowerCase().includes(search.toLowerCase())) {
                                return search;
                            }
                        })
                        .map((e, index) => {
                            return (
                                <div className='pokename'>
                                    <Link exact to={`/pokemon/${e.id}`}>
                                        <p>{e.name.english}</p>
                                    </Link>
                                </div>
                            );
                        })}
            </div>
        </div>
    );
};
export default PokemonList;
