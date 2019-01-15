import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import stripeTemp from 'stripe-client';
import axios from 'axios';

const StripeTemp = stripeTemp('pk_test_M315xbWEvSQjt7B8ZJYzuipC');

const information = {
  card: {
    number: '4242424242424242',
    exp_month: '02',
    exp_year: '21',
    cvc: '999',
    name: 'Billy Joe',
  },
};


class Payment extends Component {
  state={};

  async componentWillMount() {
    const card = await StripeTemp.createToken(information);
    console.log('token', card.id);
  }

  doPayment = async () => {
    try {
      const res = await axios.post('http://10.0.2.2:4001/api/payment');
      console.log('respose of payment', res);
    } catch (e) {
      console.error('network request error', e.response.status);
      throw e;
    }
  }

  render() {
    return (
      <View>
        <Button success onPress={this.doPayment}>
          <Text> do Payment</Text>
        </Button>
      </View>
    );
  }
}
export default Payment;
