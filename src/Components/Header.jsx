import React, {Component} from 'react';
import ColorTable from './ColorTable';

class Header extends Component{
  render () {
    return(
      <header>
         <h1>
            Pixel-Art in React
          </h1>
        <section>
          <ColorTable />
        </section>
      </header>

    )
  }
}

export default Header;
