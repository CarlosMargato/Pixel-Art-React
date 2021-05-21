import React, {Component} from 'react';
import Table from './Table';

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
 if (value < 5){
    this.setState( () => { 
     return {counter: 5}
    })
 }
  if (value >= 5){
  this.setState( () => { 
   return {counter: value}
  }); //({counter:value})
}
if(value > 100){
    this.setState( () => { 
     return {counter: 100}
    })}
}

handleClicker(evento){
  evento.preventDefault();
const size = this.state.counter;
const arrayContent = this.state.array;
for (let i = 0; i < size; i +=1) {
  arrayContent.push(i+1)
}
this.setState(() => {
  return {array: arrayContent}
})
}

  render() {
    const array = this.state.array;
    return(
      
    <div>
      <form>
        <div>
          <label htmlFor='sizetable'>
            Insira a resolução preferida:
          </label>
        </div>
        <input
          type='number'
          id='sizeTable'
          onChange={this.handleResizer}
          placeholder='digite a resolução do desenho'
          min='5'
          minLength='5'
          max='100'
        />
        <button type='submit' onClick={this.handleClicker}>Alterar</button>
        <button type='button'>Apagar</button>
      </form>
        <Table Array={ array } />
    </div>
    )

  }
}

export default Forms;