import React, { memo } from 'react';
import './commentItem.css';

function CommentItem({ title, content, likes }) {
  return (
    <div className='commentItem'>
      <span>{title}</span>
      <br />
      <span>{content}</span>
      <br />
      <span>{likes}</span>
    </div>
  );
}

export default memo(CommentItem);
