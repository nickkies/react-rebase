import React, { useRef, useState } from 'react';
import { add, sub, format, differenceInHours } from 'date-fns';
import addWeeks from 'date-fns/addWeeks';
import { ko } from 'date-fns/locale';
import { format as tzFormat, toDate } from 'date-fns-tz';

export default function DateFnsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState('');

  const handleBirthDayChange = (e) => {
    setDay(format(new Date(e.target.value), 'eeee', { locale: ko }));
  };

  const date = new Date();
  const newDate = add(date, { weeks: 1 });
  const cloneDate = addWeeks(newDate, 1);
  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(date, 'yyyy-MM-dd')}
        <br />
        {format(newDate, 'yyyy-MM-dd')}
        <br />
        {format(cloneDate, 'yyyy-MM-dd')}
        <br />
        <br />
      </div>

      <div> Summer Time [new-york]</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {tzFormat(
          add(
            toDate(new Date('2018-03-10 13:00:00'), {
              timeZone: 'America/New_York',
            }),
            { days: 1 }
          ),
          'yyyy-MM-dd HH:mm:ssXXX',
          {
            timeZone: 'America/New_York',
          }
        )}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {tzFormat(
          add(
            toDate(new Date('2018-03-10 13:00:00'), {
              timeZone: 'America/New_York',
            }),
            { hours: 24 }
          ),
          'yyyy-MM-dd HH:mm:ssXXX',
          {
            timeZone: 'America/New_York',
          }
        )}
      </div>
      <br />

      <div> Leap year [Korea]</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {format(sub(new Date('2017-01-01'), { years: 1 }), 'yyyy-MM-dd')}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {format(sub(new Date('2017-01-01'), { days: 365 }), 'yyyy-MM-dd')}
      </div>

      <br />
      <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{format(new Date('07-17-2021'), 'yyyy년 M월 d일')}</div>
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
        {differenceInHours(
          new Date('2021-07-17 03:00'),
          new Date('2021-07-18 02:00')
        )}
        시간
      </div>
    </div>
  );
}
