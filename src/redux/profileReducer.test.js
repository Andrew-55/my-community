import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

it('new post should be added', () => {

    let state = {

        posts: [
            { id: 1, message: 'Hi, How are you?', likecount: 15 },
            { id: 2, message: 'Hi, How are you?', likecount: 18 },
            { id: 3, message: 'Hi, How are you?', likecount: 17 },
            { id: 4, message: 'It is my first post', likecount: 20 },

        ]
    }

    let action = addPostActionCreator("Tamtek")

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('new correct message', () => {

    let state = {

        posts: [
            { id: 1, message: 'Hi, How are you?', likecount: 15 },
            { id: 2, message: 'Hi, How are you?', likecount: 18 },
            { id: 3, message: 'Hi, How are you?', likecount: 17 },
            { id: 4, message: 'It is my first post', likecount: 20 },

        ]
    }

    let action = addPostActionCreator("Tamtek")

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("Tamtek");
});

it('length message shouid be decrement after delete', () => {

    let state = {

        posts: [
            { id: 1, message: 'Hi, How are you?', likecount: 15 },
            { id: 2, message: 'Hi, How are you?', likecount: 18 },
            { id: 3, message: 'Hi, How are you?', likecount: 17 },
            { id: 4, message: 'It is my first post', likecount: 20 },

        ]
    }

    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('length message not change after delete if postId is not correct', () => {

    let state = {

        posts: [
            { id: 1, message: 'Hi, How are you?', likecount: 15 },
            { id: 2, message: 'Hi, How are you?', likecount: 18 },
            { id: 3, message: 'Hi, How are you?', likecount: 17 },
            { id: 4, message: 'It is my first post', likecount: 20 },

        ]
    }

    let action = deletePost(100);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

