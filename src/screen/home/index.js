import React, {useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {images, icons} from '../../constants';
import {
  DropdownlocationComponent,
  DropdowncategorieComponent,
} from './../../component/dropdown';
import LoginScreen from './../login';
const {width, height} = Dimensions.get('window');

const HomeSreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        // barStyle="light-content"
      />
      <ImageBackground
        source={images.home}
        resizeMode="cover"
        style={styles.bgimage}>
        <View
          style={{
            marginTop: height * 0.04,
            padding: width * 0.1,
            marginBottom: height * -0.03,
            // width: width * 0.9,
          }}>
          <Text style={styles.home_text}>Meeting the needs of players</Text>
          <Text style={styles.home_text}>across the world</Text>
          <Text style={styles.home_bottomtext}>
            Meeting the needs of players across the world Meeting the needs of
            players across the world Meeting the needs of players
          </Text>
          <Text style={styles.home_bottomtext}>across the world</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: height * 0,
            justifyContent: 'space-around',
            padding: width * 0.1,
          }}>
          <DropdownlocationComponent />
          <DropdowncategorieComponent />
        </View>

        <TouchableOpacity
          style={{
            position: 'relative',
            padding: width * 0.1,
            marginTop: height * -0.07,
          }}>
          <View style={styles.Submit}>
            <Text style={styles.Submittext}>Submit</Text>
          </View>
          <Image
            source={icons.send}
            style={{
              width: width * 0.06,
              height: height * 0.027,
              position: 'absolute',
              right: 70,
              top: 53,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgimage: {
    height: height,
    width: width,
  },
  home_text: {
    color: 'white',
    lineHeight: 30,
    fontFamily: 'Poppins-Bold-700',
    alignSelf: 'center',
    fontSize: 15,
  },
  home_bottomtext: {
    fontSize: 11,
    alignSelf: 'center',
    color: 'white',
    lineHeight: 30,
    fontFamily: 'Poppins-Regular-400',
  },
  
  Submit: {
    borderRadius: 10,
    padding: width * 0.05,
    backgroundColor: 'rgba(82, 67, 154, 0.25)',
    width: width * 0.8,
  },
  Submittext: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold-600',
    alignSelf: 'center',
    fontSize: 12,
  },
});

export default HomeSreen;
