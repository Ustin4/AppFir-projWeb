import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {


    let postsElements =
        props.posts.map(p => <Post messages={p.messages} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    const addPostClickHandler = () => {
        props.addPost()
    }

    const onChangePostHandler = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onChangePostHandler}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;
