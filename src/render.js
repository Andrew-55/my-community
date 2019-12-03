import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost, updateNewPostText, updateNewMessageText, addMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntereTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </BrowserRouter>, document.getElementById('root')
    );
}
