import React from 'react';
import { View, Picker, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from './PaymentMethodStyles';

const PaymentMethod = (props) => {
  const { PaymentMethodList, onChangeCurrentMethod } = props;
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.wrapperSelect}>
        <View style={styles.label}>
          <Text style={styles.labelMessage}>Select Method</Text>
        </View>
        <View style={styles.selectMethod}>
          <SelectDropdown
            buttonStyle={styles.currentValue}
            data={PaymentMethodList}
            defaultValue={PaymentMethodList[1]}
            onSelect={(selectedItem, index) => {
              onChangeCurrentMethod(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;
