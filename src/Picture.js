import React from 'react'
import classes from './Picture.module.css'

function Picture() {
    return (
        <div>
            <img src="/my picture.JPG" alt="myphoto" className={classes.img}/>
        </div>
    )
}

export default Picture
