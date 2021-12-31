import React from 'react'

const Button= ({isActive, clicked})=> {
    return (
        <div>
            <button style={{backgroundColor:"#F7A440"}} onClick={clicked}>{isActive ? "Get another user": "Get user"}</button>
        </div>
    )
}

export default Button
