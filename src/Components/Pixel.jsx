import React, {Component} from 'react';
import classes from './Pixel.css';

class Pixel extends Component {
  render(){
    const { pixelGroup } =this.props;
    return(
      <>
      {pixelGroup.map((item) => {
        return(
          <td key={item.toString} className={classes.pixel}>{item}</td>
          )
      })}
      </>
    )
  }
}

export default Pixel;