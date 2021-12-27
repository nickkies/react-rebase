import React from 'react';
import CommentItem from './CommentItem';

export default function Comments({ commentList }) {
  // const handleClick = useCallback(() => {
  //   console.log('눌림');
  // }, []);

  // 비효율 적으로 렌더링
  const handleClick = () => {
    console.log('눌림');
  };

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem key={comment.title} {...comment} onClick={handleClick} />
      ))}
    </div>
  );
}
