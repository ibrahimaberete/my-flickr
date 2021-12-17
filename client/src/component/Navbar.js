import { Link } from 'react-router-dom';

import React from 'react';
import './navbar.css'

export default function Navbar() {
  return (
    /* <div className='nav'>
         
         <Link to="/user">User</Link>
         <Link to="/photo">photo</Link>

         
     </div>*/
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">My-flickr</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <span>
            <Link  to="/user" style={{ marginRight: 10 }}  >Usern</Link>
            <Link to="/photo">photo</Link>
          </span>



        </div>
      </div>
    </nav>
  )
}

// export default Navbar;
