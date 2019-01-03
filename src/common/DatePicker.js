import React from 'react';
import { View, Text } from 'native-base';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';

const CustomDatePicker = ({ registerForm, updateFormValue, content }) => (
  <View style={{
    flexDirection: 'row',
    marginTop: 10,
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderWidth: 0.5,
    borderColor: '#757575',
  }}
  >
    <View style={{ flex: 0.3, justifyContent: 'center', marginLeft: 10 }}>
      <Text style={{ fontSize: 15 }}>{`${content.label} :`}</Text>
    </View>
    <DatePicker
      style={{ flex: 0.7 }}
      mode="datetime"
      placeholder="Select date and time"
      format="YYYY/MM/DD h:mm a"
      minDate="1960-1-1"
      date={registerForm.dob}
      maxDate="2060-1-1"
      customStyles={{
        dateInput: {
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderWidth: 0,
        },
        dateText: { color: 'green', fontSize: 10 },
      }}
      confirmBtnText="Ok"
      cancelBtnText="cancel"
      onDateChange={date => updateFormValue(content.value, date)}
    />
  </View>
);
CustomDatePicker.propTypes = {
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CustomDatePicker;
