import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let DialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let MessangesElements = props.state.messages.map(messageIt => <Message message={messageIt.message} id={messageIt.id} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value;
        props.updateNewMessageText(newText);
    }
    debugger;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                {MessangesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText} ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
