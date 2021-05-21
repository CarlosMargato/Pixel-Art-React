import React, {Component} from 'react';
import ColorTable from './ColorTable';
import './header.css';

class Header extends Component{
  render () {
    return(
      <header>
         <h1>
            Pixel-Art in React
          </h1>
          <div className='blue' bgcolor='#FF0000'></div>
          <div className='red' bgcolor='#00FF00'></div>
          <div className='yellow' bgcolor='#0000FF'></div>
        <section>
          <ColorTable />
        </section>
      </header>

    )
  }
}

export default Header;
