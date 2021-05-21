import React, {Component} from 'react';
import Colors from './Data';
import './colorTable.css'

class ColorTable extends Component{
  constructor(props) {
    super(props);
    this.state= {
      selection: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({target:{value}}){
    this.setState(() => {
      return { selection: value}
    })
  }

  render(){
    const { selection } = this.state;
    return(
      <table>
        <tr>
          <td colSpan='18'>
      <h3>Paleta de Cores</h3>
      </td>
      </tr>
      <tr>
        <td colSpan='18'>
          Escolha a sua paleta de cores:
        </td>
        </tr>
        <tr>
        <td colSpan='18'>
        <select onChange={ this.handleChange }>
          <option value='0'>Básicas</option>
          <option value='1'>Tonalidades</option>
          <option value='2'>todas</option>
          <option value='3'>randomicas</option>
        </select>
        </td>
      </tr>
      <tr className='pallete'>
        {Colors[selection].map((color) => {
          return (<td key={ color } value ={ color }  bgcolor={ color } className={`${color} color`} ></td>)
        })
      }
      </tr>
    </table>
    );
  }
}

export default ColorTable