import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sateBarReducer from './sateBarReducer';




let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sateBar: sateBarReducer
});

let store = createStore(reducers);

export default store;