import React, {useState} from 'react';
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
import {RNToasty} from 'react-native-toasty';

import LinearGradient from 'react-native-linear-gradient';
import {images, icons} from '../../constants';
import OTPPage from "./../OTPpage";
const {width, height} = Dimensions.get('window');

const IndiaBank = ({navigation}) => {

const [showpassword, setShowpassword] = useState(true);
const [visible, setvisible] = useState(true);


  const [postData, setPostData] = useState({
    email: null,
    password: null,
 
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const proceed = () => {
    if (postData.email && postData.password) {
      navigation.navigate('OTPPage');
      console.log('fill');
    } else {
      console.log('tosty');
      RNToasty.Error({
        title: 'All field  fill require',
        fontFamily: 'Poppins-Regular-400',
        position: 'bottom',
        duration: 3,
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar backgroundColor="#013088" barStyle="light-content" />
      <View>
        <Image source={images.indiabank} style={styles.bankimg} />
      </View>
      <View style={{padding: width * 0.1}}>
        <View>
          <Text style={styles.label}>USERNAME</Text>
          <TextInput
            placeholder="johnsondoe@nomail.com"
            value={postData.email}
            onChangeText={text => handleChange('email', text)}
            style={styles.emailtext}></TextInput>
        </View>

        <View style={{position: 'relative'}}>
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            value={postData.password}
            onChangeText={text => handleChange('password', text)}
            placeholder="*************"
            secureTextEntry={visible}
            style={styles.emailtext}></TextInput>
          <TouchableOpacity
            onPress={() => {
              setShowpassword(!showpassword);
              setvisible(!visible);
            }}
            style={styles.eyeiconset}>
            {showpassword === false ? (
              <Image source={icons.eye} style={styles.eyeicons} />
            ) : (
              <Image source={icons.eyeoff1} style={styles.eyeicons} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => proceed()}
          style={{position: 'relative', marginTop: height * 0.02}}>
          <View style={styles.proceed}>
            <Text style={styles.proceedtext}>PROCEED</Text>
          </View>
          <Image source={icons.send} style={styles.sendicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bankimg: {
    width: width,
    height: height * 0.22,
  },
  label: {
    color: ' rgba(1, 25, 71, 0.6)',
    fontFamily: 'Poppins-Black-900',
    fontSize: 11,
    marginTop: height * 0.01,
  },
  emailtext: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: width * 0.05,
    color: '#011947',
    fontSize: 11,
    backgroundColor: 'rgba(1, 48, 136, 0.03)',
    borderColor: 'rgba(1, 48, 136, 0.4)',
    fontFamily: 'Poppins-Regular-400',
  },
  proceed: {
    borderRadius: 10,
    padding: width * 0.04,
    backgroundColor: '#58CDFE',
    width: width * 0.8,
  },
  proceedtext: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Black-900',
    alignSelf: 'center',
    fontSize: 11,
  },
  eyeiconset: {
    position: 'absolute',
    right: 4,
    top: 48,
    width: width * 0.1,
    height: height * 0.03,
    // borderWidth: 1,
  },
  eyeicons: {
    width: width * 0.055,
    height: height * 0.017,
    tintColor: 'rgba(1, 25, 71, 0.6)',
  },
  sendicon: {
    width: width * 0.05,
    height: height * 0.02,
    position: 'absolute',
    right: 35,
    top: 19,
  },
});
export default IndiaBank;
