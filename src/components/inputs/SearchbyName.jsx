import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchbyName = () => {
    const navigate = useNavigate()
    const [inputName, setInputName] = useState("")

    const SearchName = ()=> {

        navigate(`/pokedex/${inputName}`)

    }
    return (
        <div className="is-justify-content-center field has-addons animate__animated animate__swing">
            <div className="control"> 
                <input
                        onChange={e => {setInputName(e.target.value.toLowerCase())}}
                        className="input" 
                            type="text" placeholder="Search Pokemon Name..."
                                onKeyDown={(e)=> {
                                    if(e.code === "Enter") {
                                        SearchName()
                                    }
                                }}></input>
                            </div>
                        <div className="control">
                                <button 
                                className='button is-info is-light is-rounded'
                                onClick={SearchName}>Enter</button>                      
                    </div>
        </div>
    );
};

export default SearchbyName;