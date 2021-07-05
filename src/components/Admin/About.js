import React from 'react'

function About(props) {
    return (
        <>
            <div className="card">
                <div className='card-body'>
                   <strong> Name</strong> <div className='card-text'>{props.name}</div>
                </div>
            </div>
        </>
    )
}

export default About
