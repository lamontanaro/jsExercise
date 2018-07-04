import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPerson } from '../action/Actions';

class WallTableItem extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    this.props.setCurrentPerson(this.props.person)
  }

  render() {
    const { name, surname, country, birthday} = this.props.person

    return (
      <tr className="WallTable-item" onClick={this.handleOnClick} >
        <th>{name}</th>
        <th>{surname}</th> 
        <th>{country}</th>
        <th>{birthday}</th>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  setCurrentPerson
}

export default connect(null, mapDispatchToProps)(WallTableItem);
