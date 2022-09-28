import React, { useState } from 'react';

const Toogle = ({changeActive, isActive }) => {
 

    return (
        <div className='is-flex is-flex-direction-column is-align-items-center mb-3'>
            <p className='is-size-7'>Search by</p>

            <div className="tabs is-toggle is-toggle-rounded is-small">
                <ul>
                    <li className={`${(isActive) && "is-active"}`} >
                        <a onClick={changeActive }>
                            <span className="icon is-small"><i className="fa-brands fa-buromobelexperte" aria-hidden="true"></i></span>
                            <span>Type</span>
                        </a>
                    </li>
                    <li className={`${(!isActive) && "is-active"}`} >
                        <a onClick={changeActive}>
                            <span className="icon is-small"><i className="fa-solid fa-file-signature" aria-hidden="true"></i></span>
                            <span>Name</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Toogle;

