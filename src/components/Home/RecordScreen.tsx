import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  View,
  Modal,
  SafeAreaView,
  Image,
  Platform,
  ColorValue,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import HomeStackHeader from './HomeStackHeader';
import NextButton from '../../common/NextButton';
import dayToString from '../../common/dayToString';

const {width, height} = Dimensions.get('screen');

function RecordFinishModal({color}: {color: ColorValue}) {
  return (
    <SafeAreaView
      style={{
        height: height * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: width * 0.3,
          width: width * 0.3,
          backgroundColor: color,
          borderRadius: 100,
          justifyContent: 'center',
          marginVertical: height * 0.03,
        }}>
        <Image
          source={require('../../assets/img/RecordFinish.png')}
          style={{
            height: width * 0.14,
            width: width * 0.14,
            alignSelf: 'center',
          }}
        />
      </View>
      <Text style={{fontSize: 18, fontWeight: 600, letterSpacing: -0.6}}>
        기록 완료!
      </Text>
    </SafeAreaView>
  );
}

export default function RecordScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'Record'>) {
  const [prime, setPrime] = useState(route.params.prime);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!modal) return;
    setTimeout(() => {
      navigation.popToTop();
    }, 2000);
  }, [modal]);

  return (
    <View>
      <HomeStackHeader
        title={dayToString(route.params.date)}
        color={priorEmotion[prime].color.toString() + '50'}
        pressLeft={() => navigation.goBack()}
      />
      <View>
        <TitleText
          title="왜 그런 기분이 들었나요?"
          subtitle="상황이나 이유를 적어 보세요."
        />

        <NextButton
          text="기록하기"
          color={priorEmotion[prime].color.toString() + '50'}
          onPress={() => {
            setModal(true);
          }}
        />
        <Modal visible={modal}>
          <RecordFinishModal color={priorEmotion[prime].color} />
        </Modal>
      </View>
    </View>
  );
}
