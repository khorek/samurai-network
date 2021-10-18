import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const MyPosts = React.memo(props => {
  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} id={el.id} />);
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div>
      <h2>My posts</h2>
      <PostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
})

const maxLength10 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <Field name='newPostText'
        component={Textarea}
        validate={[required, maxLength10]}
        placeholder={'Post Message'}
        style={{ overflow: 'auto', resize: 'none', margin: '10px' }} />
      <Button onClick={props.handleSubmit} variant="info">Add post</Button>
    </form>
  )
}

const PostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);


export default MyPosts;