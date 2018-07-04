import React, { Component } from 'react';
import { connect } from 'react-redux';
import WallMessage from './WallMessage';
import { addPerson, setCurrentPerson } from '../action/Actions';

class WallForm extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      sunamer: '',
      country: '',
      birthday: ''
    }
   }

  loadCountries() {
    return this.props.countries.map( country => 
      <option key={country} value={country}>{country}</option>
    )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    const person = {
      name: this.state.name,
      surname: this.state.surname,
      country: this.state.country,
      birthday: this.state.birthday
    }
    this.props.addPerson(person);
    this.props.setCurrentPerson(person);
    this.setState({name: '', surname: '', country:'', birthday: ''});
  }

  render() {
    const { name, surname, birthday } = this.state;

    return (
      <div className="WallForm">
        <form onSubmit={this.handleSubmit}>
          <div className="WallForm-item">
            <label className="WallForm-label">Name:</label>
            <input
              className="WallForm-input"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
              />            
          </div>
          <div className="WallForm-item">
            <label className="WallForm-label">Surname:</label>
            <input
              className="WallForm-input"
              placeholder="Surname"
              name="surname"
              value={surname}
              onChange={this.handleChange}
              />            
          </div>
          <div className="WallForm-item">
            <label className="WallForm-label">Birthday:</label>
            <input
              className="WallForm-input"
              placeholder="mm/dd/yyyy"
              name="birthday"
              value={birthday}
              onChange={this.handleChange}
              />            
          </div>
          <div className="WallForm-item">
            <label className="WallForm-label">Countries:</label>
            <select 
              name="country"
              onChange={this.handleChange}
              className="WallForm-select"
              >
              {this.loadCountries()}
            </select>            
          </div>
          <input
            className="WallForm-button"
            type="submit"
            value="Save"
          />

        </form>
        <WallMessage />
      </div>
    )
  }
}

const mapDispatchToProps = {
  addPerson, setCurrentPerson
};


const mapStateToProps = (state) => ({
  countries: state.countries
});

export default connect(mapStateToProps, mapDispatchToProps)(WallForm);
