//import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsConteiner = (props) => {
//     debugger;
//     let state = props.store.getState();

//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }

//     let onMessageChange = (newText) => {

//         props.store.dispatch(updateNewMessageTextActionCreator(newText));
//     }

//     return (
//         <Dialogs updateNewMessageTextActionCreator={onMessageChange}
//             addMessageActionCreator={addMessage}
//             dialogsPage={state.dialogsPage}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextActionCreator: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText));
        },
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;
