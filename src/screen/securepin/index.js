import React, {useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TextInput,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {icons, images} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import HomeSreen from "./../home";

const {width, height} = Dimensions.get('window');

const SecurePin = ({navigation}) => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#E5B2CA', '#CD82DE']}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <ScrollView>
        <View style={{padding: width * 0.1, alignSelf: 'center'}}>
          <View>
            <Image style={styles.phonepinimg} source={images.phonepin} />
          </View>
          <Text style={styles.Secure_text}>Enter Secure Pin</Text>

          <View style={styles.login_iconbox}>
            <Image
              source={images.key}
              style={{
                ...styles.login_icon,
                width: width * 0.043,
                height: height * 0.033,
              }}
            />
            <TextInput
              placeholder="*************"
              placeholderTextColor="gray"
              secureTextEntry={true}
              style={styles.login_icontext}></TextInput>
          </View>

          <TouchableOpacity
            // onPress={() => navigation.navigate('PaymentScreen')}
            onPress={() => navigation.navigate('HomeSreen')}
            style={styles.login_button}>
            <Text style={styles.buttontext}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  phonepinimg: {
    width: width * 0.84,
    height: height * 0.3,
    marginTop: height * 0.05,
    alignSelf: 'center',
  },
  Secure_text: {
    fontFamily: 'Poppins-Black-900',
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 25,
    paddingTop: height * 0.1,
  },
  login_iconbox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: width * 0.01,
    marginTop: height * 0.04,
    flexDirection: 'row',
  },
  login_icon: {
    width: width * 0.05,
    height: height * 0.027,
    marginTop: width * 0.03,
    marginLeft: width * 0.05,
    marginRight: width * 0.04,
  },
  login_icontext: {
    fontFamily: 'Poppins-Black-900',
    fontSize: 12,
    color: 'black',
  },
  login_button: {
    backgroundColor: '#78258B',
    borderRadius: 50,
    padding: width * 0.04,
    marginTop: height * 0.02,
  },
  buttontext: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold-700',
  },
});

export default SecurePin;
