import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sateBarReducer from './sateBarReducer';
import usersReducer from './usersReducer';




let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sateBar: sateBarReducer
});

let store = createStore(reducers);

export default store;