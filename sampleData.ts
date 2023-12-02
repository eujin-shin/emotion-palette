import {ColorValue} from 'react-native/types';

interface PriorArray {
  map(
    arg0: (e: any, idx: any) => import('react').JSX.Element,
  ): import('react').ReactNode;
  [index: number]: {name: String; id: string; color: ColorValue};
}

export const priorEmotion: PriorArray = [
  {
    name: '미움',
    id: '',
    color: '#9B3536',
  },
  {
    name: '괴로움',
    id: '',
    color: '#984D63',
  },
  {
    name: '화',
    id: '',
    color: '#82558B',
  },
  {
    name: '두려움',
    id: '',
    color: '#7758A1',
  },
  {
    name: '슬픔',
    id: '',
    color: '#5050B2',
  },
  {
    name: '걱정',
    id: '',
    color: '#304ABD',
  },
  {
    name: '외로움',
    id: '',
    color: '#436CDC',
  },
  {
    name: '부끄러움',
    id: '',
    color: '#5CA2EA',
  },
  {
    name: '놀람',
    id: '',
    color: '#6EBFD3',
  },
  {
    name: '바람',
    id: '',
    color: '#77BC95',
  },
  {
    name: '사랑',
    id: '',
    color: '#BFC97B',
  },
  {
    name: '기쁨',
    id: '',
    color: '#F1D067',
  },
  {
    name: '안정',
    id: '',
    color: '#F3C961',
  },
  {
    name: '감동',
    id: '',
    color: '#F6C15B',
  },
];
