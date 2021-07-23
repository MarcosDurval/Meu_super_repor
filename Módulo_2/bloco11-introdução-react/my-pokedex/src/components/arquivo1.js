import React from 'react';
import Constroi from './constroiHtml';

class Poke extends React.Component {
  render(){
    const { infos } = this.props;
    return(
      infos.map((element) => <Constroi infos={element}/>)
    )
  }
}
export default Poke