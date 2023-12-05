import {View, TouchableOpacity, Dimensions, ColorValue} from 'react-native';
import React from 'react';
import {CustomText as Text} from './CustomText';

interface NextButtonProps {
  text: String;
  color: ColorValue;
  onPress: () => void;
}

export default function NextButton({text, color, onPress}: NextButtonProps) {
  const {width} = Dimensions.get('screen');

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: width * 0.5,
          height: 60,
          backgroundColor: color,
          marginHorizontal: 'auto',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 600}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
