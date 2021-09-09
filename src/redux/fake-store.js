import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Message 1', likesCount: 10},
                {id: 2, message: 'Message 2', likesCount: 10},
                {id: 3, message: 'Message 3', likesCount: 10},
                {id: 4, message: 'Message 4', likesCount: 10},
              ],
            newPostText: 'it-camasutra'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ivan 1'},
                {id: 2, name: 'Ivan 2'},
                {id: 3, name: 'Ivan 3'},
                {id: 4, name: 'Ivan 4'},
            ],
            messages: [
                {id: 1, message: 'hello 1'},
                {id: 2, message: 'hello 2'},
                {id: 3, message: 'hello 3'},
                {id: 4, message: 'hello 4'}
            ],
            newMessageBody: ''
        },
        sidebarPage: {
            colors: [
                {id: 1, color: 'red'},
                {id: 2, color: 'blue'},
            ],
            newColorBody: ''
        }
    },

    _callSubscriber () {
        console.log('State changed');
    },
    
    getState () {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer; // Паттерн проектирования observer
    },

    dispatch(action) { // action - это объект который имеет type.
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);

    }
    
}

export default store;
window.store = store;