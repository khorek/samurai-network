const UPDATE_NEW_COLOR_BODY = 'UPDATE-NEW-COLOR-BODY';
const SEND_COLOR = 'SEND-COLOR';
const UPDATE_NAME = 'UPDATE_NAME';

let initialState = {
    colors: [
        {id: 1, color: 'red'},
        {id: 2, color: 'blue'},
    ],
    newColorBody: ''
}

// Reducers:
const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_COLOR_BODY:
            return {
                ...state,
                newColorBody: action.body
            }
        case SEND_COLOR:
            let body = state.newColorBody;
            return {
                ...state,
                newColorBody: '',
                colors: [...state.colors, {id: 7, color: body}]
            }
        case UPDATE_NAME: 
            return {
                ...state,
                title: Math.floor(Math.random() * 150)
            }
        default:
            return state;
    }
}

// Action Creators:
export const sendColorCreator = () => ({type: SEND_COLOR}); 
export const updateNewColorBodyCreator = (body) => ({type: UPDATE_NEW_COLOR_BODY, body: body});
export const updateNameCreator = () => ({type: UPDATE_NAME});

// Thunk Creators:

export default sidebarReducer;