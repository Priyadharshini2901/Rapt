import React from 'react';
import {Link} from 'react-router-dom';
function Home()
{
    return(
        <div>
            Home
               <button><Link to="/contact">Contact</Link></button>
               <button><Link to="/services">Services</Link></button>
        </div>
    )
}
export default Home;