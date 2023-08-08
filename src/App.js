import React, {useEffect} from 'react';
import {View, Text, Dimensions, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';

import StackNavigationScreen from './navigation/stacknavigation';
const Stack = createNativeStackNavigator();

const {width, height} = Dimensions.get('window');


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StackNavigationScreen"
          component={StackNavigationScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
