import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import store from './src/store';
import Onboarding from './src/screens/Onboarding';
import RequestBookingScreen from './src/screens/RequestBooking';
import { ONBOARDING, LOG_IN } from './src/ulti/constants';
const PUBLIC_KEY = "pk_test_51JcVQFGekqenOkRviYiKnassRnDxt37pKYWvtKDYOu5J3XRDAJpfJSSjQK8kYEaevtGjivnSEu859lDXPbpsv4ry00QraQqcU9";
export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={PUBLIC_KEY}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={ONBOARDING}>
            <Stack.Screen
              name={ONBOARDING}
              component={Onboarding}
              options={{
                title: '',
              }}
            />
            <Stack.Screen
              name={LOG_IN}
              component={RequestBookingScreen}
              options={{
                title: 'Request Booking',
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
