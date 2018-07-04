import { ADD_PERSON, SET_CURRENT_PERSON } from './Types';

export const addPerson = (person) => (dispatch) => {
  dispatch({type: ADD_PERSON, person})
};

export const setCurrentPerson = (current_person) => (dispatch) =>{
  dispatch({type: SET_CURRENT_PERSON, current_person})
};