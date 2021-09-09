const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan 1'},
        {id: 2, name: 'Oleg 2'},
        {id: 3, name: 'Mariya 3'},
        {id: 4, name: 'Dan 4'},
    ],
    messages: [
        {id: 1, message: 'hello 1'},
        {id: 2, message: 'My 2'},
        {id: 3, message: 'Name 3'},
        {id: 4, message: 'Jimbo Jumbo 4'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: '123', message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody }); 

export default dialogsReducer;