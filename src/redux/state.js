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
    getState() {

        return this._state
    },
    _callSubscriber() {
        console.log('state  changed')
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessages() {

        let newMassages = {
            id: 4,
            messages: this._state.dialogsPage.newMessagesText
        }
        this._state.dialogsPage.messages.push(newMassages)
        this._state.dialogsPage.newMessagesText = ''
        this._callSubscriber(this._state)

    },
    updateNewMessagesText(newText) {
        this._state.dialogsPage.newMessagesText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}


/*export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}*/

/*
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessages = () => {
    let newMassages = {
        id: 4,
        messages: state.dialogsPage.newMessagesText
    }
    state.dialogsPage.messages.push(newMassages)
    state.dialogsPage.newMessagesText = ''
    rerenderEntireTree(state)

}

export const updateNewMessagesText = (newText) => {
    state.dialogsPage.newMessagesText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}*/


export default store

window.store = store