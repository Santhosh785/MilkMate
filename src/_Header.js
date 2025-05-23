import React from 'react';
import AavinLogo from './Images/AavinLogo.png';
import './Header.css';


const _Header = () => {
    return (
        <header className=''>
            <img src={AavinLogo} alt="MilkMate Logo" style={{ width: 100 }} />

            <button type="button" className="btn btn-outline-primary">Primary</button>



        </header>
    );
};

export default _Header;
