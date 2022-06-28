import React from 'react';
import { Link} from 'react-router-dom';

export const Navbar = () =>{

    return(
        <nav>
            <p>Follow The Links!</p>
            <div>
                <Link className='component-link' to='/'>Home Page</Link>
                <Link className='component-link' to='/all-authors'>Meet the Authors</Link>
            </div>
        </nav>
    )

}