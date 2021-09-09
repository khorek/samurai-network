import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item} key={props.key}>
      <img alt={props.key} src='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51401141-stock-illustration-male-avatar-profile-picture-use.jpg' />
        { props.message }
          <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;