import React, {Component} from 'react';
import Pixel from './Pixel';

class Line extends Component {

  render() {

    const { lineArray } =this.props;

    return(
      <>
      {lineArray.map((item) => {
        return(
          <tr key={item.toString}><Pixel pixelGroup={ lineArray }/></tr>
          )
      })}
      </>
    )
  }
}

export default Line;