import React, {Component} from 'react';

class ColorTable extends Component{
  render(){
    return(
      <table>
        <tr>
          <td>
      <h3>Paleta de Cores</h3>
      </td>
      </tr>
      <tr>
        <td>
        <select>
          <option selected value='prime'>primarias</option>
          <option value='second'>secundarias</option>
          <option value='all'>todas</option>
          <option value='random'>randomicas</option>
        </select>
        </td>
      </tr>
      <tr>
        <td>Azul</td>
        <td>Vermelho</td>
        <td>Verde</td>
      </tr>
    </table>
    );
  }
}

export default ColorTable