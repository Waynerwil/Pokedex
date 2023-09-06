import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavStyles.css'

    function Navbar(){
        return(
            <nav className='header'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Pokedex'>Pokedex</Link></li>
                </ul>
            </nav>
        )

    }
export default Navbar;