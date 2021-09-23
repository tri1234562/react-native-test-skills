import React from 'react';
import { View, Platform } from 'react-native';
import { CardField } from '@stripe/stripe-react-native';
import { styles } from './PaymentStyles.js';

const PayMent = (props) => {
  const { onChangeCardData } = props;
  return (
    <View style={[styles.container, props.style]}>
      <CardField
        postalCodeEnabled={true}
        style={[styles.cardContainer]}
        placeholder={{
          number: '4242 4242 4242 4242',
          postalCode: 'ZIP',
        }}
        onCardChange={(cardDetails) => {
          onChangeCardData(cardDetails);
        }}
        cardStyle={Platform.OS === 'ios' && styles.card}
        // cardStyle={{
        //   borderWidth: 1,
        //   backgroundColor: '#fff',
        //   borderColor: '#ccc'
        // }}
      />
    </View>
  );
};

export default PayMent;
