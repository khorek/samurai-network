import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Message 1', likesCount: 10 },
        { id: 2, message: 'Message 2', likesCount: 10 },
        { id: 3, message: 'Message 3', likesCount: 10 },
        { id: 4, message: 'Message 4', likesCount: 10 },
    ],
}

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-cam.com');

    //  2. Action
    let newState = profileReducer(state, action);

    // 3 Expectension
    expect(newState.posts.length).toBe(5);
})


it('message should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-cam.com');

    //  2. Action
    let newState = profileReducer(state, action);

    // 3 Expectension
    expect(newState.posts[4].message).toBe('it-cam.com');
})

it('after deleting length should be increment', () => {
    // 1. test data
    let action = deletePost(1);

    //  2. Action
    let newState = profileReducer(state, action);

    // 3 Expectension
    expect(newState.posts.length).toBe(3);
})
