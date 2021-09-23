import React, { useState } from 'react';
import { Alert } from 'react-native';
import RequestBookingView from './RequestBookingView';
import { useConfirmPayment } from '@stripe/stripe-react-native';

const API_URL = 'http://localhost:3000';
const PaymentMethod = ['Cash', 'Visa/MasterCard/AMEX'];

const RequestBookingContainer = (props) => {
  const { confirmPayment, loading } = useConfirmPayment();
  const [cardData, setCardData] = useState({});
  const [currentMethod, setCurrentMethod] = useState(PaymentMethod[1]);
  const [isSubmitBtn, setIsSubmitBtn] = useState(false);
  const fetchPaymentIntent = async () => {
    const response = await fetch(`${API_URL}/create-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayment = async () => {
    if (currentMethod === PaymentMethod[0]) {
      Alert.alert('Payment Successful');
    } else {
      if (!cardData.complete) {
        Alert.alert('Please enter your card information');
        return;
      }
      try {
        const { clientSecret, error } = await fetchPaymentIntent();
        if (error) {
          Alert.alert(`Can't process your payment`);
        } else {
          const { paymentIntent, error } = await confirmPayment(clientSecret, {
            type: 'Card',
            billingDetails: {},
          });
          if (error) {
            Alert.alert(`Payment Confirmation Error ${error.message}`);
          } else if (paymentIntent) {
            Alert.alert('Payment Successful');
          }
        }
      } catch (e) {}
    }
  };
  return (
    <RequestBookingView
      {...props}
      PaymentMethodList={PaymentMethod}
      handlePayment={handlePayment}
      currentMethod={currentMethod}
      onChangeCurrentMethod={setCurrentMethod}
      onChangeCardData={setCardData}
      isSubmitBtn={isSubmitBtn}
      setIsSubmitBtn={setIsSubmitBtn}
    />
  );
};

export default RequestBookingContainer;
