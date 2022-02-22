import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import AuthScreen from '../screens/auth/authScreen';
import RegScreen from '../screens/auth/regScreen';
import InfHotel from '../screens/infHotel';
import RoomHotel from '../screens/roomHotel';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="reg" component={RegScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="infHotel" component={InfHotel} />
        <Stack.Screen name="roomHotel" component={RoomHotel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
