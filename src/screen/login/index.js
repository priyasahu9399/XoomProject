import React, {useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {icons, images} from '../../constants';
import styles from './styles';
import SecurePin from "./../securepin";
import GetStart from "./../getstarted";


const {width, height} = Dimensions.get('window');
const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#E5B2CB', '#CD82DE']}>
      <StatusBar backgroundColor="#E5B2CB" barStyle="light-content" />
      <ScrollView>
        <View style={{padding: width * 0.1, alignSelf: 'center'}}>
          <View style={{marginTop: height * 0.03}}>
            <Image source={images.login} style={styles.login_img} />
          </View>
          <View>
            <Text style={styles.welcome_text}>Welcome Back !</Text>
            <Text style={styles.login_text}>Please, Log In.</Text>
          </View>
          <View style={styles.login_iconbox}>
            <Image source={images.user} style={styles.login_icon} />
            <TextInput
              placeholder="johnsondoe@nomail.com"
              placeholderTextColor="gray"
              style={styles.login_icontext}></TextInput>
          </View>
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
            onPress={() => navigation.navigate('SecurePin')}
            style={styles.login_button}>
            <Text style={styles.buttontext}>Continue</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.border}></Text>
            <Text style={{color: 'white', margin: height * 0.02}}>Or</Text>
            <Text style={styles.border}></Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('GetStart')}
            style={{
              ...styles.login_button,
              backgroundColor: 'rgba(255, 255, 255, 0.28)',
            }}>
            <Text style={styles.buttontext}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;
