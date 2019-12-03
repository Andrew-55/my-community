import { rerenderEntereTree } from "../render";

let state = {

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
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likecount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntereTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntereTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntereTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntereTree(state);

}

export default state;
