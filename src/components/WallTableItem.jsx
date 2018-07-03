import React, { Component } from 'react';

class WallTableItem extends Component {
  render() {
    const { name, surname, country, birthday} = this.props.person

    return (
      <tr className="WallTableItem">
        <th>{name}</th>
        <th>{surname}</th> 
        <th>{country}</th>
        <th>{birthday}</th>
      </tr>
    )
  }
}

export default WallTableItem;