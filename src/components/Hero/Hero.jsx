import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchbyName from '../inputs/SearchbyName';
import SearchByType from '../inputs/SearchByType';
import Toogle from '../toogle/Toogle';

const Hero = ({selectByTypePokemon}) => {

    const [isActive, setIsActive] = useState(false)

    const changeActive = ()=> {
        setIsActive(!isActive)
    }

    const name = useSelector(state => state.name)
    
    return (
       
                <section className="hero is-small is-primary">
                <div className="hero-body">
                    <p className="title">
                    Pokedex
                    </p>
                    <p className="subtitle">
                    Welcome {name}, here you can find your favorite pokemon
                    </p>
                    <div>
                        <Toogle changeActive={changeActive}
                                isActive={isActive}  />
                    </div>
                    {
                        (!isActive) ? <SearchbyName /> : <SearchByType selectByTypePokemon={selectByTypePokemon} />
                    }
                    
                </div>
            
                
                </section>
    );
};

export default Hero;