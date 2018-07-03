import { createStore } from 'redux';
import axios from 'axios';

const initialState = {
  persons: [],
  countries: []
}

function reducer(state = initialState, action) {
  if( action.type === 'ADD_PERSON'){
    return {
      ...state,
      persons: state.persons.concat(action.person)
    }
  } else if (action.type === 'SET_COUNTRIES') {
    return {
      ...state,
      countries: action.countries
    }
  }

  return state
}

let store = createStore(reducer);

axios.get('https://restcountries.eu/rest/v2/all')
  .then(function (response) {
    store.dispatch({
      type: 'SET_COUNTRIES',
      countries: response.data.map(country => country.name)
    });
  })
  .catch(function (error) {
    console.log(error);
});

export default store;