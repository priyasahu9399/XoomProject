import {Dimensions , StyleSheet} from 'react-native'
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  paymentimg: {
    width: width * 0.97,
    height: height * 0.3,
    margin: width * 0.03,
    resizeMode: 'cover',
  },
  buttons: {
    margin: width * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderColor: '#E0BFBF',
    marginBottom: height * 0.0,
  },
  touch_button: {
    backgroundColor: 'rgba(207, 210, 211, 0.61)',
    padding: width * 0.04,
    borderRadius: 10,
  },
  touchbuttontext: {
    fontFamily: 'Poppins-Bold-700',
    fontSize: 10,
  },
  selectbanktext: {
    fontFamily: 'Poppins-SemiBold-600',
    fontSize: 12,
    color: '#2A2B2C',
    paddingBottom: height * 0.0,
    marginTop: height * 0.02,
  },
  dropdown: {
    height: height * 0.07,
    width: width * 0.8,
    borderRadius: 12,
    padding: width * 0.03,
    paddingLeft: width * 0.05,
    borderWidth: 1,
    borderColor: 'rgba(1, 48, 136, 0.4)',
  },

  boxes: {
    height: height * 0.07,
    width: width * 0.8,
    borderRadius: 12,
    padding: width * 0.03,
    paddingLeft: width * 0.05,
    borderWidth: 1,
    borderColor: 'rgba(1, 48, 136, 0.4)',
    fontSize: 12,
    fontFamily: 'Poppins-Regular-400',
    // color:"black"
  },
  cardimg: {
    position: 'absolute',
    width: width * 0.18,
    height: height * 0.055,
    top: 45,
    right: 12,
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
    fontSize: 12,
  },
  sendicon: {
    width: width * 0.048,
    height: height * 0.02,
    position: 'absolute',
    right: 37,
    top: 19,
  },
  monthyear: {
    width: width * 0.38,
    fontSize: 12,
    padding: width * 0.0,
    color:'black'
  },

  // bank account  dropdown 
  // selectbanktext: {
  //   fontFamily: 'Poppins-SemiBold-600',
  //   fontSize:12,
  //   color:"#2A2B2C",
  //   paddingBottom:height*0.01,
  // },
  dropdown: {
    height: height * 0.07,
    width: width * 0.8,
    borderRadius: 10,
    padding: width * 0.03,
    paddingLeft: width * 0.05,
    borderWidth: 1,
    borderColor: 'rgba(1, 48, 136, 0.4)',
  },

  selectedTextStyle: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'Poppins-Regular-400',
  },
  iconStyle: {
    tintColor: '#A39696',
  },
  
  containerStyle: {
    marginTop: height * -0.03,
    borderRadius: 10,
  },
  itemTextStyle: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Poppins-Medium-500',
    margin: height * -0.01,
  },

  placeholderStyle: {
    fontSize: 12,
    color: '#B6BBC7',
    fontFamily: 'Poppins-Regular-400',
  },
});
