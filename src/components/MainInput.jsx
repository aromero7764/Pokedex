import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import '../assets/css/MainInput.css'
import { setName } from '../store/slices/name.slice';


const MainInput = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();


    const dispatch = useDispatch();

    const dispatchName = () => {
        dispatch(setName(userName))
        navigate("/pokedex")
    }
    
    
    return (
        <div className='maininputCard'>

            <div className="maininput field has-addons animate__animated animate__swing">
            <div className="control"> 
                <input
                        onChange={e => {setUserName(e.target.value)}}
                        className="input" 
                            type="text" placeholder="Write your name..."></input>
                            </div>
                        <div className="control">
                                <button 
                                className='button is-info is-light is-rounded'
                                onClick={()=> {dispatchName (userName)}}>Enter</button>                      
                    </div>
            </div>

            </div>
    );
};

export default MainInput;

