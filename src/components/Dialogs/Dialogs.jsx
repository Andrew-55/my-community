import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    debugger;
    let DialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let MessangesElements = props.state.messages.map(messageIt => <Message message={messageIt.message} id={messageIt.id} />)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(newText));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div>{DialogsElements}</div>
            </div>
            <div className={classes.messages}>
                {MessangesElements}
                <div>
                    <textarea placeholder='Enter your message' onChange={onMessageChange} value={props.state.newMessageText} ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
