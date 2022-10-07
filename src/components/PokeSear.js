import React, { Component } from 'react';
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
import "./PokeSear.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            search: ''
        };


    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
            .then(response => response.json())
            .then(name => this.setState({ pokemons: name.results }));
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {

        const { pokemons, search } = this.state;
        const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

        return (
            <div className="App">
                <div className="logo_main">


                    <div className='logo'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="" className='logo' />
                    </div>
                    <div className='icon'>
                        <SearchBox
                            placeholder='Search Pokemon'
                            handleChange={this.handleChange}
                        />
                    </div>
                </div>
                <CardList pokemons={fileteredPokemons}></CardList>
            </div>
        );
    }
}
export default App;
