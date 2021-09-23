import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './PriceInformationStyle';

const PriceInformation = (props) => {
  const { style, roomInfo } = props;
  return (
    <>
      <View style={[style, styles.container]}>
        <View style={[styles.item, styles.borderBottom]}>
          <Text style={[styles.label, styles.holdText, styles.greyText]}>
            {roomInfo}
          </Text>
          <Text style={styles.greyText}>$100.00 USD</Text>
        </View>
        <View style={[styles.item, styles.borderBottom]}>
          <Text style={[styles.label, styles.greyText]}>Hotel Fee</Text>
          <Text style={styles.greyText}>Included</Text>
        </View>
        <View style={[styles.item, styles.borderBottom]}>
          <Text style={[styles.label, styles.greyText]}>
            Payment Processing Fee
          </Text>
          <Text style={styles.greyText}>$0 USD</Text>
        </View>
        <View style={[styles.item, styles.borderBottom]}>
          <Text style={[styles.label, styles.greyText]}>Sharing Fee</Text>
          <Text style={styles.greyText}>$0 USD</Text>
        </View>
        <View style={[styles.item]}>
          <Text
            style={[
              styles.label,
              styles.holdText,
              styles.fs20,
              styles.greyText,
            ]}
          >
            Total Fee
          </Text>
          <Text style={[styles.greyText, styles.greenText, styles.fs20]}>
            $100.00 USD
          </Text>
        </View>
      </View>
    </>
  );
};

export default PriceInformation;
