import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image,Alert } from 'react-native';
import { Thumbnail, Icon, Switch, Button } from 'native-base';
import Form from '../../../common/Form';
import ImagePicker from '../../../common/ImagePicker';
import Input from '../../../common/Input';
import CountryPicker from '../../../common/CountryPicker';

const formContent = [
  {
    element: 'radio-group',
    label: 'Gender',
    groupContent: [
      {
        element: 'radio', label: 'Male', key: 'gender', value: 'male',
      },
      {
        element: 'radio', label: 'Female', value: 'female', key: 'gender',
      },
    ],
  },
  { element: 'date-picker', label: 'DOB', value: 'dob' },
];


class Content extends Component {
  state ={ };

  pickImage = () => {
    const { updateModalValue } = this.props;
    updateModalValue('showImagePickerModal', true);
  }

  renderUserImage = () => {
    const { registerForm } = this.props;
    const renderComponent = registerForm.imageURL
      ? <Thumbnail source={{ uri: registerForm.imageURL }} />
      : <Icon name="contact" style={{ fontSize: 60 }} />;
    return renderComponent;
  }

  render() {
    const { showImagePicker } = this.state;
    const { updateFormValue, registerForm } = this.props;
    console.log(this.props.registerForm);
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text style={{ color: '#757575', marginBottom: 30, alignSelf: 'center' }}>Please fill and save your real birth details...</Text>
        <TouchableOpacity onPress={this.pickImage}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 , marginRight: 10 }}>
              {this.renderUserImage()}
            </View>
            <View style={{ flex: 1 }}>
              <Input {...this.props} content={{ label: 'First Name', value: 'firstName' }} />
            </View>
          </View>
        </TouchableOpacity>
        <Form contents={formContent} {...this.props} />
        <ImagePicker modalVisible={showImagePicker} {...this.props} />
        <CountryPicker {...this.props} />
        <View style={{ margin: 5 }}>
          <Input {...this.props} content={{ label: 'State...', value: 'state' }} />
        </View>
        <View style={{ margin: 5 }}>
          <Input {...this.props} content={{ label: 'City...', value: 'city' }} />
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 10,
          margin: 5,
          backgroundColor: '#f5f5f5',
          borderWidth: 0.5,
          borderColor: '#757575',
          height: 40,
        }}
        >
          <View style={{ justifyContent: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 15 }}>Accurate Time</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Switch value={registerForm.accurateTime} onValueChange={value => updateFormValue('accurateTime', value)} />
          </View>
        </View>
        <Button success full onPress={() =>  Alert.alert('Data saved successfully')} style={{ margin: 5, marginTop: 30 }}>
          <Text style={{ color: 'white' }}>Save</Text>
        </Button>
      </View>
    );
  }
}

export default Content;
