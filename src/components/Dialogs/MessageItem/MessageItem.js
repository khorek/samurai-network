import React from 'react';
import s from '../../Dialogs/Dialogs.module.css';

export const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.messages}</div>
    )
}