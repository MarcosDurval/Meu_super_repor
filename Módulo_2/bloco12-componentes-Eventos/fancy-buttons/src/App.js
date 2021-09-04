import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      nummero: 0,
      num: 0,
    }
    this.bot = this.bot.bind(this)
    this.bot1 = this.bot1.bind(this)
  }
  bot() {
    this.setState((numeroAnteriores, _props) => ({
      nummero: numeroAnteriores.nummero + 1
    }))
  }
  bot1() {
    this.setState((numeroAnteriores, _props) => ({
      valor: numeroAnteriores.valor + 1
    }))
  }
  bot2() {
    console.log("vrauuuuuu")
  }
  render() {
    const { valor, nummero } = this.state
    return (
      <div>
        <button onClick={ this.bot }> {nummero}</button>
        <button onClick={ this.bot1 }>{valor}</button>
        <button onClick={ this.bot2 }>falatu</button>
      </div>

    );
  }
}

export default App
