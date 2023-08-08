import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  login_img: {
    // marginTop: height * -0.01,
    width: width * 0.78,
    height: height * 0.3,
  },

  welcome_text: {
    fontFamily: 'Poppins-Black-900',
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 15,
  },
  login_text: {
    fontFamily: 'Poppins-Black-900',
    color: '#FFFFFF',
    marginTop: height * -0.01,
    alignSelf: 'center',
    fontSize: 26,
  },
  login_iconbox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: width * 0.01,
    marginTop: height * 0.02,
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
    padding: width * 0.037,
    marginTop: height * 0.02,
  },
  border: {
    borderStyle: 'dashed',
    width: width * 0.33,
    borderTopWidth: 1,
    borderColor: '#FFFFFF',
    marginTop: height * 0.04,
  },
  buttontext: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold-700',
  },
});
