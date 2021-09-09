import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { MessageItem } from './MessageItem/MessageItem';
import { Redirect } from 'react-router-dom';
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let nameArr = state.dialogs.map(el => <DialogItem id={el.id} name={el.name} key={el.id} date={new Date()} />);
    let messageElements = state.messages.map(el => <MessageItem id={el.id} key={el.id} messages={el.message} />);
    // let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {nameArr}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}



export default Dialogs;