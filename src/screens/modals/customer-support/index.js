import React, { Component } from 'react';
import Modal from 'react-native-modal';
import ModalContent from './Content';

class TermsAndPrivacy extends Component {
  state = {};

  render() {
    const { modal } = this.props;
    return (
      <Modal
        backdropColor="null"
        animationInTiming={500}
        animationOutTiming={500}
        isVisible={modal['CustomerSupport']}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalContent {...this.props} />
      </Modal>
    );
  }
}

export default TermsAndPrivacy;
