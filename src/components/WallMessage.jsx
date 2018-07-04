import React, { Component } from 'react';
import { connect } from 'react-redux';

class WallMessage extends Component {

  splitBirthday(birthday){
    let birt = birthday.split("/")
    return {day: birt[0], month: birt[1], bornYear: parseInt(birt[2]) }
  }

  render() {
    if (!this.props.current_person) { return '' }
    
    const { name, surname, country, birthday } = this.props.current_person
    const current_person = this.props.current_person
    const { day, month, bornYear } = this.splitBirthday(birthday)
    const year = new Date().getFullYear() - bornYear;
    return (
      <div className="WallMessage">
        {`Hello ${name} from ${country} on ${day} of ${month} you will have ${year}`}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  current_person: state.current_person
});

export default connect(mapStateToProps)(WallMessage);