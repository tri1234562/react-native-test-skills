import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './RoomInformation';

const RoomInformation = (props) => {
  const { style } = props;
  return (
    <View style={[style, styles.container]}>
      <Text style={styles.info}>1 guest/room</Text>
      <Text style={styles.info}>Room size 75.2sqm</Text>
      <Text style={styles.info}>1 king bed, 1 double bed</Text>
    </View>
  );
};

export default RoomInformation;
