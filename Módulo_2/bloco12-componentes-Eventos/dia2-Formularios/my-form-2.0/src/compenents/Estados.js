import React from 'react';
import Dataestados from './Dataestados';

class Estados extends React.Component {
  render() {
    return (
      <select required name="estados">
        <option defaultValue ></option>
        {Dataestados.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
      </select>
    )
  }
}

export default Estados;