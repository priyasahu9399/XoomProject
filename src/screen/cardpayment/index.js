import React, {useState} from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {images, icons} from '../../constants';
const {width, height} = Dimensions.get('window');

const CartPayment = () => {
  const [Selectradio, setSelectradio] = useState(1);
  const [Selectaccountradio, setSelectaccountradio] = useState(1);

  return (
    <View>
      {/* -------------radiobutton1------------ */}
      <Text style={styles.radio_button_text}>
        By Which card you want to pay .
      </Text>
      <View style={{flexDirection: 'row', marginTop: height * 0.04}}>
        <TouchableOpacity
          onPress={() => setSelectradio(1)}
          style={{flexDirection: 'row', marginRight: width * 0.05}}>
          <View
            style={[
              styles.radio_box,
              Selectradio === 1 && {backgroundColor: '#00B3FE', borderWidth: 0},
            ]}>
            {Selectradio === 1 ? (
              <View style={styles.radio_innner_box}></View>
            ) : null}
          </View>
          <Text style={styles.radio_button_text}>Credit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectradio(2)}
          style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.radio_box,
              Selectradio === 2 && {backgroundColor: '#00B3FE', borderWidth: 0},
            ]}>
            {Selectradio === 2 ? (
              <View style={styles.radio_innner_box}></View>
            ) : null}
          </View>

          <Text style={styles.radio_button_text}>Debit Card</Text>
        </TouchableOpacity>
      </View>
      {/* -------------radiobutton2------------ */}

      <Text style={styles.radio_button_accounttext}>
        Select your account type
      </Text>
      <View style={{flexDirection: 'row', marginTop: height * 0.04}}>
        <TouchableOpacity
          onPress={() => setSelectaccountradio(1)}
          style={{flexDirection: 'row', marginRight: width * 0.12}}>
          <View
            style={[
              styles.radio_box,
              Selectaccountradio === 1  && {
                backgroundColor: '#00B3FE',
                borderWidth: 0,
              },
            ]}>
            {Selectaccountradio === 1 ? (
              <View style={styles.radio_innner_box}></View>
            ) : null}
          </View>
          <Text style={styles.radio_button_text}>Current</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectaccountradio(2)}
          style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.radio_box,
              Selectaccountradio === 2 && {
                backgroundColor: '#00B3FE',
                borderWidth: 0,
              },
            ]}>
            {Selectaccountradio === 2 ? (
              <View style={styles.radio_innner_box}></View>
            ) : null}
          </View>

          <Text style={styles.radio_button_text}>Saving</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radio_button_text: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular-400',
    color: '#7E7878',
  },
  radio_box: {
    width: width * 0.054,
    height: height * 0.027,
    borderWidth: 0.5,
    borderRadius: 50,
    //  backgroundColor: '#00B3FE',
    marginRight: width * 0.02,
  },
  radio_innner_box: {
    width: width * 0.027,
    height: height * 0.013,
    //  borderWidth: 0.5,
    borderRadius: 50,
    margin: width * 0.012,
    backgroundColor: 'white',

    //  alignItems: 'center',
    alignSelf: 'center',
    //   justifyContent: 'center',
  },
  radio_button_accounttext: {
    marginTop: height * 0.04,
    fontSize: 11,
    fontFamily: 'Poppins-Bold-700',
    color: '#585454',
  },
});

export default CartPayment;
