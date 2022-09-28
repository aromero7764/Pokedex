import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonDetail from '../PokemonDetail/PokemonDetail';
import Tilt from 'react-parallax-tilt';

const PokeDeskCardList = ({currentPokemon, loading}) => {

    return (
            <div className='columns is-multiline'>
                {
                 currentPokemon.map(pokemon => (
                    
                 <div key={pokemon.name} className='column is-3 
                                            animate__animated animate__zoomInDown' 
                                            >
                <Tilt>
                    
                    {/* <p className='subtitle'>{pokemon.name.toUpperCase()}</p> */}
                   
                        <PokemonDetail url={pokemon.url}
                                       loading={loading} />
                    
                    </Tilt>
                    </div>
                   
                 ))
                }   
            </div>

    );
};

export default PokeDeskCardList;