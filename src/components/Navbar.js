import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6"> 
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">BUY ME :)</Link></li>
              <li className=""><Link to="/cart">Cart</Link></li>
            </ul> 
          </div>
        </div>
      </nav>
    </div>
);

export default Navbar;

