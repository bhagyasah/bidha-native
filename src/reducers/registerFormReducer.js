import React from 'react';
import { UPDATE_FORM_VALUE } from '../actions/types';

const initialFormState = {
  imageURL: null,
  firstName: null,
  gender: null,
  dob: null,
  country: null,
  city: null,
  state: null,
  accurateTime: false,
};

export default (state = initialFormState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
