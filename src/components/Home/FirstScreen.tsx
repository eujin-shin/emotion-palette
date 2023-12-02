import React, {useCallback, useEffect} from 'react';
import {Dimensions, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import MenuButton from '../../common/MenuButton';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';

export default function FirstScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'First'>) {
  return (
    <SafeAreaView>
      <Text>{route.params.prime}</Text>
    </SafeAreaView>
  );
}
