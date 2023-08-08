import React, {useState} from 'react';
import {StyleSheet, View,Dimensions, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');

const data = [
  {label: 'Most Popular', value: '1'},
  {label: 'Newest', value: '2'},
  {label: 'Lowest Price', value: '3'},
  {label: 'Highest Price', value: '4'},

];

const Categoriesdata = [
  {labelCategories: 'Category', value: '5'},
  {labelCategories: 'Newest', value: '6'},
  {labelCategories: 'Lowest Price', value: '7'},
  {labelCategories: 'Highest Price', value: '8'},
];

const DropdownlocationComponent = () => {
  const [value, setValue] = useState(null);

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        placeholderStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        showsVerticalScrollIndicator={false}
      
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder="All Location"
    
        onChange={item => {
          setValue(item.value);
        }}
       
      />
    </View>
  );
};



const DropdowncategorieComponent = () => {
  const [valuecategorie, setValuecategorie] = useState(null);

  return (
    <View>
      <Dropdown
        style={styles.dropdownCategories}
        containerStyle={styles.containerStyleCategories}
        placeholderStyle={styles.placeholderStyleCategories}
        iconStyle={styles.iconStyleCategories}
        itemTextStyle={styles.itemTextStyleCategories}
        selectedTextStyle={styles.selectedTextStyleCategories}
        data={Categoriesdata}
        showsVerticalScrollIndicator={false}
        maxHeight={180}
        labelField="labelCategories"
        valueField="value"
        placeholder="All category"
        onChange={item => {
          setValuecategorie(item.value);
        }}
      />
    </View>
  );
};

export  {DropdownlocationComponent, DropdowncategorieComponent};

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.07,
    width: width * 0.38,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: width * 0.03,
  },
  selectedTextStyle: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'Poppins-Medium-500',
  },
  iconStyle: {
    tintColor: 'black',
  },
  containerStyle: {
    marginTop: height * -0.03,
    borderRadius: 10,
    // backgroundColor: 'red',
  },
  itemTextStyle: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'Poppins-Medium-500',
    margin: height * -0.01,
  },

  placeholderStyle: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Poppins-Medium-500',
  },

  // categories
  dropdownCategories: {
    height: height * 0.07,
    width: width * 0.38,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: width * 0.03,
  },
  selectedTextStyleCategories: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'Poppins-Medium-500',
  },
  iconStyleCategories: {
    tintColor: 'black',
  },
  containerStyleCategories: {
    marginTop: height * -0.03,
    borderRadius: 10,
    // backgroundColor: 'red',
  },
  itemTextStyleCategories: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'Poppins-Medium-500',
    margin: height * -0.01,
  },

  placeholderStyleCategories: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Poppins-Medium-500',
  },
});
