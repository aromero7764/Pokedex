import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader'
import CharacterDetail from './CharacterDetail';


const PokemonDetail = ({url,}) => {

    const navigate = useNavigate();
    
    const [pokemonDetails, setPokemonDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemonDetails(res.data))
            .finally(()=> setLoading(false))

    }, [])



    return (
        <div className='is-clickable' onClick={()=> navigate(`/pokedex/${pokemonDetails.id}`) }>
          
           {
            loading ? <Loader /> : <>
            <div className="card">
                <div className="card-image">
                    <figure className='image is-3by2'>
                        <img src={pokemonDetails.sprites.other.dream_world.front_default} alt="image-pokemon" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{pokemonDetails.name.toUpperCase()}</p>
                        <p className='subtitle is-6'>Attack: { pokemonDetails.stats[1].base_stat}</p>
                    </div>
                    <div>
                        <footer className='card-footer'>
                            <p className='card-footer-item is-size-7'>Def: { pokemonDetails.stats[2].base_stat}</p>
                            <p className='card-footer-item is-size-7'>Hp: { pokemonDetails.stats[0].base_stat}</p>
                            <p className='card-footer-item is-size-7'>Speed: { pokemonDetails.stats[5].base_stat}</p>
                        </footer>
                    </div>
                    <div className="content">
                        <div className="tags">
                          {pokemonDetails.types.map(type => (
                            <span className='tag' key={type.type.name}>{type.type.name} </span>
                        ))    
                    }
                        </div>
                  
                </div>
                </div>
                

            </div>
            
            </>
           }
 
        </div>
        
    );
};

export default PokemonDetail;


{/*
 <p>{pokemonDetails.name}</p>
<p>
    Type: {pokemonDetails.types.map(type => (
        <span key={type.type.name}>{type.type.name} </span>
    ))
    }
</p>
    <p> Hp: { pokemonDetails.stats[0].base_stat}</p>
    <p> Attack: { pokemonDetails.stats[1].base_stat}</p>
    <p> Defense: { pokemonDetails.stats[2].base_stat}</p>
    <p> Speed: { pokemonDetails.stats[5].base_stat}</p>
    <img className='image-pokemon' src={pokemonDetails.sprites.other.dream_world.front_default} alt="" /> 
*/}