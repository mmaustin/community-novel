import React from 'react';
import { Link} from 'react-router-dom';

export const Navbar = () =>{

    return(
        <nav id='navbar'>
            <h4 id='nav-header'>Links to . . .</h4>
            <div id='nav-link-container'>
                <Link className='component-link' to='/'>Home Page</Link>
                <Link className='component-link' to='/all-authors'>The Authors</Link>
                <Link className='component-link' to='/all-works'>The Works</Link>
                <Link className='component-link' to='/all-contributions'>The Contributions</Link>                
            </div>
        </nav>
    )

}