import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2RaRvGN0HgKhbpTHaK9QlJ0IorzE0EdXqg&usqp=CAU'}/>
            {props.messages}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;



