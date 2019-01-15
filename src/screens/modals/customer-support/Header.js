import React from 'react';
import { Header, Right, Body, Text, Icon } from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

export default ({ updateModalValue }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text>Customer Support</Text>
    </Body>
    <Right>
      <Icon name="close" onPress={() => updateModalValue('CustomerSupport', false)} />
    </Right>
  </Header>
);
