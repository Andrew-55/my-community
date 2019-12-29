import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Texterea } from '../common/FormsControls/FormsControls';
import { required, maxLenghtCreator } from '../../redux/utils/validators/validators';

const Dialogs = (props) => {

    let DialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let MessangesElements = props.dialogsPage.messages.map(messageIt => <Message message={messageIt.message} key={messageIt.id} id={messageIt.id} />)


    let onNewMessageChange = (values) => {
        props.addMessage(values.newMessageText)
    }

    if (!props.isAuth) {

        return (<Redirect to={'/login'} />)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div>{DialogsElements}</div>
            </div>
            <div className={classes.messages}>
                <div>{MessangesElements}</div>
                <AddMessageReduxForm onSubmit={onNewMessageChange} />
            </div>
        </div>
    )
}

const maxLenght20 = maxLenghtCreator(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Texterea} name="newMessageText" placeholder={'Enter your message'}
                    validate={[required, maxLenght20]} />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
