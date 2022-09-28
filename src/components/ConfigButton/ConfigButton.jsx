import { useState } from 'react';
import './ConfigButton.css'

const ConfigButton = () => {

    const [openConfiguration, setOpenConfiguration] = useState(false)
    console.log(openConfiguration)

    const changeOpen = ()=> {
        setOpenConfiguration(!openConfiguration)
    }

    return (
        <div onClick={changeOpen}>
        <div id="deployform" className={`deployform ${(openConfiguration) && "open"}`}>
            <div><i className="fa-solid fa-screwdriver-wrench icon" aria-hidden="true"></i></div>
            <div onClick={changeOpen} ><i  
                        className="fa fa-times cancel" aria-hidden="true"></i></div>
            <div className='container'>
                   {/* pendiente */}
            </div>
        </div>
    </div>
    );
};

export default ConfigButton;