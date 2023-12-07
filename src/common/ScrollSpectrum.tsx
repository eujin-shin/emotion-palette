import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {CustomText as Text} from './CustomText';
import {priorEmotion} from '../../sampleData';

interface ScrollSpectrumProps {
  current?: any;
  setCurrent?: any;
}

export default function ScrollSpectrum({
  current = 1,
  setCurrent,
}: ScrollSpectrumProps) {
  const {width} = Dimensions.get('screen');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({x: current * (width / 3), animated: true});
  }, [current]);

  const setScroll = (x: number) => {
    scrollViewRef.current?.scrollTo({
      x: x * (width / 3),
      animated: true,
    });
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newCurrent = Math.floor(e.nativeEvent.contentOffset.x / (width / 3));
    if (newCurrent < 0 || newCurrent > 13) return;
    setScroll(newCurrent);
    setCurrent(newCurrent);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={8}
        onScrollEndDrag={handleScroll}
        ref={scrollViewRef}
        style={{
          width: width,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 25,
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingHorizontal: width / 3,
            }}>
            {priorEmotion.map((e, idx) => (
              <View style={{width: width / 3}}>
                <TouchableOpacity
                  onPress={() => {
                    setScroll(idx);
                    setCurrent(idx);
                  }}>
                  <Text
                    style={{
                      fontSize: idx === current ? 28 : 20,
                      lineHeight: 28,
                      textAlign: 'center',
                      fontWeight: 300,
                      color: idx === current ? e.color : '#999999',
                    }}>
                    {e.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Image
            style={{width: (width * 16) / 3}}
            source={require('../assets/img/Spectrum.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
