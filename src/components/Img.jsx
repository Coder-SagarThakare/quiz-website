
import React from 'react'

function Img({
    style,
    className,
    src,
    alt,
    ...props
}) {
    return (
        <img
            className={`w-100 ${className}`}
            style={style}
            src={src}
            alt={alt}
            {...props}
        />
    )
}

export default Img
