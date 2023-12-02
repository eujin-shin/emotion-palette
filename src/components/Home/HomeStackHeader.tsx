import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Platform,
  Image,
  ColorValue,
  TouchableOpacity,
} from 'react-native';
import {CustomText as Text} from '../../common/CustomText';
import styled from 'styled-components/native';

interface HomeStackHeaderProps {
  title: String;
  color: ColorValue;
  pressLeft: () => void;
}

export default function HomeStackHeader({
  title,
  color,
  pressLeft,
}: HomeStackHeaderProps) {
  const {height} = Dimensions.get('screen');
  return (
    <View
      style={{
        backgroundColor: color,
        height: Platform.OS === 'ios' ? height * 0.11 : height * 0.08,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: height * 0.02,
      }}>
      <TouchableOpacity onPress={pressLeft}>
        <Image
          source={require('../../assets/img/BackButton.png')}
          style={{height: 25, width: 25, marginRight: 30}}
        />
      </TouchableOpacity>
      <Text
        style={{
          lineHeight: 25,
          fontSize: 18,
          fontWeight: 600,
          color: 'black',
          letterSpacing: -0.6,
        }}>
        {title}
      </Text>
    </View>
  );
}
