import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import HomeStackHeader from './HomeStackHeader';

export default function FirstScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'First'>) {
  const [title, setTitle] = useState(
    `${route.params.date.getMonth() + 1}월 ${route.params.date.getDate()}일`,
  );
  const [prime, setPrime] = useState(route.params.prime);

  return (
    <View>
      <HomeStackHeader
        title={title}
        color="#E8E8E8"
        pressLeft={() => navigation.goBack()}
      />
      <SafeAreaView>
        <Text>{priorEmotion[prime].name}</Text>
      </SafeAreaView>
    </View>
  );
}
