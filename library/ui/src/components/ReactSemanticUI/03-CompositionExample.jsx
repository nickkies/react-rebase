import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Composition() {
  return (
    <>
      {/* 🔨  Each Semantic UI React component has a default value for `as` prop */}
      {/* Will output: <button class='ui button' /> */}
      <Button />
      {/* Uses another tag: <a class='ui button' /> */}
      <Button as='a' />

      {/* `type` is an unhandled prop on `Button` and will be passed through ⬇️
      Will output: <button class="ui button" type="submit" /> */}
      <Button type='submit' />

      {/* 💡 `to` prop is not handled in `Button` and will be passed to `Link` component */}
      <Button as={Link} to='/home'>
        To homepage
      </Button>
    </>
  );
}
