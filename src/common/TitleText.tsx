import {View, Dimensions} from 'react-native';
import {CustomText as Text} from '../common/CustomText';

interface TitleTextProps {
  title: string;
  subtitle: string;
}

export default function TitleText({title, subtitle}: TitleTextProps) {
  const {height} = Dimensions.get('screen');
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        marginTop: height * 0.08,
        marginBottom: height * 0.05,
      }}>
      <Text style={{fontSize: 16, fontWeight: 600, lineHeight: 30}}>
        {title}
      </Text>
      <Text style={{fontSize: 16, fontWeight: 300, lineHeight: 30}}>
        {subtitle}
      </Text>
    </View>
  );
}
