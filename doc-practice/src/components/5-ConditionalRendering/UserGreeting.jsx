import React from 'react';

export default function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name} ,`} Welcome.
      {props.count ? `It's  ${props.count} times` : null}
      {/* falsy 주의 */}
    </h1>
  );
}
