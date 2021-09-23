import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  TouchableHighlight,
  Platform,
} from 'react-native';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import styles from './RequestBookingStyles';
import { FontAwesome } from '@expo/vector-icons';
import Images from '../../assets';
import DateTimeInformation from '../../components/DateTimeInformation';
import RoomInformation from '../../components/RoomInformation';
import PriceInformation from '../../components/PriceInformation';
import Payment from '../../components/Payment';
import PaymentMethod from '../../components/PaymentMethod';

const RequestBookingView = (props) => {
  const stars = [1, 2, 3, 4] || props.stars;
  const room = 'Apartment, 2 Bedrooms' || props.roomInfo;
  const {
    PaymentMethodList,
    handlePayment,
    currentMethod,
    onChangeCurrentMethod,
    onChangeCardData,
    setIsSubmitBtn,
    isSubmitBtn,
  } = props;

  const renderStars = () => {
    return (
      <View style={styles.partOneRating}>
        {stars.map((item, idx) => {
          return (
            <FontAwesome
              key={idx}
              style={styles.partOneStar}
              name='star'
              size={16}
              color='#eb9b34'
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.title]}>
          <Text style={styles.titleText}>BOOKING INFO</Text>
        </View>
        <View style={styles.partOne}>
          <View style={[styles.partOneHeader, styles.pdh20]}>
            <Text style={[styles.partOneTitle, styles.partTitle]}>
              Grand Sierra Resort
            </Text>
            {renderStars()}
          </View>
          <View>
            <DateTimeInformation />
          </View>
        </View>

        <View style={styles.partTwo}>
          <Text style={[styles.partTitle, styles.pdh20]}>{room}</Text>
          <RoomInformation style={styles.mgh20} />
        </View>
        <View style={styles.partThree}>
          <Text style={[styles.partTitle, styles.pdh20]}>PAYMENT METHOD</Text>
          <PaymentMethod
            style={styles.mgh20}
            onChangeCurrentMethod={onChangeCurrentMethod}
            PaymentMethodList={PaymentMethodList}
          />
        </View>
        {currentMethod === PaymentMethodList[1] && (
          <View style={styles.partFour}>
            <Text style={[styles.partTitle, styles.pdh20]}>
              ENTER PAYMENT DETAIL
            </Text>
            <Payment style={styles.mgh20} onChangeCardData={onChangeCardData} />
          </View>
        )}

        <View style={styles.partFive}>
          <Text style={[styles.partTitle, styles.pdh20]}>PRICE DETAIL</Text>
          <PriceInformation roomInfo={room} style={styles.mgh20} />
        </View>

        <View style={[styles.mgh20, styles.comfirmStep]}>
          <View style={styles.policyCheck}>
            <CircleCheckBox
              checked={isSubmitBtn}
              onToggle={(checked) => setIsSubmitBtn(checked)}
              labelPosition={LABEL_POSITION.RIGHT}
              innerColor='green'
              outerColor='blue'
            />

            <Text style={styles.confirmMessage}>
              i have read understood, and agree to the
              <Text style={styles.blurRedText}> Terms</Text> and{' '}
              <Text style={styles.blurRedText}>Conditions</Text> and{' '}
              <Text style={styles.blurRedText}>Rental/Purchase Policies</Text>
            </Text>
          </View>
          {Platform.OS === 'ios' ? (
            <View style={styles.submitBox}>
              <Button
                title='Make Payment'
                color='#0da5fc'
                style={styles.submitBtn}
                onPress={() => handlePayment()}
                disabled={!isSubmitBtn}
              />
            </View>
          ) : (
            <TouchableHighlight
              style={[styles.submit]}
              onPress={() => handlePayment()}
              underlayColor='#fff'
              disabled={!isSubmitBtn}
            >
              <Text
                style={[
                  styles.submitText,
                  !isSubmitBtn ? styles.disabledSubmit : styles.activeSubmit,
                ]}
              >
                Make Payment
              </Text>
            </TouchableHighlight>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RequestBookingView;
