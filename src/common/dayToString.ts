export default function dayToString(day: Date) {
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  return `${day.getMonth() + 1}월 ${day.getDate()}일 ${
    dayList[day.getDay()]
  }요일`;
}
