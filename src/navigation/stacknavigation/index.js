import React, {useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import LoginScreen from './../../screen/login';
import SecurePin from './../../screen/securepin';
import GetStart from './../../screen/getstarted';
import IndiaBank from './../../screen/indiabank';
import HomeSreen from './../../screen/home';
import PaymentScreen from '../../screen/payment';
import OTPPage from './../../screen/OTPpage';
import LoginPaymentMove from './../../screen/loginpaymove';

import {icons, images} from '../../constants/index';
const Stack = createStackNavigator();

const {width, height} = Dimensions.get('window');

const StackNavigationScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShadowVisible: false,
        // padding: width * 0.02,
      })}>
      <Stack.Screen
        name="HomeSreen"
        component={HomeSreen}
        options={{
          title: '',

          headerStyle: {
            backgroundColor: '#040710',
          },
          headerLeft: () => (
            <View>
              <Image source={images.homelogo} style={styles.logo} />
            </View>
          ),

          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PaymentScreen')}
                style={[styles.LoginPaymentMoveButton]}>
                <Text style={styles.logintext}>Payment</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
                style={styles.LoginPaymentMoveButton}>
                <Text style={styles.logintext}>login</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SecurePin"
        component={SecurePin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStart"
        component={GetStart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPPage"
        component={OTPPage}
        options={{
          headerTitle: 'Enter OTP',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold-600',
            fontSize: 14,
          },

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentScreen')}
              style={styles.arrowtext}>
              <Image source={icons.arrow} style={styles.arrow} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerTitle: 'Payment',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold-600',
            fontSize: 14,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeSreen')}
              style={styles.arrowtext}>
              <Image source={icons.arrow} style={styles.arrow} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="IndiaBank"
        component={IndiaBank}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.03,
  },
  loginregisterButton: {
    backgroundColor: '#F5E876',
    borderRadius: 15,
    padding: width * 0.013,
  },
  arrow: {
    width: width * 0.06,
    height: height * 0.02,
    marginLeft: width * 0.04,
  },
  LoginPaymentMoveButton: {
    backgroundColor: '#F5E876',
    borderRadius: 8,
    width: width * 0.2,
    marginRight: width * 0.03,
  },
  logintext: {
    fontFamily: 'Poppins-Bold-700',
    padding: width * 0.014,
    fontSize: 10,
    color: 'black',
    alignSelf: 'center',
  },
});

export default StackNavigationScreen;
