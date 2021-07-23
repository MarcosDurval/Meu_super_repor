import React from 'react';

class Constroi extends React.Component {
  render() {
    const { infos: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props
    return (
      <div className="divPoke">
        <div >
          <h3>{name}</h3>
          <p>{type}</p>
          <p> Average weight: {value} {measurementUnit}</p>
        </div>
          <img src={image} alt="" />
      </div>

    )
  }
}
export default Constroi