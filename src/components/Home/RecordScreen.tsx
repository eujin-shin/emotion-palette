import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  View,
  Modal,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  ColorValue,
  Platform,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
  const [record, setRecord] = useState('');

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
        <KeyboardAwareScrollView>
          <TitleText
            title="왜 그런 기분이 들었나요?"
            subtitle="상황이나 이유를 적어 보세요."
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
              height: height * 0.15,
            }}>
            <Image
              source={require('../../assets/img/Palette.png')}
              style={{height: width * 0.25, width: width * 0.25}}
            />
            <Image
              source={require('../../assets/img/Waterdrop.png')}
              style={{
                position: 'absolute',
                alignSelf: 'flex-start',
                height: width * 0.23,
                width: width * 0.23,
                tintColor: priorEmotion[prime].color,
              }}
            />
            <Image
              source={require('../../assets/img/Brush.png')}
              style={{
                height: width * 0.3,
                width: width * 0.3,
                tintColor: priorEmotion[prime].color,
                transform: [{rotate: '-45deg'}],
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 30,
                color: priorEmotion[prime].color,
                letterSpacing: -0.6,
                marginHorizontal: 5,
              }}>
              {priorEmotion[prime].name}
            </Text>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 30,
                color: priorEmotion[prime].color,
                letterSpacing: -0.6,
                marginHorizontal: 5,
              }}>
              2차 감정
            </Text>
          </View>
          <View
            style={{
              marginTop: 35,
              alignSelf: 'center',
              height: height * 0.17,
              width: width * 0.7,
              backgroundColor: '#E8E8E8',
              borderRadius: 10,
              padding: 15,
            }}>
            <TextInput
              placeholder="눌러서 작성하기"
              multiline={true}
              placeholderTextColor={'#20202040'}
              style={{
                fontFamily: 'Pretendard Variable',
                width: width * 0.7 - 30,
                fontSize: 18,
                letterSpacing: -0.6,
                fontWeight: '300',
              }}
              onChangeText={text => {
                setRecord(text);
              }}
            />
          </View>
        </KeyboardAwareScrollView>
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
