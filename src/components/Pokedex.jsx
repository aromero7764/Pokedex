import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BackButton from './BackButton/BackButton';
import ConfigButton from './ConfigButton/ConfigButton';
import Hero from './Hero/Hero';
import SearchbyName from './inputs/SearchbyName';
import Pagination from './Pagination/Pagination';
import PokeDeskCardList from './PokeDeskCardsList/PokeDeskCardList';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [firshPage, setfirshPage] = useState(1)


    

    const [loading, setLoading] = useState(true)

    /* pagination */
    const [currentPage, setCurrentPage] = useState(1); //pagina inicial
    const [postPerPage, setPostPerPage] = useState(12); //para usar despues


    const name = useSelector(state => state.name)
    const dispatch = useDispatch();

    useEffect(()=> {
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1156')
            .then(res => setPokemonList(res.data.results) )      
            .finally(() => setLoading(false))

            

    }, [])

    const selectByTypePokemon = (typeUrl)=> {   

            axios.get(typeUrl)
            .then(res => {
                setPokemonList(res.data.pokemon.map(pokemon => pokemon.pokemon))})
                .then(()=> setCurrentPage(1))

    }

console.log(currentPage)
    //get list of pokemons
const indexOfLastPost = currentPage * postPerPage // 1 * 10 = 10
const indexOfFirstPost = indexOfLastPost - postPerPage //10 - 10 = 0
const currentPokemon = pokemonList.slice(indexOfFirstPost, indexOfLastPost) // 0, 10


//change page
const paginate = (pageNumber)=> setCurrentPage(pageNumber)
console.log(paginate)

    return (
        <div>
            <div>
            <Hero selectByTypePokemon={selectByTypePokemon}/>
            </div>
            
            <div className='container container is-fluid mt-3 mb-6'>
            <PokeDeskCardList 
                            currentPokemon={currentPokemon}
                            loading={loading} />
            </div>
            
            <div className='container is-fluid is-max-desktop mt-3 mb-6'>
            <Pagination postsPerPage={postPerPage}
                        firshPage={firshPage}
                        totalPost={pokemonList.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
                        
            </div>
            
            <BackButton /> 
            {/* <ConfigButton /> */}
            

        </div>
    );
};

export default Pokedex;