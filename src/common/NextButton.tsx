import {View, TouchableOpacity, Dimensions, ColorValue} from 'react-native';
import React from 'react';
import {CustomText as Text} from './CustomText';

interface NextButtonProps {
  text: String;
  color: ColorValue;
  onPress: () => void;
}

export default function NextButton({text, color, onPress}: NextButtonProps) {
  const {width, height} = Dimensions.get('screen');

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: height * 0.7,

        width: width * 0.5,
        height: 60,
        backgroundColor: color,
        marginHorizontal: 'auto',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      onPress={onPress}>
      <Text style={{fontSize: 18, fontWeight: 600}}>{text}</Text>
    </TouchableOpacity>
  );
}
