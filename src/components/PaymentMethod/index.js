import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './PaymentMethodStyles';
import { Dropdown } from 'react-native-material-dropdown';
const PaymentMethod = (props) => {
  const { PaymentMethodList, onChangeCurrentMethod, currentMethod } = props;
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.wrapperSelect}>
        <View style={styles.label}>
          <View style={styles.customLabel}>
            <Text style={styles.labelMessage}>Select Method</Text>
          </View>
        </View>
        <View style={styles.selectMethod}>
          <Dropdown
            data={PaymentMethodList}
            onChangeText={(value) => {
              onChangeCurrentMethod(value);
            }}
            value={currentMethod}
            style={styles.dropdown}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;
