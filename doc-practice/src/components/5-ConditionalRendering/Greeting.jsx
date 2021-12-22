import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

export default function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name='nick' count={0} />;
  // }

  // return <GuestGreeting />;
  return props.isLoggedIn ? <UserGreeting name='nick' /> : <GuestGreeting />;
}
