import React, { Component }from 'react';
import Modal from 'react-native-modal';
import ModalHeader from './Header';
import ModalContent from './Content';

class BirthProfile extends Component {
  state = {};

  render() {
    const { modal } = this.props;
    return (
      <Modal
        backdropColor="null"
        isVisible={modal.showProfileModal}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        <ModalContent {...this.props} />
      </Modal>
    );
  }
}

export default BirthProfile;
