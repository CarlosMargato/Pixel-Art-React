import React, {Component} from 'react';
import Line from './Line';
import './table.css'

class Table extends Component {

  render () {
    const { Array } = this.props
    return(
      <table className='table-paint'>
        <Line lineArray={ Array }/>
      </table>
    )
  }
}

export default Table;