import {Component} from 'react'

class Arquivo extends Component {
  render() {
    const lista = ['cozinhar', 'correr', 'lavar'];
    const Task = (value) =>  <li>{value}</li>
    return  lista.map((elemento) => {
      return Task(elemento);
    })
    
  }

};

export default Arquivo