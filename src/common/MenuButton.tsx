import {View, ViewStyle, Image} from 'react-native';
import React, {useState} from 'react';
import {CustomText as Text} from './CustomText';

interface MenuButtonProps {
  type: 'Dictionary' | 'Calender' | 'Canvas';
  showText?: boolean;
  style?: ViewStyle;
}

export default function MenuButton({
  type,
  showText = true,
  style,
}: MenuButtonProps) {
  const iconPath = {
    Dictionary: require('../assets/img/Dictionary.png'),
    Canvas: require('../assets/img/Canvas.png'),
    Calender: require('../assets/img/Calender.png'),
  };

  const text = {
    Dictionary: '감정 사전',
    Canvas: '내 캔버스',
    Calender: '달력',
  };

  return (
    <View
      style={{
        marginVertical: 20,
        marginHorizontal: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}>
      <Image
        style={{width: 25, height: 25, margin: 6}}
        source={iconPath[type]}
      />
      <Text style={{fontSize: 12, letterSpacing: -0.6}}>
        {showText && text[type]}
      </Text>
    </View>
  );
}
