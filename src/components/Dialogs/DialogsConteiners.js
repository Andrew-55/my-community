import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
