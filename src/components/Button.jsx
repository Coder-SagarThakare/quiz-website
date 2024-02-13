import React from 'react'

function Button({ className, title, type, src, ...props }) {
    console.log(props);
    return (
        <button

            className={`w-100 d-flex justify-content-evenly align-items-center ${className}`}
            {...props}
        >
            <img src={src}></img>
            {title}
        </button>
    )
}

export default Button