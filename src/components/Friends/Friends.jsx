import React from "react";
import s from './Friends.module.css'


const Friends = (props) => {
    return (
        <div>
            <h1>Friends</h1>
            <div className={s.circle}>  </div>
            <div className={s.circle}>  </div>
            <div className={s.circle}>  </div>

            <div>{props.state.Friend.map(m=>m.name)}</div>
        </div>
    )
}
export default Friends;
