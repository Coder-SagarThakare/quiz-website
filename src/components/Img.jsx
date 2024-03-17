
import React from 'react'

/**
 * Functional component for rendering an image element.
 * 
 * @param {object} style - Custom style object for the image.
 * @param {string} className - Additional CSS classes for the image.
 * @param {string} src - The URL of the image.
 * @param {string} alt - Alternate text for the image.
 * @param {object} props... - Additional props to be passed to the <img> element.
 * @returns  - Image element with specified properties.
 */
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
