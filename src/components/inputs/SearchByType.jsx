import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchByType = ({selectByTypePokemon}) => {

    const [pokemonType, setPokemonTypes] = useState([])
    
    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res =>setPokemonTypes(res.data.results))

    }, [])


   
    return (
        <div className="is-justify-content-center field has-addons animate__animated animate__swing">
            <div className="control">
                <div className="select is-fullwidth">
                    <select onChange={e => selectByTypePokemon(e.target.value)} name="pokemonType">
                        <option value="allPokemons">Select one</option>
                        {
                            pokemonType.map(type => (
                                <option key={type.name} 
                                    value={type.url}>{type.name.toUpperCase()}</option>
                            ))
                        }
                        
                    </select>
                </div>
            </div>
            <div className="control">
                <button type="submit" 
                        className="button is-info is-light is-rounded"
                        onClick={selectByTypePokemon}>Select</button>
            </div>
        </div>
    );
};

export default SearchByType;