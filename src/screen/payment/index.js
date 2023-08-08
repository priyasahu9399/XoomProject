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
import {RNToasty} from 'react-native-toasty';
import {images, icons} from '../../constants';
import styles from './styles';
import CartPayment from './../cardpayment';
import DropdownAccountComponent from './../../component/accountdropdown';
import IndiaBank from './../indiabank';
import OTPPage from './../OTPpage';
import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';



const {width, height} = Dimensions.get('window');
const data = [
  {label: 'India Bank', value: '1'},
  {label: 'SBI', value: '2'},
  {label: 'Central Bank', value: '3'},
  {label: 'kendra bank', value: '4'},
];

const PaymentScreen = ({navigation}) => {
  const [Selectbutton, setSelectbutton] = useState(1);
  //bankaccount
  const [value, setValue] = useState(null);

  // month
  const [date, setDate] = useState(new Date());
  const [month, setmonth] = useState(false);
  // year
  const [yeardate, setyearDate] = useState(new Date());
  const [year, setyear] = useState(false);

  const [postData, setPostData] = useState({
    bankaccount: null,
    cardowner: null,
    cardnumber: null,
    cvv: null,
    month: null,
    year: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const submitting = () => {
    if (
      postData.bankaccount&&
      postData.cardowner &&
      postData.cardnumber &&
      postData.cvv &&
      postData.month &&
      postData.year
    ) {
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
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <View style={{paddingTop: height * 0.01}}>
          <View>
            <Image source={images.payment} style={styles.paymentimg} />
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => setSelectbutton(1)}>
              <View
                style={[
                  styles.touch_button,
                  Selectbutton === 1 && {
                    backgroundColor: 'rgba(0, 179, 255, 0.61)',
                  },
                ]}>
                <Text
                  style={[
                    styles.touchbuttontext,
                    Selectbutton === 1 && {
                      color: 'white',
                    },
                  ]}>
                  Card Payment
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectbutton(2)}>
              <View
                style={[
                  styles.touch_button,
                  Selectbutton === 2 && {
                    backgroundColor: 'rgba(0, 179, 255, 0.61)',
                  },
                ]}>
                <Text
                  style={[
                    styles.touchbuttontext,
                    Selectbutton === 2 && {
                      color: 'white',
                    },
                  ]}>
                  Net banking
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* card payment */}
          {Selectbutton === 1 ? (
            <View
              style={{
                padding: width * 0.1,
                paddingTop: height * 0.03,
              }}>
              <CartPayment />
              {/* <DropdownAccountComponent /> */}

              <View style={{marginTop: height * 0.03}}>
                {/*<Image source={icons.arrowdown} /> */}

                <View>
                  <Text style={styles.selectbanktext}>
                    Select Your bank account
                  </Text>
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
                  value={postData.bankaccount}
                  showsVerticalScrollIndicator={false}
                  maxHeight={180}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Bank"
                  onChange={item => {
                handleChange('bankaccount', item)
                    setValue(item.value);
                  }}
                />
              </View>

              {/* ------------------------ */}
              <View>
                <Text style={styles.selectbanktext}>Card Owner </Text>
                <TextInput
                  value={postData.cardowner}
                  onChangeText={text => handleChange('cardowner', text)}
                  placeholder="Enter Card  Owner"
                  placeholderTextColor="#B6BBC7"
                  style={styles.boxes}></TextInput>
              </View>

              <View>
                <Text style={styles.selectbanktext}>Card Number</Text>
                <TextInput
                  value={postData.cardnumber}
                  onChangeText={text => handleChange('cardnumber', text)}
                  keyboardType="numeric"
                  maxLength={12}
                  placeholder="Valid Card Number"
                  placeholderTextColor="#B6BBC7"
                  style={[styles.boxes, {position: 'relative'}]}></TextInput>
                <Image source={images.cardimg} style={styles.cardimg} />
              </View>

              <View>
                <Text style={styles.selectbanktext}>Expiration Date</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity onPress={() => setmonth(true)}>
                    <TextInput
                      editable={false}
                      value={postData.month}
                      onChangeText={text => handleChange('month', text)}
                      onChange={() => setDate(date)}
                      keyboardType="numeric"
                      placeholder="-select month-"
                      placeholderTextColor="#B6BBC7"
                      style={[styles.boxes, styles.monthyear]}></TextInput>
                    <DatePicker
                      modal
                      mode="date"
                      open={month}
                      date={date}
                      // style={styles.datePicker}
                      onConfirm={date => {
                        setmonth(false);
                        setDate(date);
                        handleChange('month', date.toISOString().slice(5, 7));
                        console.log('month', date);
                      }}
                      onCancel={() => {
                        setmonth(false);
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setyear(true)}>
                    <TextInput
                      editable={false}
                      onChangeText={text => handleChange('year', text)}
                      value={postData.year}
                      onChange={() => setyearDate(yeardate)}
                      keyboardType="numeric"
                      placeholder="-select year-"
                      placeholderTextColor="#B6BBC7"
                      style={[styles.boxes, styles.monthyear]}></TextInput>
                    <DatePicker
                      modal
                      mode="date"
                      open={year}
                      date={yeardate}
                      onConfirm={date => {
                        setyear(false);
                        setyearDate(date);
                        handleChange('year', date.toISOString().slice(0, 4));
                        console.log('year', date);
                      }}
                      onCancel={() => {
                        setyear(false);
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.selectbanktext}>CVV</Text>

                <TextInput
                  value={postData.cvv}
                  onChangeText={text => handleChange('cvv', text)}
                  maxLength={3}
                  keyboardType="numeric"
                  style={[
                    styles.boxes,
                    styles.monthyear,
                    {paddingLeft: width * 0.13},
                  ]}></TextInput>
              </View>

              <TouchableOpacity
                onPress={() => submitting()}
                style={{position: 'relative', marginTop: height * 0.04}}>
                <View style={styles.proceed}>
                  <Text style={styles.proceedtext}>Comfirm Payment</Text>
                </View>
                <Image source={icons.send} style={styles.sendicon} />
              </TouchableOpacity>
            </View>
          ) : Selectbutton === 2 ? (
            <View
              style={{
                padding: width * 0.09,
                paddingTop: height * -0.01,
              }}>
              <DropdownAccountComponent />
              <TouchableOpacity
                onPress={() => navigation.navigate('IndiaBank')}
                style={{position: 'relative', marginTop: height * 0.02}}>
                <View
                  style={[
                    styles.proceed,
                    {
                      width: width * 0.68,
                      alignSelf: 'center',
                    },
                  ]}>
                  <Text style={styles.proceedtext}>Proceed payment</Text>
                </View>
                <Image
                  source={icons.send}
                  style={[styles.sendicon, {right: 45}]}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
