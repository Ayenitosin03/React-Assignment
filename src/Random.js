import React from 'react'
import { randomNumbers } from './Initials'

function Random() {
    const random = randomNumbers(2, 10)
    return (
        <div>
            <h1>The random Number is {random}</h1>
        </div>
    )
}

export default Random
