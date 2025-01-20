import React from 'react'
import { HashLoader } from 'react-spinners'

function Loader({ size = 50 }) {
    return (
        <div className='w-100 h-100 d-flex justify-content-center align-items-center '>
            <HashLoader color='#36d7b7' size={size} />
        </div>
    )
}

export default Loader