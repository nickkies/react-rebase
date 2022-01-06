import React from 'react';
import { Progress } from 'antd';

export default function ProgressEample() {
  return (
    <>
      <Progress strokeLinecap='square' percent={75} />
      <Progress
        strokeLinecap='square'
        type='circle'
        percent={75}
        trailColor='red'
      />
      <Progress
        strokeLinecap='square'
        type='dashboard'
        percent={75}
        status='exception'
      />
    </>
  );
}
