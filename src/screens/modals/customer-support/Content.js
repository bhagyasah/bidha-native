import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Text, View, Icon } from 'native-base';
import Header from './Header';
import * as actions from '../../../actions';
import Form from '../../../common/Form';
import contactUsStructure from './contactUsStructure';

class ContactUs extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    // console.log('props in contact us', this.props.registerForm);
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <Form contents={contactUsStructure()} {...this.props} />
          <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="pin" style={{ color: 'blue' }}><Text style={{ color: 'blue' }}>{`  ${'Baneshwar, Kathmandu (Nepal)'}`}</Text></Icon>
            <Icon name="call" style={{ color: 'blue', marginTop: 10 }}>
              <Text style={{ color: 'blue' }}>
                {`  ${'01-5552222'}, ${'+977-985444433'}`}
              </Text>
            </Icon>
          </View>
        </Content>
      </Container>
    );
  }
}

ContactUs.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(ContactUs);
