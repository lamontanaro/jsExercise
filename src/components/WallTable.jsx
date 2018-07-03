import React, { Component } from 'react';
import WallTableItem from './WallTableItem';
import { connect } from 'react-redux';



class WallTable extends Component {
  loadPersons(persons){
    return (
      persons.map(person => <WallTableItem person={person} />)
    )
  }

  render() {
    return (
      <div className="WallTable">
        <table >
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Country</th>
            <th>Age</th>            
          </tr>
          { this.loadPersons(this.props.persons) }
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons
});

export default connect(mapStateToProps)(WallTable);