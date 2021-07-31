// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blabla: [],
    };
  }


  componentDidMount() {

    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ blabla: data.results })
      })
  }

  render() {
    const { blabla } = this.state
    console.log(blabla)
    return (
      <div className="App">
        <h1>
          Ricky and Morty blabla:
        </h1>
        <div className="body">
          {blabla.map(({ name, image,species }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
                <h4>{ species }</h4>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;