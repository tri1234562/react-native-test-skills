import * as React from "react";
import { Button, View, Text } from "react-native";
import styles from "./OnboardingStyles";
// import { useNavigation } from "@react-navigation/core";

const OnboardingView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
      <Button
        title="Go to Request Booking Screen"
        onPress={() => navigation.navigate("Login")}
      />
    </View>   
  );
};

export default OnboardingView;
