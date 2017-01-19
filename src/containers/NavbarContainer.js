import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {

  render() {
    return (
    <div>
        <Navbar />
        {this.props.children}
    </div>
    );
  }
}

export default NavbarContainer;