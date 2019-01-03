import React from 'react';
import { UPDATE_FORM_VALUE } from './types';

export const updateFormValue = (key, value) => {
  return {
    type: UPDATE_FORM_VALUE,
    payload: {key, value}
  }
}
