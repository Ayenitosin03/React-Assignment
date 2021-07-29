import React from 'react'
import { getInitials } from './Initials'

function InitialName() {
    const name= getInitials("Oluwatosin Ayeni")
    return (
        <div>
            <h1>My Inital is: {name}</h1>
        </div>
    )
}

export default InitialName
