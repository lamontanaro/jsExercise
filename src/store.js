import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { loadState } from './util/localStorage'

const initialState = loadState();

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
  } else if( action.type === 'SET_CURRENT_PERSON' ) {
    return {
      ...state,
      current_person: action.current_person
    }
  }
  return state
}

let store = createStore(
  reducer,
  applyMiddleware(thunk)
);


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