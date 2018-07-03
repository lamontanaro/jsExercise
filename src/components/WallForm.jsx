import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class WallForm extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      sunamer: '',
      country: '',
      birthday: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(function (response) {
      let countries = response.data.map(country => country.name)
      console.log(countries)
      debugger
      this.props.setCountries(countries)
    })
    .catch(function (error) {
      console.log(error);
    })
   }

  loadCountries() {
    this.props.countries.map( country => 
      <option value={country.name}>{country.name}</option>
    )
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const person = {
      name: this.state.name,
      surname: this.state.surname,
      country: this.state.country,
      birthday: this.state.birthday
    }
    this.props.addPerson(person);
    this.setState({name: '', surname: '', country:'', birthday: ''});
  }

  render() {
    const { name, surname, birthday } = this.state;

    return (
      <div className="WallForm">
        <form onSubmit={this.handleSubmit}>

          <label>Name:</label>
          <input
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
            />
          <br />

          <label>Surname:</label>
          <input
            placeholder="Surname"
            name="surname"
            value={surname}
            onChange={this.handleChange}
            />
          <br />

          <label>Birthday:</label>
          <input
            placeholder="Birthday"
            name="birthday"
            value={birthday}
            onChange={this.handleChange}
            />
          <br />

          <label>Countries:</label>
          <select 
            name="country"
            onChange={this.handleChange}
            >
            {this.loadCountries()}
          </select>
          
          <br />
          <input
            type="submit"
            value="Save"
          />

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPerson(person) {
      dispatch({type: "ADD_PERSON", person})
    },

    setCountries(countries) {
      dispatch({type: "SET_COUNTRIES", countries})
    }
  }
};

const mapStateToProps = (state) => ({
  countries: state.countries
});

export default connect(mapStateToProps, mapDispatchToProps)(WallForm);