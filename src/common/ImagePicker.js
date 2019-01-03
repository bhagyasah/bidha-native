import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { ImagePicker, Permissions } from 'expo';
import { Icon, Text, Header, Body, Right, View, Button } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH, APP_COLOR } from '../config';

class CutomImagePicker extends Component {
  state = {};

  takePictureHandler = async () => {
    const { updateFormValue, updateModalValue } = this.props;
    updateModalValue('showImagePickerModal', false);
    await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    const { status } = await Permissions.getAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      const response = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
      });
      if (!response.cancelled) {
        updateFormValue('imageURL', response.uri);
      }
    }
  }

  pickFromGalleryHandler = async () => {

    const { updateFormValue, updateModalValue } = this.props;
    updateModalValue('showImagePickerModal', false);
    const response = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (!response.cancelled) {
      updateFormValue('imageURL', response.uri);
    }
  }

  render() {
    const { modal, updateModalValue } = this.props;
    return (
      <Modal
        backdropOpacity={0.3}
        isVisible={modal.showImagePickerModal}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        swipeDirection="down"
        onSwipe={() => updateModalValue('showImagePickerModal', false)}
      >
        <View style={styles.imageContainerStyle}>
          <Header style={{ backgroundColor: APP_COLOR }}>
            <Body>
              <Text style={{ fontSize: 20 }}>
                Select Avatar
              </Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => updateModalValue('showImagePickerModal', false)}>
                <Icon name="close" />
              </TouchableOpacity>
            </Right>
          </Header>
          <TouchableOpacity onPress={this.pickFromGalleryHandler}>
            <View style={styles.imageOptionStyle}>
              <Icon name="images" style={{ marginRight: 10 }} />
              <Text>Choose From Gallery...</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePictureHandler}>
            <View style={styles.imageOptionStyle}>
              <Icon name="camera" style={{ marginRight: 10 }} />
              <Text>Take Photo...</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    backgroundColor: '#f5f5f5',
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.4,
    borderWidth: 0.5,
    borderColor: '#757575',
  },
  imageOptionStyle: {
    flexDirection: 'row',
    margin: 10,
  },

});

export default CutomImagePicker;
