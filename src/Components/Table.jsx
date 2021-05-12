import React, {Component} from 'react';
import Line from './Line';

class Table extends Component {

  render () {
    const { Array } = this.props
    return(
      <table>
        <Line lineArray={ Array }/>
      </table>
    )
  }
}

export default Table;