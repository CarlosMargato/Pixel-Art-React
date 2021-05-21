import React, {Component} from 'react';
import './pixel-module.css';

class Pixel extends Component {
  render(){
    const { pixelGroup } =this.props;
    return(
      <>
      {pixelGroup.map((item) => {
        return(
          <td key={item.toString} className='pixel'>{item}</td>
          )
      })}
      </>
    )
  }
}

export default Pixel;