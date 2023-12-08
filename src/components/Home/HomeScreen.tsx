import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import MenuButton from '../../common/MenuButton';
import {priorEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import dayToString from '../../common/dayToString';

export default function HomeScreen({
  navigation,
}: StackScreenProps<HomeStackParams>) {
  const {width} = Dimensions.get('screen');
  const [today, setToday] = useState<Date>();
  const rotatePos = [
    {x: -0.3, y: 0.3},
    {x: -0.36, y: 0.17},
    {x: -0.4, y: 0},
    {x: -0.36, y: -0.18},
    {x: -0.28, y: -0.31},
    {x: -0.1, y: -0.4},
    {x: 0.1, y: -0.4},
    {x: 0.3, y: -0.3},
    {x: 0.36, y: -0.18},
    {x: 0.4, y: 0},
    {x: 0.36, y: 0.17},
    {x: 0.28, y: 0.3},
    {x: 0.1, y: 0.38},
    {x: -0.1, y: 0.38},
  ];

  useEffect(() => {
    const day = new Date();
    setToday(day);
  }, []);

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View style={{height: 90, width: width * 0.95, flexDirection: 'row'}}>
        <MenuButton type="Dictionary" style={{marginRight: 'auto'}} />
        <MenuButton type="Calender" />
        <MenuButton type="Canvas" />
      </View>
      <TitleText
        title="어서오세요."
        subtitle="감정 단어를 선택해 기록을 시작하세요."
      />
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Image
          source={require('../../assets/img/SpectrumCircle.png')}
          style={{width: width * 0.6, height: width * 0.6}}
        />
        {priorEmotion.map((e, idx) => (
          <View
            style={{
              position: 'absolute',
              top: '50%',
              transform: [
                {translateX: width * rotatePos[idx].x},
                {translateY: width * rotatePos[idx].y},
              ],
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('First', {
                  date: dayToString(new Date()),
                  prime: idx,
                });
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 300,
                  color: '#999999',
                  letterSpacing: -0.6,
                }}>
                {e.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
