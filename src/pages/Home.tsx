import React from 'react';
import HomeScreen from '../components/Home/HomeScreen';
import FirstScreen from '../components/Home/FirstScreen';
import SecondScreen from '../components/Home/SecondScreen';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  useNavigation,
  useFocusEffect,
  NavigationContainer,
} from '@react-navigation/native';

export type HomeStackParams = {
  Home: undefined;
  First: {
    date: Date;
    prime: number;
  };
  Second: {
    date: Date;
    prime: number;
  };
  Record: {
    date: Date;
    prime: number;
    secondary: String;
  };
};

export default function Home() {
  const Stack = createNativeStackNavigator<HomeStackParams>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
