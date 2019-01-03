import { AsyncStorage } from 'react-native';

export const setAsyncData = async (key, value, dispatch, updateFormValue) => {

  dispatch(updateFormValue('error', ''));
  dispatch(updateFormValue('loading', true));
  try {
    await AsyncStorage.setItem(key, value);
    dispatch(updateFormValue('loading', false));
  } catch (e) {
    dispatch(updateFormValue('error', 'Field to Store data'));
  }
};

export const getAsyncData = async (key, value, dispatch, updateFormValue) => {
  let asyncValue = null;
  dispatch(updateFormValue('error', ''));
  dispatch(updateFormValue('loading', true));
  try {
    asyncValue = await AsyncStorage.getItem(key, value);
    dispatch(updateFormValue('loading', false));
  } catch (e) {
    dispatch(updateFormValue('error', 'Field to get data'));
  }
  return asyncValue;
};
