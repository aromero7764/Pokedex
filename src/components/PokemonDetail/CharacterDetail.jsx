import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import title from '../../assets/img/pokemon-23.svg'
import '../../assets/css/CharaterDetails.css'
import BackButton from '../BackButton/BackButton'

const CharacterDetail = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const [pokemon, setPokemon] = useState ({})
    const navigate = useNavigate()
    

    useEffect(()=> {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
        .catch(error => {alert(`no se encontro el pokemon con el nombre ${id}`)
                        navigate("/")})
        .finally(()=> setLoading(false))


    }, [])

    console.log(pokemon)
    return (
        <div>
             { loading ? <Loader /> : <>

                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                        <div className="columns is-centered">
                                <div className="column is-half">
                                    <figure>
                                    <img className='img-pokemon' src={title} alt="pokemon-title" />
                                    </figure>
                                </div>
                                </div>     
                        </div>
                    </div>
                </section>
              <div className="container is-fluid mt-3 mb-6">

                <div className="tile is-ancestor">
                    {/* left */}
                    <div className="tile is-parent is-8 is-vertical">
                        <div className="tile is-child">
                            <article className="box has-text-centered">
                                <figure className='image is-inline-block'>
                                    <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon-image" />
                                </figure>
                                <div className="columns">
                                    <div className="column">
                                        <nav className="level">
                                            <div className="level-item has-text-centered">
                                                <div>
                                                <p className='title'>{pokemon.weight}</p>
                                                <p className='heading'>Weight</p>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>

                                    <div className="column">
                                    <nav className="level">
                                            <div className="level-item has-text-centered">
                                                <div>
                                                <p className='title'>{pokemon.height}</p>
                                                <p className='heading'>Height</p>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="card">
                                    <footer className="card-footer">
                                        <p className='card-footer-item title'>
                                            {pokemon.name.toUpperCase()}</p>
                                        <p className='card-footer-item subtitle'># {pokemon.id}</p>
                                    </footer>
                                </div>
                               
                            </article>
                        </div>

                        <div className="tile is-ancestor">
            
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <div className="tabs is-centered is-boxed">
                                        <ul>
                                            <li className="is-active">
                                            <a className='is-static'>
                                                    <span>Type</span>
                                                </a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="field is-grouped">
                                        {pokemon.types.map(type =>(
                                        <p key={type.type.url} className="control">
                                            <button className={`button ${type.type.name}`}>{type.type.name.toUpperCase()}</button>
                                        </p>
                                        ))

                                        }
                                    </div>
                                </div>
                           </div>

                           
                           <div className="tile is-parent">
                                <div className="tile is-child box">
                                
                                <div className="tabs is-centered is-boxed">
                                        <ul>
                                            <li className="is-active">
                                            <a className='is-static'>
                                                    <span>Abilities</span>
                                                </a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="field is-grouped">
                                        {pokemon.abilities.map(ability =>(
                                        <p key={ability.ability.url} className="control">
                                            <button className={`button ${ability.ability.name}`}>{ability.ability.name.toUpperCase()}</button>
                                        </p>
                                        ))

                                        }
                                    </div>

                                </div>
                            </div>
                         

                        </div>

                        <div className="tile is-child">
                            <div className="box">
                            <div className="tabs is-centered is-boxed">
                                        <ul>
                                            <li className="is-active">
                                            <a className='is-static'>
                                                    <span>Stats Base</span>
                                                </a>
                                            </li>
                                        </ul>
                                        
                            </div>
                            
                            <span className="tag is-primary is-light">HP: {pokemon.stats[0].base_stat}% </span>
                            <progress id='HP' className="progress is-primary" 
                                    value={pokemon.stats[0].base_stat} max="150">{pokemon.stats[0].base_stat}</progress>
                            
                            <span className="tag is-link is-light">Attack: {pokemon.stats[1].base_stat}% </span>
                            <progress id='Attack' className="progress is-link" 
                                    value={pokemon.stats[1].base_stat} max="150"></progress>
                            
                            <span className="tag is-info is-light">Defense: {pokemon.stats[2].base_stat}% </span>
                            <progress id='Defense' className="progress is-info" 
                                    value={pokemon.stats[2].base_stat} max="150"></progress>
                            
                            <span className="tag is-success is-light">Speed: {pokemon.stats[5].base_stat}%</span>
                            <progress id='Speed' className="progress is-success" 
                                   value={pokemon.stats[5].base_stat} max="150"></progress>
                            
                            </div>

                        </div>

                    </div>

                    {/* right */}
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <div className="tile is-child box">
                            <div className="tabs is-centered is-boxed">
                                        <ul>
                                            <li className="is-active">
                                            <a className='is-static'>
                                                    <span>Movements</span>
                                                </a>
                                            </li>
                                        </ul>  
                            </div>
                            <div className="tags is-multiline">
                             
                                {
                                pokemon.moves.map(move => (
                                 <span key={move.move.url} className="tag">
                                    {move.move.name}
                                </span>
                                ))
                            }
                            </div>
                            
                            
                            </div>
                            
                        </div>
                    </div>



                    {/* fin del tile ancestor */}
                </div>
                {/* end del contenedor */}
              </div>
            

            
            </>}
            <BackButton />
        </div>
    );
};

export default CharacterDetail;