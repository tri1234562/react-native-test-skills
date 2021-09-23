import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import moment from 'moment';
import styles from './DateTimeInforStyles';

export default () => {
  const date = moment(); 
  return (
    <>
      <View
        style={styles.container}
      >
        <View style={[styles.checkinDate, styles.dateBox]}>
          <Text style={styles.title}>Check-in date</Text>
          <Text style={styles.content}>{date.format('ddd, DD MMM YYYY')}</Text>
        </View>
        <View style={[styles.checkoutDate, styles.dateBox]}>
          <Text style={styles.title}>Check-out date</Text>
          <Text style={styles.content}>{moment(date).add(1, 'd').format('ddd, DD MMM YYYY')}</Text>
        </View>
        <View style={styles.durations}>
          <Text style={[styles.title, styles.last]}>Duration</Text>
          <Text style={styles.content}>{`1 Night(s)`}</Text>
        </View>
      </View>
    </>
  );
};
