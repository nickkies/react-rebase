import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.locale('ko');
dayjs.extends(utc);
dayjs.extends(timezone);

export default function DayjsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState('');

  const handleBirthDayChange = (e) => {
    setDay(dayjs(e.target.value, 'YYYY-MM-DD').format('dddd'));
  };

  const date = dayjs();
  const newDate = date.add(1, 'week');
  const cloneDate = newDate.clone().add(1, 'week');
  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div>
        {date.format()}
        <br />
        {newDate.format()}
        <br />
        {cloneDate.format()}
        <br />
        <br />
      </div>

      <div> Summer Time [new-york]</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {dayjs
          .tz('2018-03-10 13:00:00', 'America/New_York')
          .add(1, 'day')
          .format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {dayjs
          .tz('2018-03-10 13:00:00', 'America/New_York')
          .add(24, 'hour')
          .format()}
      </div>
      <br />

      <div> Leap year [Korea]</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {dayjs('2017-01-01').subtract(1, 'year').format()}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {dayjs('2017-01-01').subtract(365, 'day').format()}
      </div>

      <br />
      <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{dayjs('07-17-2021').format('YYYY년 M월 DD일')}</div>
      <br />
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type='date' ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일 이였을 까?</div>
        <div>{day}</div>
      </div>
      <br />

      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00 몇시간 차이인가?</div>
      <div>
        {dayjs('2021-07-17 03').diff(dayjs('2021-07-18 02'), 'hours')}시간
      </div>
    </div>
  );
}
