import React, {Component} from 'react';

class Forms extends Component {
  constructor(props){
    super(props)
    this.state= {
      counter: 5,
      array:[]
    }
    this.handleResizer=this.handleResizer.bind(this);
    this.handleClicker=this.handleClicker.bind(this);
  }

handleResizer({target: {value}}) { //pra descontrutruir {target: {value}}
  this.setState( () => { 
   return {counter: value}
  })}; //({counter:value})

handleClicker(){
const size = this.state.counter;
for (let i = 0; i < size; i +=1) {
  this.state.array.push(i+1)
}
}

  render() {
    return(
      <form>
        <input type='text' id='sizeTable' onChange={this.handleResizer} placeholder='digite a resolução do desenho'/>
        <button type='button' onClick={this.handleClicker}>Alterar</button>
        <button type='button'>Apagar</button>
      </form>
    )

  }
}

export default Forms;