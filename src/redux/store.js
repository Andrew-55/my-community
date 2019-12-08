import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sateBarReducer from "./sateBarReducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, How are you?', likecount: 15 },
                { id: 2, message: 'Hi, How are you?', likecount: 18 },
                { id: 3, message: 'Hi, How are you?', likecount: 17 },
                { id: 4, message: 'It is my first post', likecount: 20 }
            ],

            newPostText: ''
        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Valera' },
                { id: 5, name: 'Sasha' }
            ],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' }
            ],

            newMessageText: ''
        },
        sateBar: {}
    },

    getState() {
        debugger;
        return this._state;
    },

    _callSubscribe() {
        console.log('state change')
    },

    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sateBar = sateBarReducer(this._state.sateBar, action);

        this._callSubscribe(this._state);
    }
};





export default store;
