import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, View, SafeAreaView, Image, Platform} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import HomeStackHeader from './HomeStackHeader';
import dayToString from '../../common/dayToString';
import ScrollSpectrum from '../../common/ScrollSpectrum';
import NextButton from '../../common/NextButton';

export default function FirstScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'First'>) {
  const [prime, setPrime] = useState(route.params.prime);
  const {width, height} = Dimensions.get('screen');

  return (
    <View>
      <HomeStackHeader
        title={dayToString(route.params.date)}
        color="#E8E8E8"
        pressLeft={() => navigation.goBack()}
      />
      <View>
        <TitleText
          title="오늘 어떤 기분이 들었나요?"
          subtitle="감정으로 팔레트를 채워 보세요."
        />
        <ScrollSpectrum current={prime} setCurrent={setPrime} />
        <View style={{position: 'relative', marginTop: height * 0.11}}>
          <Image
            source={require('../../assets/img/Palette.png')}
            style={{
              alignSelf: 'center',
              width: width * 0.3,
              height: width * 0.3,
            }}
          />
          <Image
            source={require('../../assets/img/Waterdrop.png')}
            style={{
              position: 'absolute',
              left: width * 0.47,
              top: -height * 0.07,
              width: width * 0.33,
              height: width * 0.3,
              tintColor: priorEmotion[prime].color,
            }}
          />
        </View>
        <NextButton
          text="다음"
          color="#E8E8E8"
          onPress={() => {
            navigation.navigate('Second', {
              date: route.params.date,
              prime: prime,
            });
          }}
        />
      </View>
    </View>
  );
}
