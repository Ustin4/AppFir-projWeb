
const ADD_POST ='ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGES ='ADD-MESSAGES'
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'hi how are you?', likesCount: 12},
                {id: 2, messages: 'hi how', likesCount: 11},
            ],
            newPostText: 'hi'

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ustin'},
                {id: 2, name: 'Veronika'},
                {id: 3, name: 'yla'},
                {id: 4, name: 'Maxim'},
            ],
            messages: [
                {id: 1, messages: 'hi'},
                {id: 2, messages: 'How is your it-kamasutra?'},
                {id: 3, messages: 'yo!?'},
            ],
            newMessagesText: 'KY-KY'
        },

        sitebar: {
            Friend: [
                {id: 1, name: "ustin "},
                {id: 2, name: "veronika"},
                {id: 3, name: " igor"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state  changed')
    },

    getState() {

        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { //{type:'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        }else if (action === ADD_MESSAGES){
            let newMassages = {
                id: 4,
                messages: this._state.dialogsPage.newMessagesText
            }
            this._state.dialogsPage.messages.push(newMassages)
            this._state.dialogsPage.newMessagesText=''
            this._callSubscriber(this._state)

        }else if (action === UPDATE_NEW_MESSAGES_TEXT){
            this._state.dialogsPage.newMessagesText = action.newText
            this._callSubscriber(this._state)
        }
    }

}


export const addPostActionCreator=()=>({type: ADD_POST})
export const updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT, newText:text})



export const addMessagesActionCreator=()=> ({type: ADD_POST})


export const updateNewMessagesTextActionCreator=(text)=>
    ({type: UPDATE_NEW_POST_TEXT, newText:text})




export default store

window.store = store