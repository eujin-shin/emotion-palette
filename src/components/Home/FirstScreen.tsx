import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import HomeStackHeader from './HomeStackHeader';
import NextButton from '../../common/NextButton';

export default function FirstScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'First'>) {
  const [title, setTitle] = useState(
    `${route.params.date.getMonth() + 1}월 ${route.params.date.getDate()}일`,
  );
  const [prime, setPrime] = useState(route.params.prime);
  const {width, height} = Dimensions.get('screen');

  return (
    <View>
      <HomeStackHeader
        title={title}
        color="#E8E8E8"
        pressLeft={() => navigation.goBack()}
      />
      <SafeAreaView>
        <TitleText
          title="오늘 어떤 기분이 들었나요?"
          subtitle="감정으로 팔레트를 채워 보세요."
        />
        <View
          style={{
            width: width,
            height: 140,
            overflow: 'scroll',
            backgroundColor: 'black',
            marginBottom: 150,
          }}>
          <Image source={require('../../assets/img/Spectrum.png')} />
        </View>
        <NextButton text="다음" color="#E8E8E8" onPress={() => {}} />
      </SafeAreaView>
    </View>
  );
}
