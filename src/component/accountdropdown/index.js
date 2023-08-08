import React, {useState} from 'react';
import {Image,StyleSheet, View, Dimensions, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {images, icons} from '../../constants';

const {width, height} = Dimensions.get('window');

const data = [
  {label: 'India Bank', value: '1'},
  {label: 'SBI', value: '2'},
  {label: 'Central Bank', value: '3'},
  {label: 'kendra bank', value: '4'},
];



const DropdownAccountComponent = () => {
  const [value, setValue] = useState(null);

  return (
    <View style={{marginTop: height * 0.03}}>
      {/*<Image source={icons.arrowdown} /> */}

      <View>
        <Text style={styles.selectbanktext}>Select Your bank account</Text>
      </View>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        placeholderStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        imageStyle={styles.imageStyle}
        itemTextStyle={styles.itemTextStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        // value={postData.bankaccount}
        showsVerticalScrollIndicator={false}
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder="Select Bank"
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};


export default DropdownAccountComponent;

const styles = StyleSheet.create({
  selectbanktext: {
    fontFamily: 'Poppins-SemiBold-600',
    fontSize:12,
    color:"#2A2B2C",
    paddingBottom:height*0.01,
  },
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
