import React from 'react';
import { UPDATE_PROFILE } from '../actions/types';

const initialModalData = {
  showProfileModal: false,
  showImagePickerModal: false,
  'Terms&Privacy': false,
};

export default (state = initialModalData, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
