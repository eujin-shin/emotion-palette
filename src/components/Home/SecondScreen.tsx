import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  View,
  SafeAreaView,
  Image,
  Platform,
  Touchable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import HomeStackHeader from './HomeStackHeader';
import ScrollSpectrum from '../../common/ScrollSpectrum';
import NextButton from '../../common/NextButton';
import dayToString from '../../common/dayToString';

export default function SecondScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'Second'>) {
  const [prime, setPrime] = useState(route.params.prime);
  const [second, setSecond] = useState(-1);
  const [modal, setModal] = useState(false);
  const {width, height} = Dimensions.get('screen');

  return (
    <View>
      <HomeStackHeader
        title={dayToString(route.params.date)}
        color={priorEmotion[prime].color.toString() + '50'}
        pressLeft={() => navigation.goBack()}
      />
      <View style={{alignItems: 'center'}}>
        <TitleText
          title="기분을 어떻게 표현할 수 있을까요?"
          subtitle="내 감정에 맞는 붓을 골라 보세요."
        />
        <Image
          source={require('../../assets/img/Brush.png')}
          style={{
            width: width * 0.4,
            height: width * 0.2,
            tintColor: priorEmotion[prime].color,
          }}
        />
        {second >= -1 && (
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 30,
                color: priorEmotion[prime].color,
                letterSpacing: -0.6,
              }}>
              2차 감정
            </Text>
            <Text style={{width: width * 0.65, marginVertical: 15}}>
              2차 감정 정의
            </Text>
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            top: height * 0.47,
            marginHorizontal: 'auto',
            height: height * 0.17,
            width: width * 0.7,
            backgroundColor: '#E8E8E8',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setModal(true);
            }}>
            <Image
              source={require('../../assets/img/BackButton.png')}
              style={{
                position: 'absolute',
                top: height * 0.13,
                left: width * 0.6,
                height: 20,
                width: 20,
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
        </View>
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
      <Modal visible={modal} animationType="fade">
        <SafeAreaView
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              position: 'relative',
              height: height * 0.8,
              width: width * 0.8,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{alignSelf: 'flex-end', margin: 20}}>
              <Image
                source={require('../../assets/img/Close.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
