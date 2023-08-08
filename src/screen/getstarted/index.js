import React, {useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images, icons} from '../../constants';
import LoginScreen from './../login';
const {width, height} = Dimensions.get('window');

const NameComponent = () => {
  return (
    <View style={styles.list}>
      <Image source={images.user} style={styles.listicon} />
      <TextInput
        placeholder="Name"
        placeholderTextColor="#FFFFFF"
        style={styles.listtext}></TextInput>
    </View>
  );
};

const EmailComponent = () => {
  return (
    <View style={styles.list}>
      <Image source={icons.email} style={styles.listicon} />
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#FFFFFF"
        style={styles.listtext}></TextInput>
    </View>
  );
};

const PhoneComponent = () => {
  return (
    <View style={styles.list}>
      <Image source={icons.phone} style={styles.listicon} />
      <TextInput
      maxLength={10}
        keyboardType="numeric"
        placeholder="Phone"
        placeholderTextColor="#FFFFFF"
        style={styles.listtext}></TextInput>
    </View>
  );
};

const LocationComponent = () => {
  return (
    <View style={styles.list}>
      <Image
        source={icons.location}
        style={{
          ...styles.listicon,
          width: width * 0.035,
          height: height * 0.02,
        }}
      />
      <TextInput
        placeholder="Location"
        placeholderTextColor="#FFFFFF"
        style={styles.listtext}></TextInput>
    </View>
  );
};
const PasswordComponent = () => {
  return (
    <View style={styles.list}>
      <Image
        source={icons.key}
        style={{
          ...styles.listicon,
          width: width * 0.03,
          height: height * 0.03,
        }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        style={styles.listtext}></TextInput>
    </View>
  );
};

const GetStart = ({navigation}) => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#9183DE', '#A094E3']}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={{padding: width * 0.1}}>
        <View style={styles.getimgbox}>
          <Text style={styles.getimgtext}>Hi there!</Text>
          <Image source={images.getstart} style={styles.getimg} />
        </View>

        <Text style={styles.get_text}>Let’s Get Started</Text>

        <NameComponent />
        <EmailComponent />
        <PhoneComponent />
        <LocationComponent />
        <PasswordComponent />

        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            ...styles.get_login_button,
            backgroundColor: '#52439A',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#FFFFFF',
              fontFamily: 'Poppins-Bold-700',
            }}>
            Create an Account
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginBottom: height * -0.02}}>
          <Text style={styles.border}></Text>
          <Text style={{color: 'white', margin: height * 0.01}}>Or</Text>
          <Text style={styles.border}></Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.get_login_button}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#FFFFFF',
              fontFamily: 'Poppins-Bold-700',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  getimgbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.03,
  },
  getimgtext: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 16,
    fontFamily: 'Poppins-Black-900',
    paddingTop: height * 0.14,
    paddingLeft: width * 0.05,
  },
  getimg: {
    width: width * 0.42,
    height: height * 0.21,
  },
  get_text: {
    fontFamily: 'Poppins-Black-900',
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 24,
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    // padding: height * 0.02,
    // justifyContent:"center",
    borderColor: '#FFFFFF',
  },
  listicon: {
    tintColor: '#E0E0E0',
    width: width * 0.045,
    height: height * 0.023,
    marginTop: height * 0.02,
  },
  listtext: {
    color: '#EBEBFC',
    fontFamily: 'Poppins-Regular-400',
    fontSize: 11,
    marginLeft: width * 0.06,
    width: width,
  },
  get_login_button: {
    backgroundColor: 'rgba(255, 255, 255, 0.28)',
    borderRadius: 50,
    padding: width * 0.035,
    marginTop: height * 0.03,
  },
  border: {
    borderStyle: 'dashed',
    width: width * 0.33,
    borderTopWidth: 1,
    borderColor: '#FFFFFF',
    marginTop: height * 0.03,
  },
});

export default GetStart;
