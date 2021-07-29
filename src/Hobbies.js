import React from 'react'
import classes from './Hobbies.module.css'
function Hobbies() {
    return (
        <div>
             <h1 className={classes.hobbies}>These Are My Hobbies:</h1>
             <ul>
                 <li className={classes.music}>I Love Listening To Music</li>
                 <li className={classes.hobbies}>I Love Dancing</li>
                 <li className={classes.gisting}>I Love Gisting</li>
                 <li className={classes.hobbies}>I Love Coding and Playing with Colors</li>
             </ul>
        </div>
    )
}

export default Hobbies
