import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'

const BackButton = () => {
    const navigate = useNavigate();

    return (
            <div className="backButton">
                <div onClick={()=> navigate(-1)}>
                        <i className="fa-solid fa-backward icon" aria-hidden="true"></i></div>
            </div>
    );
};

export default BackButton;


