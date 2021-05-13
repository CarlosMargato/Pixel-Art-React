import React, {Component} from 'react';
import Colors from './Data';

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
          <td>
      <h3>Paleta de Cores</h3>
      </td>
      </tr>
      <tr>
        <td>
        <select onChange={ this.handleChange }>
          <option selected value='0'>primarias</option>
          <option value='1'>secundarias</option>
          <option value='2'>todas</option>
          <option value='3'>randomicas</option>
        </select>
        </td>
      </tr>
      <tr>
        {Colors[selection].map((color) => {
          return (<td bgcolor={ color }>cores</td>)
        })
      }
      </tr>
    </table>
    );
  }
}

export default ColorTable