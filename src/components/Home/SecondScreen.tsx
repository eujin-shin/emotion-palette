import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, View, SafeAreaView, Image, Platform} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import HomeStackHeader from './HomeStackHeader';
import ScrollSpectrum from '../../common/ScrollSpectrum';
import NextButton from '../../common/NextButton';

export default function SecondScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'Second'>) {
  const [title, setTitle] = useState(
    `${route.params.date.getMonth() + 1}월 ${route.params.date.getDate()}일`,
  );
  const [prime, setPrime] = useState(route.params.prime);
  const {width, height} = Dimensions.get('screen');

  return (
    <View>
      <HomeStackHeader
        title={title}
        color={priorEmotion[prime].color.toString() + '50'}
        pressLeft={() => navigation.goBack()}
      />
      <View>
        <TitleText
          title="기분을 어떻게 표현할 수 있을까요?"
          subtitle="내 감정에 맞는 붓을 골라 보세요."
        />

        <NextButton
          text="다음"
          color={priorEmotion[prime].color.toString() + '50'}
          onPress={() => {
            navigation.navigate('Record', {
              date: route.params.date,
              prime: prime,
              secondary: '',
            });
          }}
        />
      </View>
    </View>
  );
}
