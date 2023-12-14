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
  FlatList,
  ColorValue,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CustomText as Text} from '../../common/CustomText';
import TitleText from '../../common/TitleText';
import {priorEmotion, secondEmotion} from '../../../sampleData';
import {HomeStackParams} from '../../pages/Home';
import HomeStackHeader from './HomeStackHeader';
import NextButton from '../../common/NextButton';

interface WordCardProps {
  name: string;
  color: ColorValue;
  onClick: () => void;
}

function WordCard({name, color, onClick}: WordCardProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={{
          margin: 4,
          padding: 8,
          backgroundColor: color.toString() + '50',
          borderRadius: 10,
          alignSelf: 'flex-start',
        }}>
        <Text style={{fontSize: 16, letterSpacing: -0.6}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function SecondScreen({
  navigation,
  route,
}: StackScreenProps<HomeStackParams, 'Second'>) {
  const [prime, setPrime] = useState(route.params.prime);
  const [second, setSecond] = useState('');
  const [modal, setModal] = useState(false);
  const {width, height} = Dimensions.get('screen');

  return (
    <View>
      <HomeStackHeader
        title={route.params.date}
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
        {second != '' && (
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 30,
                color: priorEmotion[prime].color,
                letterSpacing: -0.6,
              }}>
              {second}
            </Text>
            {/* <Text style={{width: width * 0.65, marginVertical: 15}}>
              2차 감정 정의
            </Text> */}
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            top: height * 0.45,
            marginHorizontal: 'auto',
            height: height * 0.2,
            width: width * 0.7,
            backgroundColor: '#E8E8E8',
            borderRadius: 10,
          }}>
          <View style={{margin: 10, height: height * 0.2 - 50}}>
            <FlatList
              contentContainerStyle={{
                flexGrow: 0,
                flexDirection: 'column',
                // flexWrap: 'wrap',
              }}
              columnWrapperStyle={{flexWrap: 'wrap'}}
              numColumns={3}
              data={secondEmotion[prime].filter(value => value != second)}
              renderItem={({item}) => (
                <WordCard
                  name={item}
                  color={priorEmotion[prime].color}
                  onClick={() => {
                    setSecond(item);
                    setModal(false);
                  }}
                />
              )}></FlatList>
          </View>
          <TouchableOpacity
            style={{marginRight: 10, marginLeft: 'auto'}}
            onPress={() => {
              setModal(true);
            }}>
            <Image
              source={require('../../assets/img/BackButton.png')}
              style={{
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
              alignContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{alignSelf: 'flex-end', margin: 20}}>
              <Image
                source={require('../../assets/img/Close.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
            <FlatList
              contentContainerStyle={{
                flexGrow: 0,
                flexDirection: 'column',
                paddingHorizontal: 20,
                // flexWrap: 'wrap',
              }}
              columnWrapperStyle={{flexWrap: 'wrap'}}
              numColumns={3}
              data={secondEmotion[prime].filter(value => value != second)}
              renderItem={({item}) => (
                <WordCard
                  name={item}
                  color={priorEmotion[prime].color}
                  onClick={() => {
                    setSecond(item);
                    setModal(false);
                  }}
                />
              )}></FlatList>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
