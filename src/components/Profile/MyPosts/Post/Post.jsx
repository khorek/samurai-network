import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item} key={props.key}>
      {props.message}
      <div>
        <span>👍{props.likesCount}</span>
      </div>
      <div>Date: </div>
    </div>
  )
}

export default Post;