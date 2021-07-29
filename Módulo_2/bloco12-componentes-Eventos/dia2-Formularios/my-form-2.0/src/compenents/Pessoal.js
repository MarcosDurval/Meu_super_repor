import React from 'react'
import Estados from './Estados';

class Pessoal extends React.Component {
  constructor(){
    super();
    this.State = {
      nome:'',
      value:'',
    }
    this.Uper = this.Uper.bind(this)
  }
  Uper(event){
    this.setState( { 
      value: event.target.value.toUpperCase()
     })
  }
  render() {
    return (
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" placeholder="Nome" name="nome" onChange={this.Uper} required  />
        <label htmlFor="Email">Email:</label>
        <input type="text" name="Email" required placeholder="email" maxLength="50" />
        <label>Cpf:
          <input type="text" name="cpf" required placeholder="Apenas números" maxLength="11" />
        </label>
        <label htmlFor="ende">Endereço:
          <input type="text" name="ende" required maxLength="200" />
        </label>
        <label>Cidade:
          <input type="text" maxLength="28" required />
        </label>
        <label htmlFor="estados">Estados:
          <Estados />
        </label>
        <label htmlFor="casa">Casa</label>
          <input type="radio" value="casa" name="lugar" required/>
        <label htmlFor="Apartamento">Apartamento </label>
          <input type="radio" name="lugar" value="Apartamento" />
          <button type="submit">submit</button>
      </div>
    );
  }
}
export default Pessoal