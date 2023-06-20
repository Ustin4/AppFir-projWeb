import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.messages}/>)


    let newPostElement = React.createRef()

    const messagePostsClickHandler = () => {
        props.addMessages()
    }

    const onChangeMessagePostsHandler = () => {
        let text = newPostElement.current.value
        props.updateNewMessagesText(text)
        console.log(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>

            <div className={s.messagesTextСontainer}>

                <textarea ref={newPostElement}
                          onChange={onChangeMessagePostsHandler}
                          value={props.dialogsPage.newPostText}/>

                <button className={s.buttonMessages}
                        onClick={messagePostsClickHandler}>add
                </button>
            </div>

        </div>
    )
}
export default Dialogs;
