import React from 'react'
import "./Main.css"

export default function Main() {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '.../Images/homePic.jpg'} alt='homepic' />
        </div>
    )
}
