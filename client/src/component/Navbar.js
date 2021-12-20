import { Link } from 'react-router-dom';

import React from 'react';
import './navbar.css'

export default function Navbar() {
  return (
    /* <div classNameName='nav'>
         
         <Link to="/user">User</Link>
         <Link to="/photo">photo</Link>

         
     </div>*/
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">My-flickr</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">

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
