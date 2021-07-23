// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const {teste} = this.props;
    return (
      <div>
        <p>{teste.name}</p> 
        <p> {teste.email} </p> 
        <Image source={teste.avatar} alternativeText="User avatar" />
      </div> 
    );
  }
}

export default UserProfile; 