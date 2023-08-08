import React, {useState} from 'react';
import {
  Dimensions,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {images, icons} from '../../constants';

const {width, height} = Dimensions.get('window');

const OTPPage = () => {
  return (
    <ScrollView
    shownVerticalScrollIndicator={false}
      style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />

        <View>
          <Image source={images.payment} style={styles.paymentimg} />

          <View style={{padding: width * 0.1}}>
            <View style={styles.center}>
              <View style={[styles.rowdirection, styles.center]}>
                <Text style={styles.centertext_Topstyle}>Merchant Name : </Text>
                <Text style={styles.centertext_Topstyle}>Mr . John Sahab</Text>
              </View>
              <Text style={[styles.centertext_Topstyle, styles.center]}>
                COMMUNICATION LTD
              </Text>
              <View style={[styles.rowdirection, styles.center]}>
                <Text style={styles.centertext_style}>Date : </Text>
                <Text style={styles.centertext_style}> 07-Jan-2021</Text>
              </View>
              <View style={[styles.rowdirection, styles.center]}>
                <Text style={styles.centertext_style}>Total Charge :</Text>
                <Text style={styles.centertext_style}> Rs 10.00</Text>
              </View>

              <View style={[styles.rowdirection, styles.center]}>
                <Text style={styles.centertext_style}>Card Number : </Text>
                <Text style={styles.centertext_style}>XXXX XXXX XXXX</Text>
              </View>

              <Text
                style={[
                  styles.centertext_Topstyle,
                  styles.center,
                  {color: '#A79999', marginTop: height * 0.07},
                ]}>
                Please Wait OTP send to your mobile number
              </Text>

              <View style={styles.center}>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Enter OTP"
                  placeholderTextColor="#B6BBC7"
                  style={styles.otpbox}></TextInput>
              </View>

              <TouchableOpacity style={[styles.center, styles.submit_btn]}>
                <Text style={styles.submit_btn_text}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paymentimg: {
    width: width * 0.99,
    height: height * 0.3,
    resizeMode: 'cover',
  },
  centertext_Topstyle: {
    color: '#524848',
    fontFamily: 'Poppins-Medium-500',
    fontSize: 10,
    lineHeight: 21,
    // marginBottom: height * -0.01,
  },
  center: {alignSelf: 'center'},

  centertext_style: {
    color: '#000000',
    fontFamily: 'Poppins-Medium-500',
    fontSize: 13,
    lineHeight: 23,
  },
  rowdirection: {flexDirection: 'row'},

  otpbox: {
    borderRadius: 12,
    paddingLeft: width * 0.05,
    borderWidth: 1,
    borderColor: 'rgba(1, 48, 136, 0.4)',
    fontSize: 12,
    fontFamily: 'Poppins-Regular-400',
    width: width * 0.38,
    marginTop: height * 0.02,
    // paddingBottom: height * -0.001,
  },
  submit_btn: {
    backgroundColor: 'rgba(0, 179, 254, 0.61)',
    borderRadius: 12,
    width: width * 0.27,
    margin: height * 0.04,
  },
  submit_btn_text: {
    padding: width * 0.025,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'Poppins-Black-900',
    fontSize: 11,
  },
});
export default OTPPage;
